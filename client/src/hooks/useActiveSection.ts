import { useEffect, useState } from 'react';

/**
 * Highlights the navigation item matching the section currently in view.
 * @param sectionIds ids rendered on the page, in document order
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return undefined;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        });

        const [topmost] = [...visible.entries()].sort((a, b) => b[1] - a[1]);
        setActiveId(topmost ? topmost[0] : null);
      },
      { threshold: [0.15, 0.4, 0.75], rootMargin: '-25% 0px -45% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
