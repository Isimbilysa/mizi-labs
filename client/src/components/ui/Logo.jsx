import styles from './Logo.module.css';

/**
 * MIZI means "roots" — the mark is a seed on the surface line sending a
 * branching root network downward, which doubles as a node graph. Drawn
 * rather than imported so it stays crisp at any size.
 */
export function LogoMark({ size = 34, className = '' }) {
  return (
    <svg
      className={[styles.mark, className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M13.9 8.4 9.6 14.2" />
        <path d="M18.1 8.4 22.4 14.2" />
        <path d="M6.9 19.1 4.9 23.6" />
        <path d="M9.1 19.1 11.1 23.6" />
        <path d="M22.9 19.1 20.9 23.6" />
        <path d="M25.1 19.1 27.1 23.6" />
      </g>
      <circle cx="16" cy="5.5" r="3" className={styles.seed} />
      <g fill="currentColor">
        <circle cx="8" cy="16.5" r="2.2" />
        <circle cx="24" cy="16.5" r="2.2" />
      </g>
      <g fill="currentColor" opacity="0.72">
        <circle cx="4" cy="25.5" r="1.5" />
        <circle cx="12" cy="25.5" r="1.5" />
        <circle cx="20" cy="25.5" r="1.5" />
        <circle cx="28" cy="25.5" r="1.5" />
      </g>
    </svg>
  );
}

export function Logo({ size = 34, className = '' }) {
  return (
    <span className={[styles.logo, className].filter(Boolean).join(' ')}>
      <LogoMark size={size} />
      <span className={styles.wordmark}>
        <span className={styles.name}>MIZI</span>
        <span className={styles.suffix}>Labs</span>
      </span>
    </span>
  );
}
