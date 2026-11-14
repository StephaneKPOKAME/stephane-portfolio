import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="logo">
          SK<span className="logo__dot">.</span>
        </a>
        <nav className="main-nav">
          <a href="#projets">{t('nav.projects')}</a>
          <a href="#competences">{t('nav.skills')}</a>
          <a href="#au-dela-du-code">{t('nav.beyond')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>
        <div className="lang-toggle">
          <button
            type="button"
            className={lang === 'fr' ? 'active' : ''}
            onClick={() => setLang('fr')}
          >
            FR
          </button>
          <button
            type="button"
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}
