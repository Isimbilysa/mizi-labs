import { useRef, useState } from 'react';

import { ContactForm } from '@/components/forms/ContactForm';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowUpRightIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { cta } from '@/data/site';
import styles from './BuildWithUs.module.css';

export function BuildWithUs() {
  const [topic, setTopic] = useState(cta.actions[0].topic);
  const nameRef = useRef(null);

  /** The three calls to action are shortcuts into the form, not dead links. */
  const startConversation = (nextTopic) => {
    setTopic(nextTopic);
    nameRef.current?.focus({ preventScroll: false });
  };

  return (
    <Section id="contact" tone="dark" labelledBy="contact-title" className={styles.section}>
      <div className="grid-backdrop" aria-hidden="true" />

      <Container size="wide" className={styles.container}>
        <div className={styles.copy}>
          <Reveal>
            <Eyebrow>{cta.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className={styles.title} id="contact-title">
              {cta.heading}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className={styles.lead}>{cta.lead}</p>
          </Reveal>

          <ul className={styles.actions}>
            {cta.actions.map((action, index) => (
              <Reveal key={action.id} delay={200 + index * 80} asChild>
                <li>
                  <button
                    type="button"
                    className={styles.action}
                    onClick={() => startConversation(action.topic)}
                    aria-pressed={topic === action.topic}
                    data-active={topic === action.topic ? 'true' : 'false'}
                  >
                    <span className={styles.actionLabel}>{action.label}</span>
                    <span className={styles.actionNote}>{action.note}</span>
                    <ArrowUpRightIcon className={styles.actionIcon} />
                  </button>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={420}>
            <dl className={styles.channels}>
              {cta.channels.map((channel) => (
                <div key={channel.id} className={styles.channel}>
                  <dt className={styles.channelLabel}>{channel.label}</dt>
                  <dd className={styles.channelValue}>
                    <a href={`mailto:${channel.value}`}>{channel.value}</a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className={styles.formColumn} delay={160}>
          <ContactForm topic={topic} onTopicChange={setTopic} nameRef={nameRef} />
        </Reveal>
      </Container>
    </Section>
  );
}
