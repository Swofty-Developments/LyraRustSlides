import { Label, Rule, Gap, Annotation } from '../components/shared'
import styles from './13_Resources.module.css'

const ADVICE = [
  {
    name: 'Pick a real project. Build it.',
    desc: 'A CLI tool, a small web server, a file parser. Something you actually want. Fighting the borrow checker on real problems is how the concepts stick.',
  },
  {
    name: 'Don\'t vibe-code it with AI.',
    desc: 'If you paste compiler errors into ChatGPT, you\'ll get code that compiles but you won\'t understand why. The whole point of Rust is that the compiler is teaching you. Let it.',
  },
  {
    name: 'Read the compiler errors.',
    desc: 'Rust has the best error messages of any compiler. They tell you what went wrong, why, and often suggest the fix. Treat them as documentation, not obstacles.',
  },
  {
    name: 'Use Rustlings + The Rust Book together.',
    desc: 'Rustlings gives you small exercises. The Book explains the concepts. Alternate between them — read a chapter, do the exercises, build something with what you learned.',
  },
]

export function ResourcesSlide() {
  return (
    <>
      <Label>Where to go from here</Label>
      <Gap size="sm" />
      <h2>Start writing Rust</h2>
      <Rule />
      <Annotation>
        Everything we covered today — ownership, borrowing, lifetimes, traits, Option,
        Result — is the foundation. Once these concepts click, learning the syntax is
        straightforward. Here's how to get there:
      </Annotation>
      <Gap size="md" />
      <div className={styles.list}>
        {ADVICE.map((a) => (
          <div key={a.name} className={styles.item}>
            <span className={styles.name}>{a.name}</span>
            <span className={styles.desc}>{a.desc}</span>
          </div>
        ))}
      </div>
      <Gap size="xl" />
      <p className={styles.closing}>Thanks. Questions?</p>
    </>
  )
}
