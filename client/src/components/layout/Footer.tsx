import { Container } from '@/components/layout/Container';
import { Logo } from '@/components/ui/Logo';
import { footer } from '@/data/site';
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

          {footer.columns.map((column) => (
            <nav key={column.id} className={styles.column} aria-label={column.title}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link.id}>
                    <a className={styles.link} href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.legal}>{footer.legal}</p>
          <p className={styles.legal}>Research stage · Prototype in development</p>
        </div>
      </Container>
    </footer>
  );
}
