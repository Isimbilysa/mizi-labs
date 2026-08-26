import { useId, useMemo } from 'react';

import { LABELLED_COUNTRIES } from '@/data/countries';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import {
  AFRICA_PATH,
  CONNECTIONS,
  MADAGASCAR_PATH,
  MAP_VIEWBOX,
  PROJECTED_COUNTRIES,
  buildCountryRegions,
  buildGraticule,
  buildObservationPoints,
  connectionPath,
} from '@/lib/africa';
import type { CountryRegions } from '@/lib/africa';
import styles from './AfricaDataMap.module.css';

/**
 * The map appears three times on the page and the geometry is identical every
 * time, so it is computed once for the whole session rather than per instance.
 */
let regionCache: CountryRegions | null = null;
const getRegions = (): CountryRegions => {
  if (!regionCache) regionCache = buildCountryRegions(9);
  return regionCache;
};

export type MapMode = 'ambient' | 'explore' | 'coverage';

interface AfricaDataMapProps {
  mode?: MapMode;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  className?: string;
  /** Describes the map for assistive technology. Required — it carries meaning. */
  label: string;
  description: string;
}

/**
 * Africa rendered as a binned data raster.
 *
 * Cells are assigned to their nearest country centroid, which produces regions
 * that read like a coverage layer in a GIS rather than a political map. They
 * are explicitly not official boundaries, and the surrounding UI says so.
 */
export function AfricaDataMap({
  mode = 'ambient',
  selectedId = null,
  onSelect,
  className = '',
  label,
  description,
}: AfricaDataMapProps) {
  const uid = useId().replace(/:/g, '');
  const prefersReducedMotion = usePrefersReducedMotion();

  const { regions, boundaries } = useMemo(getRegions, []);
  const graticule = useMemo(() => buildGraticule(10), []);
  const points = useMemo(() => (mode === 'ambient' ? buildObservationPoints(76) : []), [mode]);

  const showRegions = mode !== 'ambient';
  const showConnections = mode !== 'coverage';
  const interactive = mode === 'explore' && Boolean(onSelect);

  const clipId = `land-${uid}`;
  const glowId = `glow-${uid}`;

  return (
    <div
      className={[styles.wrapper, styles[mode], className].filter(Boolean).join(' ')}
      data-static={prefersReducedMotion ? 'true' : 'false'}
    >
      <svg
        className={styles.svg}
        viewBox={MAP_VIEWBOX}
        role="img"
        aria-labelledby={`${uid}-title ${uid}-desc`}
        preserveAspectRatio="xMidYMid meet"
      >
        <title id={`${uid}-title`}>{label}</title>
        <desc id={`${uid}-desc`}>{description}</desc>

        <defs>
          <clipPath id={clipId}>
            <path d={AFRICA_PATH} />
            <path d={MADAGASCAR_PATH} />
          </clipPath>
          <radialGradient id={glowId} cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="rgba(61, 138, 107, 0.28)" />
            <stop offset="100%" stopColor="rgba(61, 138, 107, 0)" />
          </radialGradient>
        </defs>

        {/* Graticule: the GIS frame the continent sits inside. */}
        <g className={styles.graticule} aria-hidden="true">
          {graticule.meridians.map((d) => (
            <path key={d} d={d} />
          ))}
          {graticule.parallels.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>

        <g aria-hidden="true">
          <path d={AFRICA_PATH} className={styles.landBase} />
          <path d={MADAGASCAR_PATH} className={styles.landBase} />
          <path d={AFRICA_PATH} fill={`url(#${glowId})`} />
        </g>

        <g clipPath={`url(#${clipId})`}>
          {showRegions ? (
            <g className={styles.regions}>
              {regions.map((region) => (
                <path
                  key={region.id}
                  d={region.path}
                  className={styles.region}
                  data-coverage={region.coverage}
                  data-selected={selectedId === region.id ? 'true' : 'false'}
                  data-interactive={interactive ? 'true' : 'false'}
                  onClick={interactive ? () => onSelect?.(region.id) : undefined}
                  aria-hidden="true"
                >
                  {interactive ? <title>{region.name}</title> : null}
                </path>
              ))}
            </g>
          ) : null}

          <path d={boundaries} className={styles.boundaries} aria-hidden="true" />
        </g>

        <path d={AFRICA_PATH} className={styles.coastline} aria-hidden="true" />
        <path d={MADAGASCAR_PATH} className={styles.coastline} aria-hidden="true" />

        {showConnections ? (
          <g className={styles.connections} aria-hidden="true">
            {CONNECTIONS.map((connection, index) => (
              <path
                key={connection.id}
                d={connectionPath(connection)}
                style={{ '--index': index } as React.CSSProperties}
              />
            ))}
          </g>
        ) : null}

        {mode === 'ambient' ? (
          <g className={styles.points} aria-hidden="true">
            {points.map((point, index) => (
              <circle
                key={`${point.x}-${point.y}`}
                cx={point.x}
                cy={point.y}
                r={1.6}
                style={{ '--index': index % 12 } as React.CSSProperties}
              />
            ))}
          </g>
        ) : null}

        {/* Station markers for every country, emphasised when selected. */}
        <g className={styles.stations} aria-hidden="true">
          {PROJECTED_COUNTRIES.map((country) => (
            <circle
              key={country.id}
              cx={country.x}
              cy={country.y}
              r={selectedId === country.id ? 4.2 : 2}
              className={styles.station}
              data-coverage={country.coverage}
              data-selected={selectedId === country.id ? 'true' : 'false'}
              data-pilot={country.provenance === 'in-progress' ? 'true' : 'false'}
            />
          ))}
        </g>

        {mode !== 'ambient' ? (
          <g className={styles.labels} aria-hidden="true">
            {PROJECTED_COUNTRIES.filter(
              (country) => LABELLED_COUNTRIES.has(country.id) || selectedId === country.id,
            ).map((country) => (
              <text
                key={country.id}
                x={country.x + 6}
                y={country.y - 5}
                className={styles.label}
                data-selected={selectedId === country.id ? 'true' : 'false'}
              >
                {country.name}
              </text>
            ))}
          </g>
        ) : null}
      </svg>
    </div>
  );
}
