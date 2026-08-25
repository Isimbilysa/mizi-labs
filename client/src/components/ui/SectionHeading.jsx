import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';
import styles from './SectionHeading.module.css';

/**
 * The standard section opener: eyebrow, title and optional lead paragraph.
 * `titleId` links the heading to its <section> via aria-labelledby.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  titleId,
  size = 'md',
  align = 'start',
  className = '',
}) {
  const classes = [styles.heading, styles[size], align === 'center' ? styles.center : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}

      <Reveal delay={80}>
        <h2 className={styles.title} id={titleId}>
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={160}>
          <p className={styles.lead}>{lead}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
