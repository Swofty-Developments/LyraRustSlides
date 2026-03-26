import { Label, Rule, Gap, ConceptBlock, Annotation } from '../components/shared'
import { Code } from '../components/Code'
import styles from './05_Ownership.module.css'

const SCOPE_CODE = `fn process_data() {
    let config = load_config();

    {   // subscope
        let db = connect(&config);
        db.execute("INSERT ...");
        // db dropped here
    }   // ← connection released

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
      <div className={styles.split}>
        <div className={styles.left}>
          <ConceptBlock>
            Every value in Rust has exactly one owner.<br />
            When the owner goes out of scope, the value is <em>dropped</em> — its memory
            is freed, its resources are released. Automatically. Deterministically.
          </ConceptBlock>
          <Gap size="md" />
          <Annotation>
            The database connection is <em>owned</em> by the function scope. When the function
            exits — whether by returning a result, returning an error, or panicking — the
            connection is dropped. No <code>finally</code> block. No <code>.close()</code> to
            forget. The compiler enforces it. This pattern is called <em>RAII</em>.
          </Annotation>
          <Gap size="sm" />
          <Annotation>
            Notice the inner block: <code>db</code> is created inside a subscope and dropped when
            that scope ends. Meanwhile <code>config</code> lives in the outer scope and stays alive
            throughout. You control cleanup by controlling scope boundaries.
          </Annotation>
        </div>
        <div className={styles.right}>
          <Code lang="rs">{SCOPE_CODE}</Code>
        </div>
      </div>
    </>
  )
}
