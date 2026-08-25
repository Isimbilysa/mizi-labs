import styles from './Eyebrow.module.css';

/** Small monospaced label that opens a section — the "instrument reading". */
export function Eyebrow({ children, className = '', as: Tag = 'p' }) {
  return (
    <Tag className={[styles.eyebrow, className].filter(Boolean).join(' ')}>
      <span className={styles.marker} aria-hidden="true" />
      {children}
    </Tag>
  );
}
