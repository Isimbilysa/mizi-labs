/**
 * Geometry for the "Africa as the laboratory" visual.
 *
 * The continent is described once in geographic coordinates and projected into
 * SVG space here, so the outline, the sensor dot-field, and the network nodes
 * all share one coordinate system. Nothing in this file is political: the
 * outline is a generalised coastline and the nodes mark agro-ecological
 * regions, not countries.
 */

const LON_MIN = -18;
const LON_MAX = 52;
const LAT_MAX = 38;
const LAT_MIN = -35.5;
const SCALE = 8;

export const MAP_WIDTH = Math.round((LON_MAX - LON_MIN) * SCALE);
export const MAP_HEIGHT = Math.round((LAT_MAX - LAT_MIN) * SCALE);
export const MAP_VIEWBOX = `0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`;

/** Equirectangular projection — accurate enough at continental scale, and cheap. */
export function project(lon, lat) {
  return {
    x: (lon - LON_MIN) * SCALE,
    y: (LAT_MAX - lat) * SCALE,
  };
}

/** Generalised African coastline, ordered clockwise from north-west Morocco. */
const AFRICA_COAST = [
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

const MADAGASCAR_COAST = [
  [49.5, -12.5], [50.5, -15.5], [49.8, -17.0], [48.5, -20.5], [47.2, -24.0], [45.2, -25.6],
  [43.5, -22.5], [43.3, -19.5], [44.5, -16.2], [46.5, -15.5], [47.9, -13.4],
];

const toProjectedRing = (ring) => ring.map(([lon, lat]) => project(lon, lat));

export const AFRICA_RING = toProjectedRing(AFRICA_COAST);
export const MADAGASCAR_RING = toProjectedRing(MADAGASCAR_COAST);

const round = (value) => Math.round(value * 10) / 10;

/** Closed SVG path for a projected ring. */
export function ringToPath(ring) {
  return `${ring.map(({ x, y }, i) => `${i === 0 ? 'M' : 'L'}${round(x)} ${round(y)}`).join(' ')} Z`;
}

export const AFRICA_PATH = ringToPath(AFRICA_RING);
export const MADAGASCAR_PATH = ringToPath(MADAGASCAR_RING);

/** Ray-casting containment test, used to keep the dot-field inside the coastline. */
function containsPoint(ring, x, y) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const { x: xi, y: yi } = ring[i];
    const { x: xj, y: yj } = ring[j];
    const intersects =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}

/**
 * Samples a regular lattice and keeps the points that fall on land — a
 * data-grid reading of the continent rather than a decorative silhouette.
 * @param {number} step distance between samples in SVG units
 */
export function buildDotField(step = 13) {
  const dots = [];
  const rings = [AFRICA_RING, MADAGASCAR_RING];

  for (let y = step; y < MAP_HEIGHT; y += step) {
    for (let x = step; x < MAP_WIDTH; x += step) {
      if (rings.some((ring) => containsPoint(ring, x, y))) {
        dots.push({ x, y });
      }
    }
  }
  return dots;
}

/**
 * Agro-ecological regions used as network nodes. `weight` drives the visual
 * emphasis of a node; `tier` groups nodes so a few can pulse while the rest
 * stay quiet.
 */
export const REGION_NODES = [
  { id: 'atlas', label: 'Atlas & Maghreb', lon: 3.0, lat: 33.5, tier: 'primary' },
  { id: 'sahel', label: 'Sahel corridor', lon: 5.0, lat: 15.0, tier: 'primary' },
  { id: 'senegal', label: 'Senegal valley', lon: -14.2, lat: 15.8, tier: 'secondary' },
  { id: 'guinea', label: 'Guinea savanna', lon: -1.0, lat: 9.5, tier: 'primary' },
  { id: 'westcoast', label: 'Coastal West Africa', lon: -5.5, lat: 6.2, tier: 'secondary' },
  { id: 'nile', label: 'Nile basin', lon: 31.5, lat: 20.5, tier: 'primary' },
  { id: 'highlands', label: 'Ethiopian highlands', lon: 38.8, lat: 9.2, tier: 'primary' },
  { id: 'horn', label: 'Horn drylands', lon: 45.0, lat: 6.0, tier: 'secondary' },
  { id: 'rift', label: 'Rift Valley', lon: 36.2, lat: -1.2, tier: 'primary' },
  { id: 'victoria', label: 'Lake Victoria basin', lon: 32.4, lat: -2.4, tier: 'secondary' },
  { id: 'congo', label: 'Congo basin', lon: 21.0, lat: -2.0, tier: 'primary' },
  { id: 'angola', label: 'Angolan plateau', lon: 16.5, lat: -12.0, tier: 'secondary' },
  { id: 'zambezi', label: 'Zambezi basin', lon: 30.0, lat: -16.2, tier: 'primary' },
  { id: 'highveld', label: 'Southern highveld', lon: 26.5, lat: -26.5, tier: 'secondary' },
  { id: 'cape', label: 'Cape winter-rainfall', lon: 19.5, lat: -32.6, tier: 'secondary' },
  { id: 'madagascar', label: 'Madagascar', lon: 46.8, lat: -19.0, tier: 'secondary' },
];

/** Links describing knowledge moving between environments, not trade routes. */
export const REGION_LINKS = [
  ['atlas', 'sahel'],
  ['senegal', 'sahel'],
  ['sahel', 'guinea'],
  ['guinea', 'westcoast'],
  ['sahel', 'nile'],
  ['nile', 'highlands'],
  ['highlands', 'horn'],
  ['highlands', 'rift'],
  ['rift', 'victoria'],
  ['victoria', 'congo'],
  ['congo', 'guinea'],
  ['congo', 'angola'],
  ['rift', 'zambezi'],
  ['zambezi', 'angola'],
  ['zambezi', 'highveld'],
  ['highveld', 'cape'],
  ['rift', 'madagascar'],
  ['zambezi', 'madagascar'],
];

/** Node lookup with projected coordinates attached, ready for rendering. */
export const PROJECTED_NODES = REGION_NODES.map((node) => ({
  ...node,
  ...project(node.lon, node.lat),
}));

const nodeById = new Map(PROJECTED_NODES.map((node) => [node.id, node]));

export const PROJECTED_LINKS = REGION_LINKS.map(([fromId, toId]) => {
  const from = nodeById.get(fromId);
  const to = nodeById.get(toId);
  return { id: `${fromId}-${toId}`, from, to };
}).filter((link) => link.from && link.to);
