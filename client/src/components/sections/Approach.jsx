import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PillarIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { approach } from '@/data/site';
import styles from './Approach.module.css';

export function Approach() {
  return (
    <Section id="approach" tone="light" labelledBy="approach-title" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={approach.eyebrow}
          title={approach.heading}
          lead={approach.lead}
          titleId="approach-title"
          size="lg"
          className={styles.heading}
        />

        <ul className={styles.grid}>
          {approach.pillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 90} asChild>
              <li className={styles.card}>
                <span className={styles.iconFrame} aria-hidden="true">
                  <PillarIcon name={pillar.icon} width={26} height={26} />
                </span>

                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardBody}>{pillar.body}</p>

                <span className={styles.cardRule} aria-hidden="true" />
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
