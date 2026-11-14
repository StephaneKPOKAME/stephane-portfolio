import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getInitialLang() {
  const saved = localStorage.getItem('lang')
  if (saved === 'fr' || saved === 'en') return saved
  return navigator.language.startsWith('fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  // Texte fixe de l'interface : t('nav.projects')
  const t = (key) => translations[lang][key] ?? key

  // Champ bilingue d'une donnée : pick({ fr: '...', en: '...' })
  const pick = (value) =>
    value && typeof value === 'object' ? value[lang] : value

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
