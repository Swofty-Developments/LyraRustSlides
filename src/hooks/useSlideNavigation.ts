import { useState, useEffect, useCallback, useRef } from 'react'

export function useSlideNavigation(total: number) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')
  const touchStartX = useRef(0)

  const goTo = useCallback((n: number) => {
    setCurrent((prev) => {
      if (n < 0 || n >= total || n === prev) return prev
      setDirection(n > prev ? 'forward' : 'back')
      return n
    })
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goTo(current + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goTo(current - 1)
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(total - 1)
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
    }

    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(dx) > 60) {
        dx < 0 ? goTo(current + 1) : goTo(current - 1)
      }
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }, [current, total, goTo])

  return { current, direction, total, next, prev, goTo }
}
