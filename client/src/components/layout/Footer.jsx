import { Container } from '@/components/layout/Container';
import { Logo } from '@/components/ui/Logo';
import { brand, footer } from '@/data/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={`surface--dark ${styles.footer}`}>
      <Container size="wide">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo size={38} />
            <p className={styles.tagline}>{footer.tagline}</p>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <h2 className={styles.navTitle}>Navigate</h2>
            <ul className={styles.navList}>
              {footer.navigation.map((item) => (
                <li key={item.id}>
                  <a className={styles.navLink} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.social}>
            <h2 className={styles.navTitle}>Elsewhere</h2>
            <ul className={styles.navList}>
              {footer.social.map((item) => (
                <li key={item.id}>
                  <a className={styles.navLink} href={item.href} rel="noreferrer">
                    {item.label}
                    <span className={styles.handle}>{item.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.legal}>{footer.legal}</p>
          <ul className={styles.focus}>
            {brand.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
