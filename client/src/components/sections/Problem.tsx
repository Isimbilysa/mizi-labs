import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DataConvergence } from '@/components/visuals/DataConvergence';
import { problem } from '@/data/site';
import styles from './Problem.module.css';

export function Problem() {
  return (
    <Section id="problem" tone="light" labelledBy="problem-title" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.heading}
          lead={problem.lead}
          titleId="problem-title"
          size="lg"
        />

        <div className={styles.body}>
          <div className={styles.copy}>
            <Reveal>
              <p className={styles.emphasis}>{problem.emphasis}</p>
            </Reveal>

            <Reveal delay={80}>
              <h3 className={styles.listLabel}>{problem.questionsLabel}</h3>
            </Reveal>

            <ul className={styles.questions}>
              {problem.questions.map((question, index) => (
                <Reveal key={question} delay={120 + index * 50} asChild>
                  <li className={styles.question}>{question}</li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className={styles.visual} delay={120}>
            <DataConvergence sources={problem.sources} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
