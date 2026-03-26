import { Label, Rule, Gap, ConceptBlock, Annotation } from '../components/shared'
import { Code } from '../components/Code'
import { ScopeVisual } from '../components/visuals/ScopeVisual'

const SCOPE_CODE = `fn process_data() {
    let config = load_config();        // config owned here

    {   // subscope
        let db = connect(&config);     // db owned by this block
        db.execute("INSERT ...");
        // db dropped here — connection closed
    }   // ← db is gone, connection released

    // config still alive, db is not
    println!("done: {}", config.name);
}`

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
      <Code lang="rust" code={SCOPE_CODE} />
      <Gap size="sm" />
      <Annotation>
        Notice the inner block: <code>db</code> is created inside a subscope and dropped when
        that scope ends — the connection is released right there, not at the end of the function.
        Meanwhile <code>config</code> lives in the outer scope and stays alive throughout.
        You control exactly when resources are cleaned up by controlling scope boundaries.
      </Annotation>
      <Gap size="md" />
      <ScopeVisual />
    </>
  )
}
