import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { vision } from '@/data/site';
import styles from './Vision.module.css';

export function Vision() {
  // The beam only travels while the pipeline is on screen.
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05, once: false });

  return (
    <Section id="vision" tone="light" labelledBy="vision-title" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={vision.eyebrow}
          title={vision.heading}
          lead={vision.lead}
          titleId="vision-title"
          size="lg"
          align="center"
        />

        <div className={styles.pipeline} ref={ref} data-active={inView ? 'true' : 'false'}>
          <span className={styles.spine} aria-hidden="true">
            <span className={styles.beam} />
          </span>

          <ol className={styles.stages}>
            {vision.pipeline.map((stage, index) => (
              <Reveal key={stage.id} delay={index * 70} asChild>
                <li className={styles.stage} data-kind={stage.kind}>
                  <span className={styles.marker} aria-hidden="true" />
                  <span className={styles.label}>{stage.label}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
