import { COUNTRIES } from '@/data/countries';
import type { AfricanCountry, CoverageLevel } from '@/types';

/**
 * Geometry for the MIZI Data Map.
 *
 * The continent is described once in geographic coordinates and projected into
 * SVG space here. Everything else — the coastline, the binned data cells, the
 * region boundaries and the country labels — is derived from that one source,
 * so nothing can drift out of alignment.
 *
 * Regions are a Voronoi partition of country centroids clipped to the
 * coastline. That is deliberate: it reads as a binned data raster rather than
 * a political map, and it never pretends to be an official boundary. The UI
 * says so wherever the map appears.
 */

const LON_MIN = -18;
const LON_MAX = 52;
const LAT_MAX = 38;
const LAT_MIN = -35.5;
const SCALE = 8;

export const MAP_WIDTH = Math.round((LON_MAX - LON_MIN) * SCALE);
export const MAP_HEIGHT = Math.round((LAT_MAX - LAT_MIN) * SCALE);
export const MAP_VIEWBOX = `0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`;

export interface Point {
  x: number;
  y: number;
}

/** Equirectangular projection — accurate enough at continental scale, and cheap. */
export function project(lon: number, lat: number): Point {
  return {
    x: (lon - LON_MIN) * SCALE,
    y: (LAT_MAX - lat) * SCALE,
  };
}

/** Generalised African coastline, ordered clockwise from north-west Morocco. */
const AFRICA_COAST: Array<[number, number]> = [
  [-9.8, 32.0], [-6.0, 35.9], [-2.0, 35.2], [3.0, 36.9], [8.5, 37.2], [10.2, 36.9],
  [11.5, 33.8], [13.2, 32.9], [15.5, 31.4], [19.0, 30.8], [20.2, 32.3], [25.0, 31.6],
  [29.9, 31.2], [32.5, 31.4], [34.2, 29.5], [35.5, 24.0], [37.2, 21.0], [38.6, 18.0],
  [39.5, 15.0], [41.5, 13.5], [43.3, 12.7], [44.5, 11.5], [47.5, 11.0], [51.3, 12.0],
  [50.8, 9.0], [48.0, 5.5], [44.5, 2.0], [41.5, -2.0], [40.0, -4.5], [39.5, -8.0],
  [40.5, -12.5], [40.6, -16.0], [36.5, -19.0], [34.8, -21.0], [32.9, -25.9], [30.5, -30.5],
  [27.5, -33.2], [25.0, -34.2], [20.0, -34.8], [18.4, -34.0], [17.0, -30.0], [15.0, -26.5],
  [14.5, -22.5], [12.5, -18.5], [11.7, -15.8], [13.0, -12.5], [12.2, -9.0], [13.4, -5.9],
  [11.0, -3.7], [9.3, -0.6], [9.6, 3.8], [8.5, 4.5], [5.6, 4.3], [2.7, 6.4],
  [-0.5, 5.4], [-3.5, 4.9], [-7.5, 4.4], [-11.5, 6.9], [-13.3, 8.5], [-16.0, 12.5],
  [-17.5, 14.7], [-16.5, 19.0], [-16.0, 21.5], [-14.5, 25.0], [-13.0, 27.7], [-10.0, 29.0],
];

const MADAGASCAR_COAST: Array<[number, number]> = [
  [49.5, -12.5], [50.5, -15.5], [49.8, -17.0], [48.5, -20.5], [47.2, -24.0], [45.2, -25.6],
  [43.5, -22.5], [43.3, -19.5], [44.5, -16.2], [46.5, -15.5], [47.9, -13.4],
];

const toRing = (ring: Array<[number, number]>): Point[] =>
  ring.map(([lon, lat]) => project(lon, lat));

export const AFRICA_RING = toRing(AFRICA_COAST);
export const MADAGASCAR_RING = toRing(MADAGASCAR_COAST);

const round = (value: number): number => Math.round(value * 10) / 10;

/** Closed SVG path for a projected ring. */
export function ringToPath(ring: Point[]): string {
  return `${ring
    .map(({ x, y }, i) => `${i === 0 ? 'M' : 'L'}${round(x)} ${round(y)}`)
    .join(' ')} Z`;
}

export const AFRICA_PATH = ringToPath(AFRICA_RING);
export const MADAGASCAR_PATH = ringToPath(MADAGASCAR_RING);
export const LAND_RINGS = [AFRICA_RING, MADAGASCAR_RING];

/** Ray-casting containment test, used to keep every cell on land. */
function containsPoint(ring: Point[], x: number, y: number): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const { x: xi, y: yi } = ring[i];
    const { x: xj, y: yj } = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

const isOnLand = (x: number, y: number): boolean =>
  LAND_RINGS.some((ring) => containsPoint(ring, x, y));

/** Countries with their projected centroids attached. */
export interface ProjectedCountry extends AfricanCountry, Point {}

export const PROJECTED_COUNTRIES: ProjectedCountry[] = COUNTRIES.map((country) => ({
  ...country,
  ...project(country.lon, country.lat),
}));

export const COUNTRY_BY_ID = new Map(PROJECTED_COUNTRIES.map((c) => [c.id, c]));

export interface CountryRegions {
  /** One filled path per country: its cells, drawn as a binned raster. */
  regions: Array<{ id: string; name: string; coverage: CoverageLevel; path: string }>;
  /** Every edge where two different countries meet, as one path. */
  boundaries: string;
  /** Cell size in SVG units, so callers can match hit areas to the raster. */
  cell: number;
}

