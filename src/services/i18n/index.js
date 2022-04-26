import i18n from "i18next";
import HttpApi from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

import config from "../../connections";

export const init = ({
  languages,
  currentLanguage,
  initialLanguage,
  onChange,
  debug,
}) => {
  i18n.on("languageChanged", (language) => onChange(language));

  i18n
    .use(initReactI18next)
    .use(HttpApi)
    .init({
      lowerCaseLng: true,
      lng: languages.find((l) => l === currentLanguage),
      fallbackLng: initialLanguage,
      debug,
      whitelist: languages,
      interpolation: {
        escapeValue: false,
      },
      ns: ["common"],
      defaultNS: "common",
      backend: {
        loadPath: `${config.api.base_url}/v1/reference/translations/ADMIN/{{lng}}`,
        crossDomain: true,
        allowMultiLoading: true,
      },
      react: {
        useSuspense: true,
        wait: true,
      },
    });
};
