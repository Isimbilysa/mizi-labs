import styles from './Section.module.css';

/**
 * Page section wrapper. `tone` swaps the semantic colour tokens for everything
 * inside, which is how the page alternates between ivory and forest surfaces.
 */
export function Section({
  id,
  tone = 'light',
  labelledBy,
  className = '',
  bleed = false,
  children,
  ...rest
}) {
  const classes = [
    styles.section,
    tone === 'dark' ? 'surface--dark' : 'surface--light',
    bleed ? styles.bleed : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes} aria-labelledby={labelledBy} {...rest}>
      {children}
    </section>
  );
}
