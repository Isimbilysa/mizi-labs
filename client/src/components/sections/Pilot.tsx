import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { pilot } from '@/data/site';
import styles from './Pilot.module.css';

export function Pilot() {
  return (
    <Section id="pilot" tone="light" labelledBy="pilot-title" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={pilot.eyebrow}
          title={pilot.heading}
          lead={pilot.lead}
          titleId="pilot-title"
          size="lg"
        />

        {/* Concentric scopes: depth first, then comparison, then scale. */}
        <ol className={styles.scales}>
          {pilot.scales.map((scale, index) => (
            <Reveal key={scale.id} delay={index * 120} asChild>
              <li className={styles.scale} data-index={index}>
                <div className={styles.ring} aria-hidden="true">
                  <span className={styles.ringInner} />
                </div>
                <div className={styles.scaleBody}>
                  <div className={styles.scaleHead}>
                    <h3 className={styles.scaleLabel}>{scale.label}</h3>
                    <StatusBadge tone={index === 0 ? 'building' : 'future'}>
                      {scale.status}
                    </StatusBadge>
                  </div>
                  <p className={styles.scaleSummary}>{scale.summary}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
