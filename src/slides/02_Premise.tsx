import { Label, Rule, Gap, Annotation } from '../components/shared'
import { BugGridVisual } from '../components/visuals/BugGridVisual'

export function PremiseSlide() {
  return (
    <>
      <Label>The premise</Label>
      <Gap size="sm" />
      <h2>What if the compiler could<br />prevent your production bugs?</h2>
      <Rule />
      <Annotation>
        Not type mismatches. Not lint warnings. The kind of bugs that pass code review,
        pass your tests, and then take down production at 3am. Rust catches these
        at compile time — before your code ever runs.
      </Annotation>
      <Gap size="lg" />
      <BugGridVisual />
    </>
  )
}
