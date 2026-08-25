import { cloneElement, isValidElement } from 'react';

import { useInView } from '@/hooks/useInView';

/**
 * Fades a block in the first time it scrolls into view.
 * With `asChild` the reveal attributes are merged into the child element, so a
 * grid item can animate without an extra wrapper breaking the layout.
 */
export function Reveal({ children, delay = 0, className = '', asChild = false, ...rest }) {
  const [ref, inView] = useInView();

  const revealProps = {
    ref,
    'data-revealed': inView ? 'true' : 'false',
    style: { '--reveal-delay': `${delay}ms` },
  };

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...revealProps,
      className: ['reveal', children.props.className, className].filter(Boolean).join(' '),
      style: { ...revealProps.style, ...children.props.style },
    });
  }

  return (
    <div className={['reveal', className].filter(Boolean).join(' ')} {...revealProps} {...rest}>
      {children}
    </div>
  );
}
