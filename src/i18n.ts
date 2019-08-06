import i18next from "i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";

export const initi18n = () => {
  i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: "fr", // language to use
    resources: {
      en: {
        common: common_en // 'common' is our custom namespace
      },
      fr: {
        common: common_fr
      }
    }
  });
};
