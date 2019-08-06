import i18next from "i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import { initReactI18next } from "react-i18next";

export const initi18n = () => {
  let lng = "fr";
  if (/(\/en\/)/.test(window.location.href)) {
    lng = "en";
  }
  i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: common_en
      },
      fr: {
        translation: common_fr
      }
    },
    interpolation: { escapeValue: false },
    lng: lng
  });
};
