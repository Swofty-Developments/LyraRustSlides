import styles from './ScopeVisual.module.css'

export function ScopeVisual() {
  return (
    <div className={styles.wrap}>
      <div className={styles.scope}>
        <span className={styles.braceOpen}>{'{'}</span>
        <div className={styles.inner}>
          <div className={styles.binding}>
            <span className={styles.kw}>let</span>{' '}
            <span className={styles.var}>conn</span>{' '}
            <span className={styles.eq}>=</span>{' '}
            <span className={styles.val}>db.connect()</span>
          </div>
          <div className={styles.value}>
            <div className={styles.box}>
              <span className={styles.boxLabel}>DbConnection</span>
              <span className={styles.boxOwner}>owner: conn</span>
            </div>
          </div>
          <div className={styles.usage}>
            <span className={styles.dim}>conn.query(...)</span>
          </div>
        </div>
        <span className={styles.braceClose}>{'}'}</span>
        <div className={styles.dropZone}>
          <span className={styles.dropLabel}>dropped — memory freed, connection closed</span>
        </div>
      </div>
    </div>
  )
}
