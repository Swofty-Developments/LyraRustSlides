import { Label, Rule, Gap, Annotation } from '../components/shared'
import { TraitVisual } from '../components/visuals/TraitVisual'

export function NoInheritanceSlide() {
  return (
    <>
      <Label>Core concept 04</Label>
      <Gap size="sm" />
      <h2>No inheritance. <em>On purpose.</em></h2>
      <Rule />
      <Annotation>
        Rust deliberately has no class inheritance. The language designers considered it
        harmful for most use cases. Deep class hierarchies are fragile — changing a parent
        breaks children in surprising ways, you end up with God classes, and behavior gets
        scattered across layers of indirection. Instead, Rust separates data (structs) from
        behavior (traits) and lets you compose them freely.
      </Annotation>
      <Gap size="md" />
      <TraitVisual />
      <Gap size="sm" />
      <Annotation>
        Traits are like interfaces — but more flexible. Any type can implement any trait,
        even types you didn't write. There's no coupling between data and behavior.
        You get polymorphism without the fragile base class problem.
      </Annotation>
    </>
  )
}
