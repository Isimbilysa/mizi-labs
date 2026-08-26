/**
 * Thin client for the MIZI Labs API.
 *
 * Every response is normalised to its `data` payload or an `ApiError`, so
 * callers never reason about transport. When the Data Map application gains a
 * real catalogue endpoint, it belongs here alongside `subscribe`.
 */

const BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '');
const DEFAULT_TIMEOUT = 10_000;

export class ApiError extends Error {
  readonly status: number;
  readonly details: Record<string, string> | null;

  constructor(
    message: string,
    { status = 0, details = null }: { status?: number; details?: Record<string, string> | null } = {},
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

interface RequestOptions {
  method?: 'GET' | 'POST';
  body?: unknown;
  signal?: AbortSignal;
  timeout?: number;
}

interface Envelope<T> {
  ok: boolean;
  data?: T;
  error?: { status: number; message: string; details?: Record<string, string> };
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T | null> {
  const { method = 'GET', body, signal, timeout = DEFAULT_TIMEOUT } = options;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeout);

  if (signal) signal.addEventListener('abort', () => controller.abort(), { once: true });

  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    const payload = (await response.json().catch(() => null)) as Envelope<T> | null;

    if (!response.ok || payload?.ok === false) {
      throw new ApiError(payload?.error?.message ?? 'The request could not be completed.', {
        status: response.status,
        details: payload?.error?.details ?? null,
      });
    }

    return payload?.data ?? null;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiError('The request timed out. Please try again.', { status: 408 });
    }
    throw new ApiError('We could not reach the server. Please try again.', { status: 0 });
  } finally {
    window.clearTimeout(timer);
  }
}

export interface SignupResult {
  received: true;
  reference: string;
  message: string;
}

export const api = {
  /** Registers interest in the research. The only write the site performs. */
  subscribe: (payload: { email: string; role?: string; website?: string }, signal?: AbortSignal) =>
    request<SignupResult>('/signups', { method: 'POST', body: payload, signal }),
};
