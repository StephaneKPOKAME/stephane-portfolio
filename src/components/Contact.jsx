import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="contact">
      <span className="contact__eyebrow">{t('contact.eyebrow')}</span>
      <h2 className="contact__title" data-reveal>{t('contact.title')}</h2>
      <div className="contact__actions" data-reveal>
        <a
          href={t('contact.email.href')}
          className="btn btn--primary"
          aria-label={`${t('contact.email.label')}, ${t('contact.email.value')}`}
        >
          {t('contact.email.value')}
        </a>
        <a
          href={t('contact.phone.href')}
          className="btn btn--outline"
          aria-label={`${t('contact.phone.label')}, ${t('contact.phone.value')}`}
        >
          {t('contact.phone.value')}
        </a>
        <a href="/cv-stephane-kpokame.pdf" download="CV-Stephane-Kpokame.pdf" className="btn btn--accent">
          {t('contact.cv')}
        </a>
      </div>
    </section>
  )
}
