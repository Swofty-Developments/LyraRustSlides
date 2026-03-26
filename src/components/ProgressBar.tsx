import styles from './ProgressBar.module.css'

interface Props {
  current: number
  total: number
}

export function ProgressBar({ current, total }: Props) {
  const pct = ((current + 1) / total) * 100

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
      <span className={styles.count}>{current + 1}/{total}</span>
    </div>
  )
}
