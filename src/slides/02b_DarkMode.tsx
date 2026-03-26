import { useEffect, useRef } from 'react'
import styles from './02b_DarkMode.module.css'

export function DarkModeSlide() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const section = el.closest('section')
    if (!section) return

    const observer = new MutationObserver(() => {
      if (section.classList.contains('active')) {
        document.documentElement.classList.add('dark')
      }
    })

    // Check immediately in case already active
    if (section.classList.contains('active')) {
      document.documentElement.classList.add('dark')
    }

    observer.observe(section, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={styles.container}>
      <span className={styles.emoji}>😜</span>
      <p className={styles.text}>
        U rlly thought I was gonna do the whole thing in light mode?
      </p>
    </div>
  )
}
