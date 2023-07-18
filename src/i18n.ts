import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enJSON from './locale/en.json'
import esJSON from './locale/es.json'
import ptJSON from './locale/pt.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJSON },
    pt: { translation: ptJSON },
    es: { translation: esJSON }
  },
  lng: "pt",
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
