import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { methodology } from '@/data/site';
import styles from './Methodology.module.css';

export function Methodology() {
  return (
    <Section
      id="methodology"
      tone="light"
      labelledBy="methodology-title"
      className={styles.section}
    >
      <Container size="wide">
        <SectionHeading
          eyebrow={methodology.eyebrow}
          title={methodology.heading}
          lead={methodology.lead}
          titleId="methodology-title"
          size="lg"
        />

        <ol className={styles.steps}>
          {methodology.steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 90} asChild>
              <li className={styles.step}>
                <span className={styles.index}>{step.index}</span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.summary}>{step.summary}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
