import { Label, Rule, Gap, Annotation } from '../components/shared'
import { ZeroCostVisual } from '../components/visuals/ZeroCostVisual'

export function ZeroCostSlide() {
  return (
    <>
      <Label>The punchline</Label>
      <Gap size="sm" />
      <h2>All of this safety is free at runtime</h2>
      <Rule />
      <Annotation>
        Ownership, borrowing, lifetimes, traits, Option, Result — every single check
        we've talked about happens at <em>compile time</em>. The binary that ships to
        production has zero overhead from these safety guarantees. There's no garbage
        collector running in the background, no reference counting unless you opt in,
        no runtime type information. Rust compiles to native machine code that runs
        in the same performance ballpark as C and C++.
      </Annotation>
      <Gap size="lg" />
      <ZeroCostVisual />
      <Gap size="md" />
      <Annotation>
        This is Rust's thesis: safety and performance aren't a tradeoff.
        The compiler does the hard work so the runtime doesn't have to.
      </Annotation>
    </>
  )
}
