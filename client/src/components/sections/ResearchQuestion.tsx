import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { researchQuestion } from '@/data/site';
import styles from './ResearchQuestion.module.css';

export function ResearchQuestion() {
  return (
    <Section
      id="research-question"
      tone="dark"
      labelledBy="research-question-title"
      className={styles.section}
    >
      <Container className={styles.container}>
        <Reveal>
          <Eyebrow>{researchQuestion.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className={styles.title} id="research-question-title">
            {researchQuestion.heading}
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>{researchQuestion.quotation}</p>
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <p className={styles.supporting}>{researchQuestion.supporting}</p>
        </Reveal>

        <Reveal delay={260}>
          <dl className={styles.meta}>
            {researchQuestion.meta.map((entry) => (
              <div key={entry.id} className={styles.metaItem}>
                <dt className={styles.metaLabel}>{entry.label}</dt>
                <dd className={styles.metaValue}>{entry.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}
