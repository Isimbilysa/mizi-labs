import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { REGION_NODES } from '@/lib/africa';
import { ecosystem, research } from '@/data/site';
import styles from './Research.module.css';

/**
 * Metrics are derived from the content itself rather than asserted, so the
 * readout can never drift from what the page actually describes.
 */
const METRICS = [
  { id: 'domains', value: research.domains.length, label: 'Research domains' },
  { id: 'tracks', value: ecosystem.tracks.length, label: 'Technology tracks' },
  { id: 'regions', value: REGION_NODES.length, label: 'Regional environments' },
];

function Metric({ value, label }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const current = useCountUp(value, inView);

  return (
    <div className={styles.metric} ref={ref}>
      <span className={styles.metricValue}>{String(current).padStart(2, '0')}</span>
      <span className={styles.metricLabel}>{label}</span>
    </div>
  );
}

export function Research() {
  return (
    <Section id="research" tone="light" labelledBy="research-title" className={styles.section}>
      <div className="grid-backdrop" aria-hidden="true" />

      <Container size="wide" className={styles.container}>
        <div className={styles.top}>
          <SectionHeading
            eyebrow={research.eyebrow}
            title={research.heading}
            lead={research.lead}
            titleId="research-title"
            size="lg"
          />

          <Reveal className={styles.metrics} delay={120}>
            {METRICS.map((metric) => (
              <Metric key={metric.id} value={metric.value} label={metric.label} />
            ))}
          </Reveal>
        </div>

        <ul className={styles.domains}>
          {research.domains.map((domain, index) => (
            <Reveal key={domain.id} delay={(index % 3) * 70} asChild>
              <li className={styles.domain}>
                <span className={styles.domainCode}>{domain.code}</span>
                <h3 className={styles.domainName}>{domain.name}</h3>
                <p className={styles.domainNote}>{domain.note}</p>
                <span className={styles.domainNode} aria-hidden="true" />
              </li>
            </Reveal>
          ))}
        </ul>

        <div className={styles.pipeline}>
          <Reveal>
            <h3 className={styles.pipelineTitle}>How the work moves</h3>
          </Reveal>

          <ol className={styles.steps}>
            {research.pipeline.map((step, index) => (
              <Reveal key={step.id} delay={index * 90} asChild>
                <li className={styles.step}>
                  <span className={styles.stepIndex}>{step.step}</span>
                  <h4 className={styles.stepLabel}>{step.label}</h4>
                  <p className={styles.stepBody}>{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
