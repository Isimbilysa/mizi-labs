import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ecosystem } from '@/data/site';
import styles from './Ecosystem.module.css';

export function Ecosystem() {
  return (
    <Section id="ecosystem" tone="dark" labelledBy="ecosystem-title" className={styles.section}>
      <div className="grid-backdrop" aria-hidden="true" />

      <Container size="wide" className={styles.container}>
        <SectionHeading
          eyebrow={ecosystem.eyebrow}
          title={ecosystem.heading}
          lead={ecosystem.lead}
          titleId="ecosystem-title"
          size="lg"
        />

        <ul className={styles.grid}>
          {ecosystem.tracks.map((track, index) => (
            <Reveal key={track.id} delay={(index % 3) * 90} asChild>
              <li className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIndex}>{track.index}</span>
                  <span className={styles.cardDomain}>{track.domain}</span>
                </div>

                <h3 className={styles.cardTitle}>{track.name}</h3>
                <p className={styles.cardBody}>{track.body}</p>

                <ul className={styles.signals}>
                  {track.signals.map((signal) => (
                    <li key={signal} className={styles.signal}>
                      {signal}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.note}>
          <p className={styles.noteText}>
            <span className={styles.noteLabel}>Note</span>
            {ecosystem.disclaimer}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
