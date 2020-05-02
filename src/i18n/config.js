import i18next from "i18next"

const getTranslate = (obj, language) => ({
  ...obj,
  [language]: {
    translations: require(`../locales/${language}/translations.json`),
  },
})

const languages = ["pt-BR", "en"]
const language =
  typeof navigator !== "undefined"
    ? (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage
    : ""

const lng = language.includes("pt") ? "pt-BR" : "en"

i18next.init({
  lng,
  fallbackLng: "pt-BR",
  resources: languages.reduce(getTranslate, {}),
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
})

i18next.languages = languages

export default i18next
