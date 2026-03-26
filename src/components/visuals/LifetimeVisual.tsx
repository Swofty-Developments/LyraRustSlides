import styles from './LifetimeVisual.module.css'

export function LifetimeVisual() {
  return (
    <div className={styles.wrap}>
      {/* All bars are absolutely positioned inside a shared track so widths are relative */}
      <div className={styles.row}>
        <span className={styles.label}>data</span>
        <div className={styles.track}>
          <div className={`${styles.bar} ${styles.barData}`}>
            <span className={styles.tickL}>created</span>
            <span className={styles.tickR}>dropped</span>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>&amp;data</span>
        <div className={styles.track}>
          <div className={`${styles.bar} ${styles.barRef1}`}>
            <span className={styles.tickL}>borrow</span>
            <span className={styles.tickR}>returned</span>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.label}>&amp;data</span>
        <div className={styles.track}>
          <div className={`${styles.bar} ${styles.barRef2}`}>
            <span className={styles.tickL}>borrow</span>
            <span className={styles.tickR}>returned</span>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <span className={styles.labelBad}>&amp;data</span>
        <div className={styles.track}>
          <div className={`${styles.bar} ${styles.barBad}`}>
            <span className={styles.tickL}>borrow</span>
            <span className={styles.tickBad}>outlives owner!</span>
          </div>
          {/* Marker showing where data ends */}
          <div className={styles.deathLine} />
        </div>
      </div>

      <div className={styles.footnote}>
        <span className={styles.ok}>The first two borrows end before data is dropped — the compiler allows them.</span>
      </div>
      <div className={styles.footnote}>
        <span className={styles.bad}>The third borrow extends past the owner's lifetime — the compiler rejects it.</span>
      </div>
    </div>
  )
}
