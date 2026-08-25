/**
 * Centred content column. Width variants come from the shared `.container`
 * utilities so every section aligns to the same optical grid.
 */
export function Container({ size = 'default', className = '', as: Tag = 'div', children, ...rest }) {
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
