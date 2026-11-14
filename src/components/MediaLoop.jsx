import { useLanguage } from '../i18n/LanguageContext'

// Affiche la vidéo en boucle si elle est fournie, sinon l'image.
// Avec prefers-reduced-motion, la vidéo est remplacée par son image poster.
// priority : à activer pour un média visible dès l'ouverture de la page (hero).
export default function MediaLoop({ image, video, className, sizes, priority = false }) {
  const { pick } = useLanguage()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const loadingProps = priority ? { fetchPriority: 'high' } : { loading: 'lazy' }

  if (video && !reduceMotion) {
    return (
      <div className={className}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={video.poster}
          width={video.width}
          height={video.height}
          aria-label={pick(video.alt)}
        >
          <source src={video.webm} type="video/webm" />
          <source src={video.mp4} type="video/mp4" />
        </video>
      </div>
    )
  }

  if (video) {
    return (
      <div className={className}>
        <img
          src={video.poster}
          width={video.width}
          height={video.height}
          alt={pick(video.alt)}
          {...loadingProps}
        />
      </div>
    )
  }

  return (
    <div className={className}>
      <img
        src={image.src}
        srcSet={image.srcset}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={pick(image.alt)}
        {...loadingProps}
      />
    </div>
  )
}
