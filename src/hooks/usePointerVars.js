import { useEffect } from 'react'

// Écrit la position de la souris sur l'élément dans --mx et --my (de -1 à 1, 0 au centre).
// Inactif sur écran tactile et si l'utilisateur demande moins d'animations.
export default function usePointerVars(ref) {
  useEffect(() => {
    const element = ref.current
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!element || !canHover || reduceMotion) return

    function handleMove(event) {
      const rect = element.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
      element.style.setProperty('--mx', x.toFixed(3))
      element.style.setProperty('--my', y.toFixed(3))
    }

    function handleLeave() {
      element.style.setProperty('--mx', '0')
      element.style.setProperty('--my', '0')
    }

    element.addEventListener('pointermove', handleMove)
    element.addEventListener('pointerleave', handleLeave)
    return () => {
      element.removeEventListener('pointermove', handleMove)
      element.removeEventListener('pointerleave', handleLeave)
    }
  }, [ref])
}
