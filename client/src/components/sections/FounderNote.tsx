import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { founder } from '@/data/site';
import styles from './FounderNote.module.css';

/**
 * Who is behind SHAZA, in the founder's own words. Placed just before the
 * sign-up, so the person asking you to join has introduced themselves first.
 */
export function FounderNote() {
  return (
    <Section id="founder" tone="light" labelledBy="founder-title" className={styles.section}>
      <Container size="narrow">
        <div className={styles.note}>
          <Reveal>
            <Eyebrow>{founder.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className={styles.title} id="founder-title">
              {founder.heading}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className={styles.body}>
              {founder.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className={styles.signature}>{founder.signature}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
