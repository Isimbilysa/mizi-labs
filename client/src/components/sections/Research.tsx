import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { pilot, researchQuestion } from '@/data/site';
import styles from './Research.module.css';

/**
 * The question, then the ground it is being asked on. The Rwanda pilot used to
 * stand alone, which left it looking like a claim about reach rather than what
 * it is: the scope line of the research question directly above it.
 */
export function Research() {
  return (
    <Section
      id="research-question"
      tone="light"
      labelledBy="research-question-title"
      className={styles.section}
    >
      <Container>
        <div className={styles.head}>
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
                <div key={entry.id}>
                  <dt className={styles.metaLabel}>{entry.label}</dt>
                  <dd className={styles.metaValue}>{entry.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className={styles.pilot}>
          <Reveal>
            <Eyebrow>{pilot.eyebrow}</Eyebrow>
            <h3 className={styles.pilotTitle}>{pilot.heading}</h3>
            <p className={styles.pilotLead}>{pilot.lead}</p>
          </Reveal>

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
                      <h4 className={styles.scaleLabel}>{scale.label}</h4>
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
        </div>
      </Container>
    </Section>
  );
}
