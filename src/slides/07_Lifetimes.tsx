import { Label, Rule, Gap, Annotation } from '../components/shared'
import { LifetimeVisual } from '../components/visuals/LifetimeVisual'

export function LifetimesSlide() {
  return (
    <>
      <Label>Core concept 03</Label>
      <Gap size="sm" />
      <h2>Lifetimes</h2>
      <Rule />
      <Annotation>
        Every reference in Rust has a <em>lifetime</em> — the scope for which it's valid.
        Most of the time the compiler infers lifetimes automatically. But when it can't,
        you annotate them with <code>'a</code> to tell the compiler how long references
        should live relative to each other. This isn't adding new behavior — it's making
        an implicit contract explicit so the compiler can verify it.
      </Annotation>
      <Gap size="md" />
      <LifetimeVisual />
      <Gap size="sm" />
      <Annotation>
        The result: use-after-free — one of the most dangerous and common bugs in C
        and C++ — is impossible in safe Rust. The compiler catches dangling references
        before your code ever runs.
      </Annotation>
    </>
  )
}
