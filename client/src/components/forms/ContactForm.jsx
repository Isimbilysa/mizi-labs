import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/Button';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons';
import { api } from '@/lib/api';
import styles from './ContactForm.module.css';

/** Used until the API answers — the form stays usable if the service is slow. */
const FALLBACK_TOPICS = [
  { id: 'partnership', label: 'Partnership & collaboration' },
  { id: 'research', label: 'Research & academia' },
  { id: 'investment', label: 'Investment' },
  { id: 'careers', label: 'Careers & talent' },
  { id: 'press', label: 'Press & media' },
  { id: 'general', label: 'General enquiry' },
];

const EMPTY_FORM = { name: '', email: '', organisation: '', message: '', website: '' };

const MIN_MESSAGE_LENGTH = 20;

/** Mirrors the server rules so obvious mistakes never cost a round trip. */
function validateLocally({ name, email, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please add a little more detail (${MIN_MESSAGE_LENGTH} characters minimum).`;
  }
  return errors;
}

export function ContactForm({ topic, onTopicChange, nameRef }) {
  const [topics, setTopics] = useState(FALLBACK_TOPICS);
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    api
      .getContactTopics(controller.signal)
      .then((data) => {
        if (data?.topics?.length) setTopics(data.topics);
      })
      .catch(() => {
        // The fallback list already covers this case — nothing to report.
      });

    return () => controller.abort();
  }, []);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const localErrors = validateLocally(values);
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      setStatus('idle');
      return;
    }

    setStatus('submitting');
    setFeedback(null);

    try {
      const result = await api.submitContact({ ...values, topic });
      setStatus('success');
      setFeedback(result);
      setValues(EMPTY_FORM);
      setErrors({});
    } catch (error) {
      setStatus('error');
      setErrors(error.details ?? {});
      setFeedback({ message: error.message });
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.panel}>
        <div className={styles.success} role="status">
          <span className={styles.successIcon} aria-hidden="true">
            <CheckIcon />
          </span>
          <h3 className={styles.successTitle}>Message received</h3>
          <p className={styles.successBody}>
            {feedback?.message ?? 'Thank you — your message reached the MIZI Labs team.'}
          </p>
          {feedback?.reference ? (
            <p className={styles.reference}>
              Reference <span>{feedback.reference.slice(0, 8)}</span>
            </p>
          ) : null}
          <Button variant="quiet" onClick={() => setStatus('idle')}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <p className={styles.formLabel}>Start a conversation</p>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              ref={nameRef}
              className={styles.input}
              type="text"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={update('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              required
            />
            {errors.name ? (
              <p className={styles.error} id="contact-name-error">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              className={styles.input}
              type="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={update('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              required
            />
            {errors.email ? (
              <p className={styles.error} id="contact-email-error">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-organisation">
              Organisation <span className={styles.optional}>optional</span>
            </label>
            <input
              id="contact-organisation"
              className={styles.input}
              type="text"
              name="organisation"
              autoComplete="organization"
              value={values.organisation}
              onChange={update('organisation')}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-topic">
              Topic
            </label>
            <select
              id="contact-topic"
              className={styles.input}
              name="topic"
              value={topic}
              onChange={(event) => onTopicChange(event.target.value)}
            >
              {topics.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className={`${styles.input} ${styles.textarea}`}
            name="message"
            rows={5}
            value={values.message}
            onChange={update('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            required
          />
          {errors.message ? (
            <p className={styles.error} id="contact-message-error">
              {errors.message}
            </p>
          ) : null}
        </div>

        {/* Honeypot — hidden from people, irresistible to bots. */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={update('website')}
          />
        </div>

        <div className={styles.footer}>
          <Button type="submit" disabled={status === 'submitting'} trailing={<ArrowRightIcon />}>
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </Button>
          <p className={styles.privacy}>We reply to every serious enquiry.</p>
        </div>

        {status === 'error' && feedback?.message ? (
          <p className={styles.formError} role="alert">
            {feedback.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
