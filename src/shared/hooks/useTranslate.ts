import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Language } from '../types'
export const useTranslate = () => {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(
      (localStorage ? localStorage.getItem('language') : 'ru') as Language
    )
  }, [])
  useEffect(() => {
    localStorage.setItem('language', i18n.language)
  }, [i18n.language])
  return {
    t,
    onToggleLanguage: (lang: Language) =>
      i18n.changeLanguage(lang === 'ru' ? 'en' : 'ru'),
  }
}
