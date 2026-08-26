import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { DomainIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DATA_DOMAINS } from '@/data/catalogue';
import { domains } from '@/data/site';
import styles from './Domains.module.css';

/** A deterministic bar profile per card, so each domain reads differently. */
const PROFILES = [
  [40, 72, 55, 88, 62, 74, 46, 80],
  [58, 44, 70, 52, 84, 60, 48, 66],
  [72, 50, 86, 62, 40, 78, 56, 68],
  [46, 82, 60, 74, 52, 88, 44, 70],
  [64, 48, 76, 42, 68, 54, 82, 58],
  [52, 70, 46, 84, 58, 66, 74, 50],
  [78, 56, 64, 48, 72, 44, 86, 60],
];

export function Domains() {
  return (
    <Section id="domains" tone="light" labelledBy="domains-title" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          eyebrow={domains.eyebrow}
          title={domains.heading}
          lead={domains.lead}
          titleId="domains-title"
          size="lg"
        />

        <ul className={styles.grid}>
          {DATA_DOMAINS.map((domain, index) => (
            <Reveal key={domain.id} delay={(index % 4) * 80} asChild>
              <li className={styles.card}>
                <div className={styles.head}>
                  <span className={styles.index}>{domain.index}</span>
                  <DomainIcon name={domain.icon} width={26} height={26} className={styles.icon} />
                </div>

                <h3 className={styles.name}>{domain.name}</h3>
                <p className={styles.summary}>{domain.summary}</p>

                <ul className={styles.examples}>
                  {domain.examples.map((example) => (
                    <li key={example} className={styles.example}>
                      {example}
                    </li>
                  ))}
                </ul>

                {/* A quiet signal profile: the shape of a measurement series. */}
                <div className={styles.profile} aria-hidden="true">
                  {PROFILES[index % PROFILES.length].map((height, barIndex) => (
                    <span
                      key={barIndex}
                      className={styles.bar}
                      style={
                        { '--height': `${height}%`, '--index': barIndex } as React.CSSProperties
                      }
                    />
                  ))}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
