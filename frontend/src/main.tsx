import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import * as Sentry from '@sentry/react';
import { name, version } from '../package.json';

import './index.css';

Sentry.init({
  dsn: 'https://47c6cef9a3e5c4cfb129edb496555643@o4506414970568704.ingest.sentry.io/4506513128685568',
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: [import.meta.env.VITE_APP_FE_URL],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  release: `${name}@${version}`,
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
