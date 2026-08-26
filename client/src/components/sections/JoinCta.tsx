import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SignupForm } from '@/components/forms/SignupForm';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { cta } from '@/data/site';
import styles from './JoinCta.module.css';

export function JoinCta() {
  return (
    <Section id="signup" tone="dark" labelledBy="signup-title" className={styles.section}>
      <div className="grid-backdrop" aria-hidden="true" />

      <Container className={styles.container}>
        <Reveal>
          <Eyebrow>{cta.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className={styles.title} id="signup-title">
            {cta.heading}
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className={styles.lead}>{cta.lead}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className={styles.actions}>
            <Button href={cta.primaryCta.href} trailing={<ArrowRightIcon />}>
              {cta.primaryCta.label}
            </Button>
            <Button href={cta.secondaryCta.href} variant="ghost">
              {cta.secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={260} className={styles.formWrap}>
          <SignupForm />
        </Reveal>
      </Container>
    </Section>
  );
}
