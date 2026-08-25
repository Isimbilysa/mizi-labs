import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { vision } from '@/data/site';
import styles from './Vision.module.css';

export function Vision() {
  return (
    <Section id="vision" tone="light" labelledBy="vision-title" className={styles.section}>
      <Container className={styles.container}>
        <SectionHeading
          eyebrow={vision.eyebrow}
          title={vision.heading}
          lead={vision.lead}
          titleId="vision-title"
          size="lg"
        />

        <Reveal delay={120}>
          <p className={styles.body}>{vision.body}</p>
        </Reveal>

        <ol className={styles.horizons}>
          {vision.horizons.map((horizon, index) => (
            <Reveal key={horizon.id} delay={index * 100} asChild>
              <li className={styles.horizon}>
                <span className={styles.period}>{horizon.period}</span>
                <h3 className={styles.horizonTitle}>{horizon.title}</h3>
                <p className={styles.horizonBody}>{horizon.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className={styles.statementWrap} delay={140}>
          <p className={styles.statement}>{vision.statement}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
