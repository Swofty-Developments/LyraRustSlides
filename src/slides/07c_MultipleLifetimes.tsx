import { Label, Rule, Gap, Annotation } from '../components/shared'
import { Code, CodePair } from '../components/Code'

const SIMPLE_CODE = `// One lifetime — both references must live equally long
fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() { a } else { b }
}`

const MULTI_CODE = `// Two lifetimes — tracked independently
struct Parser<'input, 'config> {
    source: &'input str,
    delimiter: &'config str,
}

// The struct is valid as long as BOTH are alive.
// If either dies, the struct is invalid.
// But the compiler tracks them separately — so
// they don't need to have the same scope.

let config = load_config();       // lives a long time

{
    let input = read_file();      // lives briefly
    let p = Parser {
        source: &input,
        delimiter: &config.delim,
    };
    // p valid here — both alive
}
// p gone — input died, so parser can't survive`

export function MultipleLifetimesSlide() {
  return (
    <>
      <Label>Lifetimes continued</Label>
      <Gap size="sm" />
      <h2><code>'a</code> is just a name</h2>
      <Rule />
      <Annotation>
        There's nothing special about <code>'a</code> — it's just a convention, like
        naming a variable <code>i</code> in a loop. When a type borrows from multiple
        independent sources, you give each source its own lifetime: <code>'a</code>, <code>'b</code>, <code>'input</code>, <code>'config</code> — whatever
        makes the relationship clear. Each lifetime tracks a separate contract —
        and the struct is only valid as long as <em>all</em> of its lifetimes are still alive.
      </Annotation>
      <Gap size="md" />
      <CodePair>
        <Code lang="rs">{SIMPLE_CODE}</Code>
        <Code lang="rs">{MULTI_CODE}</Code>
      </CodePair>
    </>
  )
}
