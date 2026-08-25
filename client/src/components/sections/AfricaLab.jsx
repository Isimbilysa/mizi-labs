import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { AfricaMap } from '@/components/visuals/AfricaMap';
import { africa } from '@/data/site';
import styles from './AfricaLab.module.css';

export function AfricaLab() {
  return (
    <Section id="africa" tone="dark" labelledBy="africa-title" className={styles.section}>
      <Container size="wide" className={styles.container}>
        <div className={styles.copy}>
          <Reveal>
            <Eyebrow>{africa.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className={styles.title} id="africa-title">
              {africa.heading}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className={styles.lead}>{africa.lead}</p>
          </Reveal>

          <Reveal delay={220}>
            <p className={styles.body}>{africa.body}</p>
          </Reveal>

          <ul className={styles.notes}>
            {africa.notes.map((note, index) => (
              <Reveal key={note.id} delay={280 + index * 80} asChild>
                <li className={styles.note}>
                  <h3 className={styles.noteLabel}>{note.label}</h3>
                  <p className={styles.noteBody}>{note.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <AfricaMap />
        </div>
      </Container>
    </Section>
  );
}
