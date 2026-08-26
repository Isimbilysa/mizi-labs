import { cloneElement, isValidElement } from 'react';
import type { CSSProperties, ReactElement, ReactNode } from 'react';

import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Merge the reveal onto the child element instead of adding a wrapper. */
  asChild?: boolean;
}

type RevealableProps = { className?: string; style?: CSSProperties };

/**
 * Fades a block in the first time it scrolls into view. With `asChild` the
 * attributes merge into the child, so a grid item can animate without an extra
 * wrapper breaking the layout.
 */
export function Reveal({ children, delay = 0, className = '', asChild = false }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<RevealableProps>;
    return cloneElement(child, {
      ref,
      'data-revealed': inView ? 'true' : 'false',
      className: ['reveal', child.props.className, className].filter(Boolean).join(' '),
      style: { ...style, ...child.props.style },
    } as RevealableProps & Record<string, unknown>);
  }

  return (
    <div
      ref={ref}
      data-revealed={inView ? 'true' : 'false'}
      className={['reveal', className].filter(Boolean).join(' ')}
      style={style}
    >
      {children}
    </div>
  );
}
