// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Carga traducciones desde archivos
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Integración con React
  .init({
    fallbackLng: "en", // Idioma por defecto
    supportedLngs: ["en", "es"], // Idiomas soportados
    debug: true, // Mostrar logs en modo desarrollo
    interpolation: {
      escapeValue: false, // React ya escapa el contenido
    },
    backend: {
      //loadPath: '/locales/{{lng}}/translation.json', // Ruta a los archivos de traducción
      loadPath: "/locales/{{lng}}.json", // Ruta a los archivos de traducción
    },
  });

export default i18n;
