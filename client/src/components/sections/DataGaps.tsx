import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CoverageDot } from '@/components/ui/CoverageDot';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { AfricaDataMap } from '@/components/visuals/AfricaDataMap';
import { gaps } from '@/data/site';
import type { CoverageLevel } from '@/types';
import styles from './DataGaps.module.css';

export function DataGaps() {
  return (
    <Section id="gaps" tone="dark" labelledBy="gaps-title" className={styles.section}>
      <Container size="wide" className={styles.container}>
        <SectionHeading
          eyebrow={gaps.eyebrow}
          title={gaps.heading}
          lead={gaps.lead}
          titleId="gaps-title"
          size="lg"
        />

        <div className={styles.body}>
          <Reveal className={styles.visual}>
            <figure className={styles.figure}>
              <AfricaDataMap
                mode="coverage"
                label="Illustrative map of agricultural data coverage across Africa"
                description="African regions shaded on a four-level scale from strong data availability through limited data and significant gaps to not yet assessed. Values are placeholders for a study still in progress."
              />
              <figcaption className={styles.caption}>
                <StatusBadge tone="research">{gaps.caption}</StatusBadge>
              </figcaption>
            </figure>

            <ul className={styles.legend}>
              {gaps.legend.map((entry) => (
                <li key={entry.id} className={styles.legendItem}>
                  <CoverageDot level={entry.id as CoverageLevel} />
                  <span>{entry.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className={styles.kinds}>
            <Reveal>
              <h3 className={styles.kindsLabel}>The gaps we want to find</h3>
            </Reveal>

            <dl className={styles.kindList}>
              {gaps.kinds.map((kind, index) => (
                <Reveal key={kind.id} delay={index * 70} asChild>
                  <div className={styles.kind}>
                    <dt className={styles.kindName}>{kind.name}</dt>
                    <dd className={styles.kindSummary}>{kind.summary}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
