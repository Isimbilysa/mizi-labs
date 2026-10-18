import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { DomainIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { principles, whatIsShaza } from '@/data/site';
import styles from './WhatIsShaza.module.css';

/**
 * What SHAZA is: three pillars, then the principles they rest on. The
 * principles used to be their own section, but they only mean anything as a
 * qualifier on the work described directly above them.
 */
export function WhatIsShaza() {
  return (
    <Section
      id="what-is-shaza"
      tone="light"
      labelledBy="what-is-shaza-title"
      className={styles.section}
    >
      <Container>
        <SectionHeading
          eyebrow={whatIsShaza.eyebrow}
          title={whatIsShaza.heading}
          lead={whatIsShaza.lead}
          titleId="what-is-shaza-title"
          size="lg"
        />

        <ol className={styles.pillars}>
          {whatIsShaza.pillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 100} asChild>
              <li className={styles.pillar}>
                <div className={styles.pillarHead}>
                  <span className={styles.index}>{pillar.index}</span>
                  <DomainIcon name={pillar.icon} width={26} height={26} className={styles.icon} />
                </div>
                <h3 className={styles.name}>{pillar.name}</h3>
                <p className={styles.summary}>{pillar.summary}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className={styles.principles}>
          <Reveal>
            <h3 className={styles.principlesLabel}>{principles.heading}</h3>
          </Reveal>

          <dl>
            {principles.items.map((principle, index) => (
              <Reveal key={principle.id} delay={index * 100} asChild>
                <div className={styles.principle}>
                  <dt className={styles.principleName}>{principle.name}</dt>
                  <dd className={styles.principleSummary}>{principle.summary}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
