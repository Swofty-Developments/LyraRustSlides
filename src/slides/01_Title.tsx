import { Label, Lead, Gap } from '../components/shared'
import styles from './01_Title.module.css'

export function TitleSlide() {
  return (
    <>
      <div className={styles.decoration} aria-hidden="true">Rs</div>
      <Label>Workshop · 30 min</Label>
      <Gap size="sm" />
      <h1>Intro to Rust</h1>
      <Gap size="md" />
      <Lead>Concepts, not syntax.</Lead>
      <Gap size="md" />
      <p className={styles.byline}>
        We're not going to write Rust today. We're going to understand<br />
        the ideas that make Rust different — and why they matter<br />
        for anyone writing software that needs to be reliable.
      </p>
    </>
  )
}
