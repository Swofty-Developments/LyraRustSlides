import styles from './TraitVisual.module.css'

export function TraitVisual() {
  return (
    <div className={styles.wrap}>
      {/* Inheritance side */}
      <div className={styles.side}>
        <div className={styles.sideLabel}>Inheritance</div>
        <div className={styles.tree}>
          <div className={styles.node}>Animal</div>
          <div className={styles.branch}>
            <div className={styles.connector} />
            <div className={styles.children}>
              <div className={styles.node}>Dog</div>
              <div className={styles.node}>Cat</div>
            </div>
          </div>
          <div className={styles.branch}>
            <div className={styles.connector} />
            <div className={styles.children}>
              <div className={styles.nodeDeep}>GuideDog</div>
            </div>
          </div>
        </div>
        <div className={styles.strikethrough} />
      </div>

      {/* Composition side */}
      <div className={styles.side}>
        <div className={styles.sideLabel}>Composition</div>
        <div className={styles.traits}>
          <div className={styles.trait}>
            <span className={styles.traitKw}>trait</span> Walk
          </div>
          <div className={styles.trait}>
            <span className={styles.traitKw}>trait</span> Speak
          </div>
          <div className={styles.trait}>
            <span className={styles.traitKw}>trait</span> Guide
          </div>
        </div>
        <div className={styles.implLines}>
          <div className={styles.implLine}>
            Dog: <span className={styles.implTrait}>Walk + Speak</span>
          </div>
          <div className={styles.implLine}>
            GuideDog: <span className={styles.implTrait}>Walk + Speak + Guide</span>
          </div>
        </div>
      </div>
    </div>
  )
}
