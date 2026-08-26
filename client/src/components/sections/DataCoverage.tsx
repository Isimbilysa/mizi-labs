import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CoverageDot } from '@/components/ui/CoverageDot';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { AfricaDataMap } from '@/components/visuals/AfricaDataMap';
import { EXAMPLE_RECORDS } from '@/data/catalogue';
import { gaps, quality } from '@/data/site';
import type { CoverageLevel } from '@/types';
import styles from './DataCoverage.module.css';

/**
 * Quality and gaps are one question asked twice — can this data be used, and
 * where is there none to use — so they read as one section: what we assess,
 * what an assessed record looks like, then where the continent comes up empty.
 */
export function DataCoverage() {
  return (
    <Section id="coverage" tone="light" labelledBy="coverage-title" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          eyebrow={quality.eyebrow}
          title={quality.heading}
          lead={quality.lead}
          titleId="coverage-title"
          size="lg"
        />

        <Reveal className={styles.criteria} delay={100}>
          <h3 className={styles.criteriaLabel}>What we assess</h3>
          <ul className={styles.criteriaList}>
            {quality.criteria.map((criterion) => (
              <li key={criterion} className={styles.criterion}>
                {criterion}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* The label is part of the component, not a caption that can drift away. */}
        <Reveal className={styles.frame} delay={140}>
          <p className={styles.frameLabel}>{quality.exampleLabel}</p>

          <div className={styles.records}>
            {EXAMPLE_RECORDS.map((record) => (
              <article key={record.id} className={styles.record}>
                <header className={styles.recordHead}>
                  <h4 className={styles.recordTitle}>
                    <span className={styles.recordCountry}>{record.country}</span>
                    <span aria-hidden="true"> — </span>
                    {record.title}
                  </h4>
                  <span className={styles.quality} data-level={record.qualityLevel}>
                    <CoverageDot level={record.qualityLevel} />
                    {record.quality}
                  </span>
                </header>

                <dl className={styles.fields}>
                  <div className={styles.field}>
                    <dt>Coverage</dt>
                    <dd>
                      {record.coverageYears[0]} <span aria-hidden="true">→</span>{' '}
                      {record.coverageYears[1]}
                    </dd>
                  </div>
                  <div className={styles.field}>
                    <dt>Geographic resolution</dt>
                    <dd>{record.resolution}</dd>
                  </div>
                  <div className={styles.field}>
                    <dt>Access</dt>
                    <dd>{record.access}</dd>
                  </div>
                  <div className={styles.field}>
                    <dt>Format</dt>
                    <dd>{record.formats.join(' / ')}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Reveal>

        <div className={`${styles.band} surface--dark`}>
          <Reveal>
            <Eyebrow>{gaps.eyebrow}</Eyebrow>
            <h3 className={styles.bandTitle}>{gaps.heading}</h3>
            <p className={styles.bandLead}>{gaps.lead}</p>
          </Reveal>

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

            <div>
              <Reveal>
                <h4 className={styles.kindsLabel}>The gaps we want to find</h4>
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
        </div>
      </Container>
    </Section>
  );
}
