import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

export const init = ({ dsn, environment, release }) => {
  Sentry.init({
    dsn,
    environment,
    release,
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
  });
};
