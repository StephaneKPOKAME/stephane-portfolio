import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import usePointerVars from '../hooks/usePointerVars'

export default function ProjectCard({ project }) {
  const { t, pick } = useLanguage()
  const cardRef = useRef(null)
  usePointerVars(cardRef)

  const action = project.caseStudy ? t('projects.caseStudy') : t('projects.open')

  return (
    <article ref={cardRef} className="project-card" data-reveal>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="project-card__link"
        aria-label={`${project.title}, ${action} (${t('projects.newTab')})`}
      >
        <div className="project-card__image">
          <img
            src={project.image.src}
            srcSet={project.image.srcset}
            sizes="(max-width: 760px) 82vw, (max-width: 1440px) 46vw, 680px"
            width={project.image.width}
            height={project.image.height}
            alt={pick(project.image.alt)}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="project-card__meta">
          <span>
            {project.status === 'done'
              ? project.number
              : `${project.number} · ${t(`projects.status.${project.status}`)}`}
          </span>
          <span>{project.stack}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{pick(project.summary)}</p>
        <span
          className={project.caseStudy ? 'btn btn--accent project-card__action' : 'btn btn--outline project-card__action'}
          aria-hidden="true"
        >
          {action} ↗
        </span>
      </a>
    </article>
  )
}