/**
 * Partitions the continent into cells and assigns each to its nearest country
 * centroid. Cheap, deterministic, and it produces the binned look of a real
 * coverage raster rather than a fake political outline.
 *
 * @param cell size of one bin in SVG units; smaller is sharper and slower
 */
export function buildCountryRegions(cell = 8): CountryRegions {
  const columns = Math.ceil(MAP_WIDTH / cell);
  const rows = Math.ceil(MAP_HEIGHT / cell);

  // owner[row][col] = index into PROJECTED_COUNTRIES, or -1 for sea.
  const owner: Int16Array = new Int16Array(columns * rows).fill(-1);

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const cx = col * cell + cell / 2;
      const cy = row * cell + cell / 2;
      if (!isOnLand(cx, cy)) continue;

      let bestIndex = -1;
      let bestDistance = Infinity;
      for (let i = 0; i < PROJECTED_COUNTRIES.length; i += 1) {
        const country = PROJECTED_COUNTRIES[i];
        const dx = country.x - cx;
        const dy = country.y - cy;
        const distance = dx * dx + dy * dy;
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      }
      owner[row * columns + col] = bestIndex;
    }
  }

  // One path per country keeps the DOM at ~50 nodes instead of ~5,000.
  const cellPaths: string[][] = PROJECTED_COUNTRIES.map(() => []);
  const inset = 0.55; // leaves a hairline between bins, like a data raster
  const size = round(cell - inset * 2);

  const boundarySegments: string[] = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const index = owner[row * columns + col];
      if (index < 0) continue;

      const x = round(col * cell + inset);
      const y = round(row * cell + inset);
      cellPaths[index].push(`M${x} ${y}h${size}v${size}h-${size}Z`);

      // Emit an edge wherever the neighbour belongs to a different country.
      const right = col + 1 < columns ? owner[row * columns + col + 1] : -1;
      if (right >= 0 && right !== index) {
        const ex = round((col + 1) * cell);
        boundarySegments.push(`M${ex} ${round(row * cell)}v${round(cell)}`);
      }
      const below = row + 1 < rows ? owner[(row + 1) * columns + col] : -1;
      if (below >= 0 && below !== index) {
        const ey = round((row + 1) * cell);
        boundarySegments.push(`M${round(col * cell)} ${ey}h${round(cell)}`);
      }
    }
  }

  const regions = PROJECTED_COUNTRIES.map((country, index) => ({
    id: country.id,
    name: country.name,
    coverage: country.coverage,
    path: cellPaths[index].join(''),
  })).filter((region) => region.path.length > 0);

  return { regions, boundaries: boundarySegments.join(''), cell };
}

/**
 * Ambient observation points for the hero map: a deterministic scatter of
 * on-land coordinates that reads as satellite passes and field stations.
 */
export function buildObservationPoints(count = 90, seed = 20260226): Point[] {
  let state = seed;
  const random = () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };

  const points: Point[] = [];
  let attempts = 0;
  while (points.length < count && attempts < count * 40) {
    attempts += 1;
    const x = random() * MAP_WIDTH;
    const y = random() * MAP_HEIGHT;
    if (isOnLand(x, y)) points.push({ x: round(x), y: round(y) });
  }
  return points;
}

/** Graticule lines, drawn every 10 degrees to read as a GIS overlay. */
export function buildGraticule(stepDegrees = 10): { meridians: string[]; parallels: string[] } {
  const meridians: string[] = [];
  const parallels: string[] = [];

  for (let lon = Math.ceil(LON_MIN / stepDegrees) * stepDegrees; lon <= LON_MAX; lon += stepDegrees) {
    const { x } = project(lon, 0);
    meridians.push(`M${round(x)} 0V${MAP_HEIGHT}`);
  }
  for (let lat = Math.ceil(LAT_MIN / stepDegrees) * stepDegrees; lat <= LAT_MAX; lat += stepDegrees) {
    const { y } = project(0, lat);
    parallels.push(`M0 ${round(y)}H${MAP_WIDTH}`);
  }
  return { meridians, parallels };
}

/** Great-circle-ish links between pilot country and regional anchors. */
export const CONNECTION_PAIRS: Array<[string, string]> = [
  ['rw', 'ke'],
  ['rw', 'tz'],
  ['rw', 'ug'],
  ['rw', 'et'],
  ['ke', 'et'],
  ['et', 'sd'],
  ['rw', 'cd'],
  ['cd', 'ng'],
  ['ng', 'gh'],
  ['gh', 'sn'],
  ['sn', 'ml'],
  ['ml', 'ma'],
  ['sd', 'eg'],
  ['rw', 'zm'],
  ['zm', 'za'],
  ['za', 'mz'],
  ['tz', 'mg'],
];

export interface Connection {
  id: string;
  from: ProjectedCountry;
  to: ProjectedCountry;
  /** Quadratic control point, so links arc instead of running straight. */
  control: Point;
}

export const CONNECTIONS: Connection[] = CONNECTION_PAIRS.flatMap(([fromId, toId]) => {
  const from = COUNTRY_BY_ID.get(fromId);
  const to = COUNTRY_BY_ID.get(toId);
  if (!from || !to) return [];

  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  // Offset perpendicular to the chord gives every link a consistent bow.
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  const bow = Math.min(length * 0.16, 26);

  return [
    {
      id: `${fromId}-${toId}`,
      from,
      to,
      control: { x: midX + (-dy / length) * bow, y: midY + (dx / length) * bow },
    },
  ];
});

export const connectionPath = (connection: Connection): string =>
  `M${round(connection.from.x)} ${round(connection.from.y)}Q${round(connection.control.x)} ${round(
    connection.control.y,
  )} ${round(connection.to.x)} ${round(connection.to.y)}`;
