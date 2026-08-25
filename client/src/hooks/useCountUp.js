import { useEffect, useState } from 'react';

import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

/**
 * Counts from zero to `target` once `active` becomes true.
 * Reduced-motion users get the final value immediately.
 */
export function useCountUp(target, active, duration = 1100) {
  const prefersReduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (prefersReduced || duration <= 0) {
      setValue(target);
      return undefined;
    }

    let frame = 0;
    let start = null;

    const tick = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [target, active, duration, prefersReduced]);

  return value;
}
