import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "uz",
  lng: "ru",
  resources: {
    uz: {
      translation: {
        navbar_main_link: "Asosiy",
        navbar_about_link: "Biz Haqimizda",
        navbar_adventages_link: "Afzalliklarimiz",
        navbar_catalog_link: "Katalog",
        navbar_news_link: "Yangiliklar",
        navbar_contact_link: "Kontaktlar",
      },
    },
    ru: {
      translation: {
        navbar_main_link: "Главная",
        navbar_about_link: "O нас",
        navbar_adventages_link: "Преимущества",
        navbar_catalog_link: "Каталог",
        navbar_news_link: "Новости",
        navbar_contact_link: "Контакты",
      },
    },
    en: {
      translation: {
        navbar_main_link: "Main",
        navbar_about_link: "About",
        navbar_adventages_link: "Our advantages",
        navbar_catalog_link: "Catalog",
        navbar_news_link: "News",
        navbar_contact_link: "Contacts",
      },
    },
  },
});

export default i18n;

//
