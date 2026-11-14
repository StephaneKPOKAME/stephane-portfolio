import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>{t('footer.identity')}</span>
      </div>
    </footer>
  )
}
