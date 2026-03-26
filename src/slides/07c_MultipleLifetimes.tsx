import { Label, Rule, Gap, Annotation } from '../components/shared'
import { Code, CodePair } from '../components/Code'

const SIMPLE_CODE = `// One lifetime — both references must live equally long
fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() { a } else { b }
}`

const MULTI_CODE = `// Two lifetimes — compiler knows which one matters
fn pick<'a, 'b>(a: &'a str, b: &'b str) -> &'a str {
    a  // result only depends on 'a
}

let result;
let a = String::from("hello");

{
    let b = String::from("world");
    result = pick(&a, &b);
    // b is about to die — but that's fine,
    // compiler knows result came from a, not b
}

println!("{result}"); // ✓ works — a is still alive

// With pick<'a>(a: &'a str, b: &'a str) this
// would FAIL — compiler would assume result
// might depend on b, which is already dead.`

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
        makes the relationship clear. Separate lifetimes give the compiler more
        information — so it knows exactly which references the result depends on,
        and which ones can safely die early.
      </Annotation>
      <Gap size="md" />
      <CodePair>
        <Code lang="rs">{SIMPLE_CODE}</Code>
        <Code lang="rs">{MULTI_CODE}</Code>
      </CodePair>
    </>
  )
}
