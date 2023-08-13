import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "uz",
  lng: "uz",
  resources: {
    uz: {
      translation: {
        website_title: "O'quv Markazi",
      },
    },
    ru: {
      translation: {
        website_title: "Учебный центр",
      },
    },
  },
});

export default i18n;
