import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { LogoMark } from '@/components/ui/Logo';
import { philosophy } from '@/data/site';
import styles from './Philosophy.module.css';

export function Philosophy() {
  return (
    <Section id="philosophy" tone="dark" labelledBy="philosophy-title" className={styles.section}>
      <div className={styles.watermark} aria-hidden="true">
        <LogoMark size={520} />
      </div>

      <Container className={styles.container}>
        <Reveal>
          <Eyebrow className={styles.eyebrow}>{philosophy.eyebrow}</Eyebrow>
        </Reveal>

        <h2 className={styles.statement} id="philosophy-title">
          {philosophy.statement.map((line, index) => (
            <Reveal key={line} delay={index * 140} asChild>
              <span className={index === 1 ? styles.lineAccent : styles.line}>{line}</span>
            </Reveal>
          ))}
        </h2>

        <Reveal delay={320}>
          <p className={styles.supporting}>{philosophy.supporting}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
