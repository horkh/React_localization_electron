import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
// Define the languages you want to support
const resources = {
  english: {
    translation: {
      "welcome": "Welcome",
      "hi":"hi"
      // Add more translations here
    }
  },
  spanish: {
    translation: {
      "welcome": "Bienvenido",
      "hi":"hola`"
     
    }
  },
  hindi:{
    translation:{
      "welcome":"नमस्ते",
      "hi":"नमस्ते"
    }
  },
russian:{
    translation: {
        "welcome": "Добро пожаловать",
        "hi":"Привет",
    }
},
assamese:{
   translation:{
    "welcome": "স্বাগতম",
    "hi":"আসসালামু আল",
   }
}
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });


  


export default i18n;
