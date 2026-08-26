import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { principles } from '@/data/site';
import styles from './Principles.module.css';

export function Principles() {
  return (
    <Section id="principles" tone="light" labelledBy="principles-title" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={principles.eyebrow}
          title={principles.heading}
          titleId="principles-title"
          size="lg"
        />

        <dl className={styles.list}>
          {principles.items.map((principle, index) => (
            <Reveal key={principle.id} delay={index * 100} asChild>
              <div className={styles.item}>
                <dt className={styles.name}>{principle.name}</dt>
                <dd className={styles.summary}>{principle.summary}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
