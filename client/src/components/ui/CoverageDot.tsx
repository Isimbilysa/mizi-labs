import type { CoverageLevel } from '@/types';

import styles from './CoverageDot.module.css';

const LABELS: Record<CoverageLevel, string> = {
  strong: 'Strong data availability',
  limited: 'Limited data',
  gap: 'Significant gaps',
  unassessed: 'Not yet assessed',
};

interface CoverageDotProps {
  level: CoverageLevel;
  /** Renders the written level beside the dot, never colour alone. */
  withLabel?: boolean;
  className?: string;
}

/**
 * The coverage indicator. Colour is always accompanied by text or a title so
 * the scale never depends on colour perception alone.
 */
export function CoverageDot({ level, withLabel = false, className = '' }: CoverageDotProps) {
  return (
    <span className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <span className={styles.dot} data-level={level} title={withLabel ? undefined : LABELS[level]} />
      {withLabel ? <span className={styles.label}>{LABELS[level]}</span> : null}
      {!withLabel ? <span className="visually-hidden">{LABELS[level]}</span> : null}
    </span>
  );
}
