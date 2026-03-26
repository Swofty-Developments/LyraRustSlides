import styles from './ErrorFlowVisual.module.css'

export function ErrorFlowVisual() {
  return (
    <div className={styles.wrap}>
      <div className={styles.col}>
        <div className={styles.colLabel}>Exceptions (JS/Python/Java)</div>
        <div className={styles.flow}>
          <div className={styles.step} style={{ '--si': 0 } as React.CSSProperties}>
            <span className={styles.fn}>readFile()</span>
            <span className={styles.arrow}>↓ throws</span>
          </div>
          <div className={styles.step} style={{ '--si': 1 } as React.CSSProperties}>
            <span className={styles.fn}>parseConfig()</span>
            <span className={styles.arrow}>↓ throws</span>
          </div>
          <div className={styles.step} style={{ '--si': 2 } as React.CSSProperties}>
            <span className={styles.fn}>startServer()</span>
            <span className={styles.arrow}>↓ uncaught</span>
          </div>
          <div className={styles.crash} style={{ '--si': 3 } as React.CSSProperties}>
            CRASH
          </div>
        </div>
        <span className={styles.note}>Error invisible in signatures. Hope someone catches it.</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.col}>
        <div className={styles.colLabel}>Result + ? (Rust)</div>
        <div className={styles.flow}>
          <div className={styles.stepRust} style={{ '--si': 0 } as React.CSSProperties}>
            <span className={styles.fn}>read_file()</span>
            <span className={styles.qmark}>?</span>
            <span className={styles.returns}>→ Result&lt;String, Error&gt;</span>
          </div>
          <div className={styles.stepRust} style={{ '--si': 1 } as React.CSSProperties}>
            <span className={styles.fn}>parse_config()</span>
            <span className={styles.qmark}>?</span>
            <span className={styles.returns}>→ Result&lt;Config, Error&gt;</span>
          </div>
          <div className={styles.stepRust} style={{ '--si': 2 } as React.CSSProperties}>
            <span className={styles.fn}>start_server()</span>
            <span className={styles.qmark}>?</span>
            <span className={styles.returns}>→ Result&lt;(), Error&gt;</span>
          </div>
          <div className={styles.handled} style={{ '--si': 3 } as React.CSSProperties}>
            Every error handled or propagated
          </div>
        </div>
        <span className={styles.noteGood}>Error path visible. Compiler enforces handling.</span>
      </div>
    </div>
  )
}
