import styles from './BugGridVisual.module.css'

const BUGS = [
  { bug: 'Memory leak', other: 'Silent resource exhaustion', rust: 'Ownership — dropped at scope exit' },
  { bug: 'Use-after-free', other: 'Segfault / undefined behavior', rust: 'Borrow checker — caught at compile' },
  { bug: 'Data race', other: 'Intermittent corruption', rust: 'Send + Sync traits — no shared mutation' },
  { bug: 'Null dereference', other: 'TypeError at runtime', rust: 'Option<T> — must handle None' },
  { bug: 'Unhandled error', other: 'Silent failure / crash', rust: 'Result<T, E> — must handle Err' },
]

export function BugGridVisual() {
  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <span className={styles.headerCell}>Bug</span>
        <span className={styles.headerCell}>Most languages</span>
        <span className={styles.headerCell}>Rust</span>
      </div>
      {BUGS.map((b, i) => (
        <div
          key={b.bug}
          className={styles.row}
          style={{ '--ri': i } as React.CSSProperties}
        >
          <span className={styles.bugName}>{b.bug}</span>
          <span className={styles.other}>
            <span className={styles.x}>✗</span> {b.other}
          </span>
          <span className={styles.rustFix}>
            <span className={styles.check}>✓</span> {b.rust}
          </span>
        </div>
      ))}
    </div>
  )
}
