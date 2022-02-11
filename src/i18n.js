import {fr } from "./locales";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  // debug: true,
  debug: false,

  resources: {
    fr,
  },

  fallbackLng: "fr",

  ns: ["common", "nutrients"],
  defaultNS: "common",
  keySeparator: false,
  react: {
    wait: true,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
  },
};

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);
// .changeLanguage('fr', (err, t) => {
//   if (err) return console.log('something went wrong loading', err);
// });

export default i18n;
