import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';

type Variant = 'primary' | 'ghost' | 'quiet';

const VARIANTS: Record<Variant, string> = {
  primary: styles.primary,
  ghost: styles.ghost,
  quiet: styles.quiet,
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: 'sm' | 'md';
  trailing?: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps &
  ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>
    | { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>);

/**
 * One button, two elements: renders an anchor when `href` is present and a
 * real <button> otherwise, so in-page links stay keyboard- and SEO-friendly.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  trailing = null,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    VARIANTS[variant],
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

  if ('href' in rest && rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type={buttonProps.type ?? 'button'} {...buttonProps}>
      {content}
    </button>
  );
}
