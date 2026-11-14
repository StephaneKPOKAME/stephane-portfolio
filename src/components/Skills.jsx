import { useLanguage } from '../i18n/LanguageContext'

const rows = ['web', '3d', 'data', 'fundamentals']

// Compétences mises en avant (pilule noire).
const keySkills = ['React', 'Three.js', 'Blender']

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="competences" className="skills">
      <div className="skills__inner">
        <div className="skills__head" data-reveal>
          <h2 className="skills__title">{t('skills.title')}</h2>
          <p className="skills__intro">{t('skills.intro')}</p>
        </div>

        <ol className="skills__list">
          {rows.map((key, index) => (
            <li
              key={key}
              className="skills__row"
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <span className="skills__number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="skills__label">{t(`skills.${key}.label`)}</h3>
              <ul className="skills__tags">
                {t(`skills.${key}.items`).map((item) => (
                  <li
                    key={item}
                    className={keySkills.includes(item) ? 'skills__tag skills__tag--key' : 'skills__tag'}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
