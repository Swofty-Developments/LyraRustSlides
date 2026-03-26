import { Label, Rule, Gap, ConceptBlock, Annotation } from '../components/shared'
import { ScopeVisual } from '../components/visuals/ScopeVisual'

export function OwnershipSlide() {
  return (
    <>
      <Label>Core concept 01</Label>
      <Gap size="sm" />
      <h2>Ownership</h2>
      <Rule />
      <ConceptBlock>
        Every value in Rust has exactly one owner.<br />
        When the owner goes out of scope, the value is <em>dropped</em> — its memory
        is freed, its resources are released. Automatically. Deterministically.
      </ConceptBlock>
      <Gap size="md" />
      <Annotation>
        This is how the Rust handler from the previous slide works. The database
        connection is <em>owned</em> by the function scope. When the function exits — whether
        by returning a result, returning an error, or panicking — the connection is dropped.
        No <code>finally</code> block. No <code>.close()</code> to forget. The compiler enforces it.
        This pattern is called RAII: Resource Acquisition Is Initialization.
      </Annotation>
      <Gap size="md" />
      <ScopeVisual />
    </>
  )
}
