import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { globalResearch, methodology } from '@/data/site';
import styles from './Methodology.module.css';

/**
 * How we work: the five steps, then the same method turned outward. The global
 * cases are not a separate argument — they are the "research" step being run
 * against countries that already solved something.
 */
export function Methodology() {
  return (
    <Section id="methodology" tone="dark" labelledBy="methodology-title" className={styles.section}>
      <Container size="wide" className={styles.container}>
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

        <div className={styles.global}>
          <Reveal>
            <Eyebrow>{globalResearch.eyebrow}</Eyebrow>
            <h3 className={styles.globalTitle}>{globalResearch.heading}</h3>
            <p className={styles.globalLead}>{globalResearch.lead}</p>
          </Reveal>

          <ul className={styles.grid}>
            {globalResearch.cases.map((item, index) => (
              <Reveal key={item.id} delay={(index % 3) * 80} asChild>
                <li className={styles.card}>
                  <h4 className={styles.country}>{item.country}</h4>
                  <p className={styles.focus}>{item.focus}</p>
                  <p className={styles.question}>{item.question}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal className={styles.closing} delay={120}>
            <p className={styles.closingText}>{globalResearch.closing}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
