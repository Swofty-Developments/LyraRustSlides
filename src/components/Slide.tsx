import { type ReactNode, useRef, useEffect } from 'react'
import styles from './Slide.module.css'

interface SlideProps {
  active: boolean
  direction: 'forward' | 'back'
  children: ReactNode
  variant?: 'default' | 'title'
}

export function Slide({ active, direction, children, variant = 'default' }: SlideProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const kids = ref.current.children
    for (let i = 0; i < kids.length; i++) {
      ;(kids[i] as HTMLElement).style.setProperty('--i', String(i))
    }
  }, [children])

  const cls = [
    styles.slide,
    variant === 'title' && styles.title,
    active ? `${styles.active} active` : (direction === 'forward' ? styles.exitUp : styles.exitDown),
  ].filter(Boolean).join(' ')

  return (
    <section ref={ref} className={cls} aria-hidden={!active}>
      {children}
    </section>
  )
}
