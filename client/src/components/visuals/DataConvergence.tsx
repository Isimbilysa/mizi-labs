import { useId } from 'react';

import styles from './DataConvergence.module.css';

const WIDTH = 460;
const HEIGHT = 380;
const LABEL_X = 118;
const LINE_START = 130;
const NODE = { x: 372, y: HEIGHT / 2, r: 40 };

interface DataConvergenceProps {
  sources: string[];
  className?: string;
}

/**
 * Fragmented sources resolving into one place.
 *
 * Positions are computed from the source list rather than hard-coded, so
 * adding a domain re-flows the diagram instead of breaking it.
 */
export function DataConvergence({ sources, className = '' }: DataConvergenceProps) {
  const uid = useId().replace(/:/g, '');
  const gradientId = `converge-${uid}`;

  const top = 26;
  const span = HEIGHT - top * 2;
  const step = sources.length > 1 ? span / (sources.length - 1) : 0;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby={`${uid}-title`}
        preserveAspectRatio="xMidYMid meet"
      >
        <title id={`${uid}-title`}>
          {`Eight separate agricultural data sources — ${sources.join(', ')} — converging into SHAZA.`}
        </title>

        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(127, 168, 148, 0.15)" />
            <stop offset="70%" stopColor="rgba(201, 162, 39, 0.55)" />
            <stop offset="100%" stopColor="rgba(201, 162, 39, 0.8)" />
          </linearGradient>
        </defs>

        <g aria-hidden="true">
          {sources.map((source, index) => {
            const y = top + step * index;
            const path = `M${LINE_START} ${y}C${LINE_START + 110} ${y} ${NODE.x - 130} ${NODE.y} ${
              NODE.x - NODE.r - 4
            } ${NODE.y}`;

            return (
              <g key={source} className={styles.branch} style={{ '--index': index } as React.CSSProperties}>
                <text className={styles.label} x={LABEL_X} y={y + 3.5} textAnchor="end">
                  {source}
                </text>
                <circle className={styles.origin} cx={LINE_START} cy={y} r={3} />
                <path className={styles.link} d={path} stroke={`url(#${gradientId})`} />
              </g>
            );
          })}

          <circle className={styles.halo} cx={NODE.x} cy={NODE.y} r={NODE.r + 12} />
          <circle className={styles.node} cx={NODE.x} cy={NODE.y} r={NODE.r} />
          <text className={styles.nodeLabel} x={NODE.x} y={NODE.y + 5} textAnchor="middle">
            SHAZA
          </text>
        </g>
      </svg>
    </div>
  );
}
