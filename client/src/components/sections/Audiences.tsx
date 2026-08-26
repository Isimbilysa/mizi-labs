import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { audiences } from '@/data/site';
import styles from './Audiences.module.css';

export function Audiences() {
  return (
    <Section id="audiences" tone="light" labelledBy="audiences-title" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          eyebrow={audiences.eyebrow}
          title={audiences.heading}
          titleId="audiences-title"
          size="lg"
        />

        <ul className={styles.grid}>
          {audiences.items.map((audience, index) => (
            <Reveal key={audience.id} delay={(index % 4) * 80} asChild>
              <li className={styles.card} data-future={audience.future ? 'true' : 'false'}>
                <div className={styles.head}>
                  <h3 className={styles.name}>{audience.name}</h3>
                  {audience.future ? (
                    <StatusBadge tone="future">{audiences.futureLabel}</StatusBadge>
                  ) : null}
                </div>
                <p className={styles.summary}>{audience.summary}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
