import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowDownIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { useInView } from '@/hooks/useInView';
import { roadmap, vision } from '@/data/site';
import styles from './Roadmap.module.css';

/**
 * Where this goes: the stages we would build, then the same dependency chain
 * drawn as one line. Two views of one claim, so they belong together — the
 * pipeline is the summary, not a second promise.
 */
export function Roadmap() {
  // The beam only travels while the pipeline is on screen.
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05, once: false });

  return (
    <Section id="roadmap" tone="dark" labelledBy="roadmap-title" className={styles.section}>
      <div className="grid-backdrop" aria-hidden="true" />

      <Container className={styles.container}>
        <SectionHeading
          eyebrow={roadmap.eyebrow}
          title={roadmap.heading}
          lead={roadmap.lead}
          titleId="roadmap-title"
          size="lg"
        />

        <ol className={styles.stages}>
          {roadmap.stages.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 70} asChild>
              <li className={styles.stage} data-status={stage.status}>
                <div className={styles.head}>
                  <h3 className={styles.title}>{stage.title}</h3>
                  <StatusBadge tone={stage.status}>{roadmap.statusLabels[stage.status]}</StatusBadge>
                </div>

                <p className={styles.summary}>{stage.summary}</p>

                {stage.items ? (
                  <ul className={styles.items}>
                    {stage.items.map((item) => (
                      <li key={item} className={styles.item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {index < roadmap.stages.length - 1 ? (
                  <span className={styles.connector} aria-hidden="true">
                    <ArrowDownIcon />
                  </span>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>

        <div className={styles.vision}>
          <Reveal>
            <Eyebrow>{vision.eyebrow}</Eyebrow>
            <h3 className={styles.visionTitle}>{vision.heading}</h3>
            <p className={styles.visionLead}>{vision.lead}</p>
          </Reveal>

          <div className={styles.flow} ref={ref} data-active={inView ? 'true' : 'false'}>
            <span className={styles.spine} aria-hidden="true">
              <span className={styles.beam} />
            </span>

            <ol className={styles.flowStages}>
              {vision.pipeline.map((stage, index) => (
                <Reveal key={stage.id} delay={index * 70} asChild>
                  <li className={styles.flowStage} data-kind={stage.kind}>
                    <span className={styles.marker} aria-hidden="true" />
                    <span className={styles.label}>{stage.label}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
