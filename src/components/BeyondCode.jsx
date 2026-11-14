import { useLanguage } from '../i18n/LanguageContext'
import MediaLoop from './MediaLoop'

const video = {
  webm: '/videos/bsic-net-connexion.webm',
  mp4: '/videos/bsic-net-connexion.mp4',
  poster: '/videos/bsic-net-connexion-poster.webp',
  width: 1280,
  height: 720,
}

export default function BeyondCode() {
  const { t } = useLanguage()

  return (
    <section id="au-dela-du-code" className="beyond">
      <div className="beyond__inner">
        <div className="beyond__text" data-reveal>
          <span className="beyond__eyebrow">{t('beyond.title')}</span>
          <h2 className="beyond__tagline">{t('beyond.tagline')}</h2>
          <ul className="beyond__keywords">
            {t('beyond.keywords').map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>

        <figure className="beyond__media" data-reveal style={{ '--reveal-delay': '150ms' }}>
          <MediaLoop
            className="beyond__video"
            video={{ ...video, alt: t('beyond.video.alt') }}
          />
          <figcaption className="beyond__caption">{t('beyond.caption')}</figcaption>
        </figure>
      </div>
    </section>
  )
}
