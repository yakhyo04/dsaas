const config = {
  app: {
    version: "0.0.1",
    env: "development",
    public_url: "",
  },
  language: {
    key: "language",
    initial: "ru",
    list: ["uz", "oz", "ru", "en"],
  },
  api: {
    baseUrl: "http://dsaas.uz",
  },
  sentry: {
    dsn: process.env.REACT_APP_SENTRY_DSN,
  },
};

export default config;
