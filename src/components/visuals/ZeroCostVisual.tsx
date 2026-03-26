import styles from './ZeroCostVisual.module.css'

const CHECKS = [
  'Ownership verified',
  'Borrows validated',
  'Lifetimes checked',
  'Types resolved',
  'Traits dispatched',
]

export function ZeroCostVisual() {
  return (
    <div className={styles.wrap}>
      <div className={styles.col}>
        <div className={styles.colLabel}>Compile time</div>
        <div className={styles.checks}>
          {CHECKS.map((c, i) => (
            <div key={c} className={styles.check} style={{ '--ci': i } as React.CSSProperties}>
              <span className={styles.checkmark}>✓</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.col}>
        <div className={styles.colLabel}>Runtime cost</div>
        <div className={styles.zero}>
          <span className={styles.zeroNum}>0</span>
          <span className={styles.zeroUnit}>bytes overhead</span>
        </div>
        <div className={styles.zeroDetail}>No GC. No runtime. No overhead.</div>
      </div>
    </div>
  )
}
