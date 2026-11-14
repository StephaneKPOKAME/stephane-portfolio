import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import usePointerVars from '../hooks/usePointerVars'
import { projects } from '../data/projects'
import MediaLoop from './MediaLoop'

const heroProject = projects.find((project) => project.slug === 'carrefour-iita')

export default function Hero() {
  const { t } = useLanguage()
  const titleLines = t('hero.title')
  const heroRef = useRef(null)
  usePointerVars(heroRef)

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="hero__meta">
        <span>{t('hero.eyebrow')}</span>
        <span>{t('hero.location')}</span>
      </div>

      <div className="hero__name-wrap">
        <div className="hero__name-band" />
        <h1 className="hero__name">{t('hero.name')}</h1>
        <MediaLoop
          className="hero__image"
          image={heroProject.image}
          video={heroProject.video}
          sizes="(max-width: 1540px) 26vw, 400px"
          priority
        />
        <div className="hero__name hero__name--outline" aria-hidden="true">
          {t('hero.name')}
        </div>
      </div>

      <div className="hero__grid">
        <h2 className="hero__title">
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="hero__text">{t('hero.subtitle')}</p>
        <div className="hero__actions-block">
          <span className="hero__availability">
            <span className="hero__availability-dot" />
            {t('hero.availability')}
          </span>
          <div className="hero__actions">
            <a href="#projets" className="btn btn--primary">
              {t('hero.cta')}
            </a>
            <a href="/cv-stephane-kpokame.pdf" download="CV-Stephane-Kpokame.pdf" className="btn btn--outline">
              {t('hero.cv')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
