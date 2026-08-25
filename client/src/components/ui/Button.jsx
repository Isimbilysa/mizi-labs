import styles from './Button.module.css';

const VARIANTS = {
  primary: styles.primary,
  ghost: styles.ghost,
  quiet: styles.quiet,
};

/**
 * One button, two elements: renders an anchor when `href` is present and a
 * real <button> otherwise, so in-page links stay keyboard- and SEO-friendly.
 */
export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  trailing = null,
  className = '',
  ...rest
}) {
  const classes = [
    styles.button,
    VARIANTS[variant] ?? VARIANTS.primary,
    size === 'sm' ? styles.sm : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {trailing ? <span className={styles.trailing}>{trailing}</span> : null}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={rest.type ?? 'button'} {...rest}>
      {content}
    </button>
  );
}
