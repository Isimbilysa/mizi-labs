import { useId, useMemo } from 'react';

import { useInView } from '@/hooks/useInView';
import {
  AFRICA_PATH,
  MADAGASCAR_PATH,
  MAP_HEIGHT,
  MAP_VIEWBOX,
  MAP_WIDTH,
  PROJECTED_LINKS,
  PROJECTED_NODES,
  buildDotField,
} from '@/lib/africa';
import styles from './AfricaMap.module.css';

const DOT_STEP = 14;

/**
 * The continent rendered as a measurement surface: a sampled lattice of land,
 * links describing intelligence moving between environments, and nodes marking
 * agro-ecological regions. Animation only starts once the map is in view.
 */
export function AfricaMap() {
  const [ref, inView] = useInView({ threshold: 0.15, once: false });
  const uid = useId().replace(/:/g, '');
  const clipId = `africa-clip-${uid}`;
  const sweepId = `africa-sweep-${uid}`;
  const linkId = `africa-link-${uid}`;

  // The lattice is pure geometry — compute it once, never on re-render.
  const dots = useMemo(() => buildDotField(DOT_STEP), []);

  return (
    <figure className={styles.figure} ref={ref} data-active={inView ? 'true' : 'false'}>
      <svg
        className={styles.svg}
        viewBox={MAP_VIEWBOX}
        role="img"
        aria-labelledby={`${uid}-title ${uid}-desc`}
        preserveAspectRatio="xMidYMid meet"
      >
        <title id={`${uid}-title`}>Africa as a network of agro-ecological environments</title>
        <desc id={`${uid}-desc`}>
          An abstract map of the African continent sampled as a grid of data points, with sixteen
          regional nodes — from the Sahel corridor to the Cape — connected by lines representing
          intelligence shared between environments.
        </desc>

        <defs>
          <clipPath id={clipId}>
            <path d={AFRICA_PATH} />
            <path d={MADAGASCAR_PATH} />
          </clipPath>

          <linearGradient id={sweepId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(200, 169, 106, 0)" />
            <stop offset="50%" stopColor="rgba(200, 169, 106, 0.3)" />
            <stop offset="100%" stopColor="rgba(200, 169, 106, 0)" />
          </linearGradient>

          <linearGradient
            id={linkId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={MAP_WIDTH}
            y2={MAP_HEIGHT}
          >
            <stop offset="0%" stopColor="rgba(166, 192, 177, 0.95)" />
            <stop offset="55%" stopColor="rgba(200, 169, 106, 0.85)" />
            <stop offset="100%" stopColor="rgba(166, 192, 177, 0.9)" />
          </linearGradient>
        </defs>

        <g className={styles.landmass}>
          <path d={AFRICA_PATH} className={styles.landFill} />
          <path d={MADAGASCAR_PATH} className={styles.landFill} />
          <path d={AFRICA_PATH} className={styles.outline} />
          <path d={MADAGASCAR_PATH} className={styles.outline} />
        </g>

        <g clipPath={`url(#${clipId})`}>
          <g className={styles.dots} aria-hidden="true">
            {dots.map((dot) => (
              <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r={1.15} />
            ))}
          </g>

          <rect className={styles.sweep} x="-30%" y="0" width="30%" height="100%" fill={`url(#${sweepId})`} />
        </g>

        <g className={styles.links} aria-hidden="true">
          {PROJECTED_LINKS.map((link, index) => (
            <line
              key={link.id}
              x1={link.from.x}
              y1={link.from.y}
              x2={link.to.x}
              y2={link.to.y}
              stroke={`url(#${linkId})`}
              style={{ '--index': index }}
            />
          ))}
        </g>

        <g className={styles.nodes}>
          {PROJECTED_NODES.map((node, index) => (
            <g key={node.id} className={styles.node} data-tier={node.tier} style={{ '--index': index }}>
              <circle className={styles.halo} cx={node.x} cy={node.y} r={node.tier === 'primary' ? 13 : 9} />
              <circle className={styles.core} cx={node.x} cy={node.y} r={node.tier === 'primary' ? 3.6 : 2.6} />
              <text className={styles.label} x={node.x + 12} y={node.y + 4}>
                {node.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </figure>
  );
}
