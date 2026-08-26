import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ArrowDownIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { roadmap } from '@/data/site';
import styles from './Roadmap.module.css';

export function Roadmap() {
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
      </Container>
    </Section>
  );
}
