import config from "./connections";

import { store } from "./store";

import { http, i18n, storage } from "./services";

// import "assets/styles/main.scss";

i18n.init({
  languages: config.language.list,
  currentLanguage: storage.local.get(config.language.key),
  initialLanguage: config.language.initial,
  onChange: (language) => storage.local.set("language", language),
});

http.init({
  configFn: () => {
    const state = store.getState();
    const token = state.auth.tokens.accessToken;
    return {
      baseURL: config.api.baseUrl,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };
  },
});

if (config.app.env !== "development") {
  if (config.sentry.dsn) {
    (async () => {
      const sentry = await import("./services/sentry");

      sentry.init({
        dsn: config.sentry.dsn,
        environment: config.app.env,
        release: config.app.version,
      });
    })();
  }
}

if (config.app.env === "development") {
  (async () => {
    // const reportWebVitals = await import('./reportWebVitals');
    // reportWebVitals.default(console.log);
  })();
}
