import type { ReactNode } from 'react';

import styles from './Section.module.css';

interface SectionProps {
  id: string;
  tone?: 'light' | 'dark';
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Page section wrapper. `tone` swaps the semantic colour tokens for everything
 * inside, which is how the page alternates between ivory and charcoal.
 */
export function Section({
  id,
  tone = 'light',
  labelledBy,
  className = '',
  children,
}: SectionProps) {
  const classes = [
    styles.section,
    tone === 'dark' ? 'surface--dark' : 'surface--light',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
