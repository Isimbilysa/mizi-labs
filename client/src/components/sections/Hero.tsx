import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowRightIcon } from '@/components/ui/Icons';
import { AfricaDataMap } from '@/components/visuals/AfricaDataMap';
import { brand, hero } from '@/data/site';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={`surface--dark ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.glow} />
        <span className={styles.scanline} />
      </div>

      <Container size="wide" className={styles.container}>
        <div className={styles.copy}>
          <Eyebrow className={styles.eyebrow}>{hero.eyebrow}</Eyebrow>

          <h1 className={styles.title} id="hero-title">
            {hero.headline.map((line, index) => (
              <span key={line} className={styles.titleLine} style={{ '--line': index } as React.CSSProperties}>
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

          <p className={styles.stage}>
            <span className={styles.stageDot} aria-hidden="true" />
            {brand.stage.join(' · ')}
          </p>
        </div>

        <figure className={styles.mapFigure}>
          <AfricaDataMap
            mode="ambient"
            label="Africa as an agricultural data landscape"
            description="An abstract map of the African continent overlaid with a geographic grid, observation points across the land area, and arcs linking research locations, beginning from Rwanda."
          />
          <figcaption className={styles.mapCaption}>{hero.mapCaption}</figcaption>
        </figure>
      </Container>

      <Container size="wide">
        <p className={styles.signature}>{brand.tagline}</p>
      </Container>
    </section>
  );
}
