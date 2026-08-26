import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  size?: 'default' | 'wide' | 'narrow';
  className?: string;
  as?: ElementType;
  children: ReactNode;
}

/**
 * Centred content column. Width variants come from the shared `.container`
 * utilities so every section aligns to the same optical grid.
 */
export function Container({
  size = 'default',
  className = '',
  as: Tag = 'div',
  children,
  ...rest
}: ContainerProps) {
  const classes = [
    'container',
    size === 'wide' ? 'container--wide' : '',
    size === 'narrow' ? 'container--narrow' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
