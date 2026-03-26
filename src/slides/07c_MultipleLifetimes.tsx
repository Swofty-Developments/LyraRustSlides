import { Label, Rule, Gap, Annotation } from '../components/shared'
import { Code, CodePair } from '../components/Code'

const SIMPLE_CODE = `// One lifetime — both references must live equally long
fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() { a } else { b }
}`

const MULTI_CODE = `// Two lifetimes — the references can live different lengths
struct Parser<'input, 'config> {
    source: &'input str,       // borrowed from input
    delimiter: &'config str,   // borrowed from config
}

// 'input and 'config are independent —
// the input can be short-lived even if
// the config lives for the whole program.

fn parse<'i, 'c>(
    source: &'i str,
    config: &'c Config,
) -> Parser<'i, 'c> {
    Parser {
        source,
        delimiter: &config.delimiter,
    }
}`

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
        makes the relationship clear. Each lifetime tracks a separate "how long does this
        reference need to stay valid?" contract.
      </Annotation>
      <Gap size="md" />
      <CodePair>
        <Code lang="rs">{SIMPLE_CODE}</Code>
        <Code lang="rs">{MULTI_CODE}</Code>
      </CodePair>
    </>
  )
}
