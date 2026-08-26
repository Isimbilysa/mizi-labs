import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CoverageDot } from '@/components/ui/CoverageDot';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EXAMPLE_RECORDS } from '@/data/catalogue';
import { quality } from '@/data/site';
import styles from './DataQuality.module.css';

export function DataQuality() {
  return (
    <Section id="quality" tone="light" labelledBy="quality-title" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={quality.eyebrow}
          title={quality.heading}
          lead={quality.lead}
          titleId="quality-title"
          size="lg"
        />

        {/* The label is part of the component, not a caption that can drift away. */}
        <Reveal className={styles.frame} delay={100}>
          <p className={styles.frameLabel}>{quality.exampleLabel}</p>

          <div className={styles.records}>
            {EXAMPLE_RECORDS.map((record) => (
              <article key={record.id} className={styles.record}>
                <header className={styles.recordHead}>
                  <h3 className={styles.recordTitle}>
                    <span className={styles.recordCountry}>{record.country}</span>
                    <span aria-hidden="true"> — </span>
                    {record.title}
                  </h3>
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

        <Reveal className={styles.criteria} delay={140}>
          <h3 className={styles.criteriaLabel}>What we assess</h3>
          <ul className={styles.criteriaList}>
            {quality.criteria.map((criterion) => (
              <li key={criterion} className={styles.criterion}>
                {criterion}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
