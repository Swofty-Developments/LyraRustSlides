import type { ReactNode } from 'react'
import styles from './shared.module.css'

export function Label({ children }: { children: ReactNode }) {
  return <span className={styles.label}>{children}</span>
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className={styles.lead}>{children}</p>
}

export function Rule() {
  return <hr className={styles.rule} />
}

export function ConceptBlock({ children }: { children: ReactNode }) {
  return (
    <div className={styles.concept}>
      <p>{children}</p>
    </div>
  )
}

export function Annotation({ children }: { children: ReactNode }) {
  return <p className={styles.annotation}>{children}</p>
}

export function Gap({ size }: { size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' }) {
  return <div className={styles[`gap_${size}`]} aria-hidden />
}
