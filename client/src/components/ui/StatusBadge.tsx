import type { ReactNode } from 'react';

import styles from './StatusBadge.module.css';

export type StatusTone = 'building' | 'research' | 'future' | 'note';

interface StatusBadgeProps {
  tone?: StatusTone;
  children: ReactNode;
  className?: string;
}

/**
 * Marks the maturity of anything on the page. Used liberally and deliberately:
 * a visitor should never have to guess whether something exists yet.
 */
export function StatusBadge({ tone = 'note', children, className = '' }: StatusBadgeProps) {
  return (
    <span className={[styles.badge, className].filter(Boolean).join(' ')} data-tone={tone}>
      {tone === 'building' ? <span className={styles.pulse} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
