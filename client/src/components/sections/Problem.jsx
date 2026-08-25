import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { problem } from '@/data/site';
import styles from './Problem.module.css';

export function Problem() {
  return (
    <Section id="context" tone="light" labelledBy="context-title">
      <div className="grid-backdrop" aria-hidden="true" />

      <Container className={styles.container}>
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.heading}
          lead={problem.lead}
          titleId="context-title"
          size="lg"
          className={styles.heading}
        />

        <ul className={styles.grid}>
          {problem.pressures.map((pressure, index) => (
            <Reveal key={pressure.id} delay={index * 70} asChild>
              <li className={styles.item}>
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.itemTitle}>{pressure.label}</h3>
                <p className={styles.itemBody}>{pressure.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.closing}>
          <blockquote className={styles.quote}>
            {problem.closing.map((line, index) => (
              <p key={line} className={index === 1 ? styles.quoteAccent : styles.quoteLine}>
                {line}
              </p>
            ))}
          </blockquote>
        </Reveal>
      </Container>
    </Section>
  );
}
