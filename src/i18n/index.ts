import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import dataEn from './en.json'
import dataZhHans from './zh_hans.json'

const resources = {
  en: { translation: dataEn },
  'zh-CN': { translation: dataZhHans },
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
})

export default i18n
