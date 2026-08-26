import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './styles/tokens.css';
import './styles/base.css';
import './styles/utilities.css';

// Scroll reveals are opt-in: without IntersectionObserver the content simply
// renders visible instead of waiting for an event that will never fire.
if (typeof IntersectionObserver !== 'undefined') {
  document.documentElement.classList.add('js-reveal');
}

const container = document.getElementById('root');
if (!container) throw new Error('Root element #root was not found.');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
