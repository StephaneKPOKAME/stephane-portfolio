import { useLanguage } from '../i18n/LanguageContext'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projets" className="projects">
      <div className="projects__head" data-reveal>
        <span className="projects__eyebrow">{t('projects.eyebrow')}</span>
        <h2 className="projects__heading">{t('projects.heading')}</h2>
      </div>

      <div className="projects__scroller">
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
