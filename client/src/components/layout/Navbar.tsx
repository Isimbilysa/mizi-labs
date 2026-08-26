import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { CloseIcon, MenuIcon } from '@/components/ui/Icons';
import { Logo } from '@/components/ui/Logo';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useScrolledPast } from '@/hooks/useScrollPosition';
import { navigation } from '@/data/site';
import styles from './Navbar.module.css';

const SECTION_IDS = navigation.map((item) => item.href.replace('#', ''));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(40);
  const activeId = useActiveSection(SECTION_IDS);

  useLockBodyScroll(menuOpen);

  // Escape closes the mobile panel; a resize past the breakpoint dismisses it.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const media = window.matchMedia('(min-width: 980px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    media.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      media.removeEventListener('change', onChange);
    };
  }, [menuOpen]);

  const headerClasses = [
    styles.header,
    'surface--dark',
    scrolled ? styles.scrolled : '',
    menuOpen ? styles.open : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label="MIZI Labs — home">
          <Logo />
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {navigation.map((item) => {
              const isActive = activeId === item.href.replace('#', '');
              return (
                <li key={item.id}>
                  <a
                    className={styles.navLink}
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    data-active={isActive ? 'true' : 'false'}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="#signup" variant="ghost" size="sm" className={styles.headerCta}>
            Join the Research
          </Button>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={styles.mobilePanel}
        data-open={menuOpen ? 'true' : 'false'}
        hidden={!menuOpen}
      >
        <nav aria-label="Primary mobile">
          <ul className={styles.mobileList}>
            {navigation.map((item, index) => (
              <li key={item.id} style={{ '--index': index } as React.CSSProperties}>
                <a className={styles.mobileLink} href={item.href} onClick={() => setMenuOpen(false)}>
                  <span className={styles.mobileIndex}>{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.mobileTagline}>Rooted in Africa. Built for the future.</p>
      </div>
    </header>
  );
}
