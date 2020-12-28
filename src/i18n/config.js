import i18next from "i18next";
import detectLanguage from "../constants/language";

i18next.init({
  fallbackLng: detectLanguage(),
  resources: {
    en: {
      translations: require("../locales/en/en.json"),
    },
    nl: {
      translations: require("../locales/nl/nl.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ["en", "nl"];

export default i18next;
