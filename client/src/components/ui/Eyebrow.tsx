import type { ElementType, ReactNode } from 'react';

import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Small monospaced label that opens a section — the "instrument reading". */
export function Eyebrow({ children, className = '', as: Tag = 'p' }: EyebrowProps) {
  return (
    <Tag className={[styles.eyebrow, className].filter(Boolean).join(' ')}>
      <span className={styles.marker} aria-hidden="true" />
      {children}
    </Tag>
  );
}
