import { useEffect } from 'react';

/** Freezes background scrolling while an overlay (mobile menu) is open. */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [locked]);
}
