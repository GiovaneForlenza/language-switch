import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const TRANSLATION_KEYS = {
  WELCOME_MESSAGE: "welcomeMessage",
  DESCRIPTION: "description",
};
export const LANGUAGES = { EN: "en", PT: "pt-BR" };
export let activeLanguage = LANGUAGES.PT;

// export function switchLanguage(requestedLanguage) {
//   if (activeLanguage === requestedLanguage) return;
//   activeLanguage = requestedLanguage;
//   i18n.changeLanguage(activeLanguage);
// }

const resources = {
  en: {
    translation: {
      [TRANSLATION_KEYS.WELCOME_MESSAGE]: "Welcome to React and react-i18next",
      [TRANSLATION_KEYS.DESCRIPTION]:
        "This is a simple example of how to use react-i18next.",
    },
  },
  "pt-BR": {
    translation: {
      [TRANSLATION_KEYS.WELCOME_MESSAGE]: "Bem-vindo ao React e react-i18next",
      [TRANSLATION_KEYS.DESCRIPTION]:
        "Esse é um jeito simples de usar o react-i18next.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: LANGUAGES.PT,
    lng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
