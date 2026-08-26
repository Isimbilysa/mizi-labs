import { useState } from 'react';
import type { FormEvent } from 'react';

import { Button } from '@/components/ui/Button';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/Icons';
import { api, ApiError } from '@/lib/api';
import { cta } from '@/data/site';
import styles from './SignupForm.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * The only write the site performs. Posts to the API, which validates, rate
 * limits and stores the address; the honeypot keeps automated traffic out.
 */
export function SignupForm() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus('error');
      setMessage('Enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setMessage(null);

    try {
      const result = await api.subscribe({ email: email.trim(), website });
      setStatus('success');
      setMessage(result?.message ?? "You're on the list. We'll be in touch.");
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof ApiError ? error.message : 'Something went wrong. Please try again.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon} aria-hidden="true">
          <CheckIcon />
        </span>
        <p className={styles.successText}>{message}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label className="visually-hidden" htmlFor="signup-email">
          {cta.form.label}
        </label>
        <input
          id="signup-email"
          className={styles.input}
          type="email"
          name="email"
          autoComplete="email"
          placeholder={cta.form.placeholder}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === 'error') setStatus('idle');
          }}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'signup-error' : 'signup-note'}
          required
        />

        <Button type="submit" disabled={status === 'submitting'} trailing={<ArrowRightIcon />}>
          {status === 'submitting' ? 'Joining…' : cta.form.submit}
        </Button>
      </div>

      {/* Hidden from people, irresistible to bots. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="signup-website">Website</label>
        <input
          id="signup-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      {status === 'error' && message ? (
        <p className={styles.error} id="signup-error" role="alert">
          {message}
        </p>
      ) : (
        <p className={styles.note} id="signup-note">
          {cta.form.note}
        </p>
      )}
    </form>
  );
}
