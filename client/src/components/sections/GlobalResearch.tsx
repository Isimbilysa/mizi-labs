import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { globalResearch } from '@/data/site';
import styles from './GlobalResearch.module.css';

export function GlobalResearch() {
  return (
    <Section id="global" tone="dark" labelledBy="global-title" className={styles.section}>
      <div className="grid-backdrop" aria-hidden="true" />

      <Container size="wide" className={styles.container}>
        <SectionHeading
          eyebrow={globalResearch.eyebrow}
          title={globalResearch.heading}
          lead={globalResearch.lead}
          titleId="global-title"
          size="lg"
        />

        <ul className={styles.grid}>
          {globalResearch.cases.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 80} asChild>
              <li className={styles.card}>
                <h3 className={styles.country}>{item.country}</h3>
                <p className={styles.focus}>{item.focus}</p>
                <p className={styles.question}>{item.question}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.closing} delay={120}>
          <p className={styles.closingText}>{globalResearch.closing}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
