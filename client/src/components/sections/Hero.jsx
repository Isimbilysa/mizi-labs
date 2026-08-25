import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { HeroBackdrop } from '@/components/visuals/HeroBackdrop';
import { brand, hero } from '@/data/site';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={`surface--dark ${styles.hero}`} aria-labelledby="hero-title">
      <HeroBackdrop />

      <Container size="wide" className={styles.container}>
        <div className={styles.content}>
          <Eyebrow className={styles.eyebrow}>{hero.eyebrow}</Eyebrow>

          <h1 className={styles.title} id="hero-title">
            {hero.headline.map((line, index) => (
              <span key={line} className={styles.titleLine} style={{ '--line': index }}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.supporting}>{hero.supporting}</p>

          <div className={styles.actions}>
            <Button href={hero.primaryCta.href} trailing={<ArrowRightIcon />}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className={styles.signature}>
            <span className={styles.signatureRule} aria-hidden="true" />
            {hero.signature}
          </p>
        </div>

        <div className={styles.meta}>
          <ul className={styles.focus}>
            {brand.focus.map((item) => (
              <li key={item} className={styles.focusItem}>
                {item}
              </li>
            ))}
          </ul>

          <dl className={styles.markers}>
            {hero.markers.map((marker) => (
              <div key={marker.id} className={styles.marker}>
                <dt className={styles.markerLabel}>{marker.label}</dt>
                <dd className={styles.markerValue}>{marker.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <a className={styles.scrollCue} href="#context" aria-label="Scroll to the next section">
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollTrack} aria-hidden="true">
          <span className={styles.scrollDot} />
        </span>
      </a>
    </section>
  );
}
