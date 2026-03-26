import { Label, Rule, Gap, Annotation } from '../components/shared'
import { Code, CodePair } from '../components/Code'

const TS_NULL = `// TypeScript — null sneaks through
function getUser(id: number): User | undefined {
  return db.find(id);
}

// Caller forgets to check. Code compiles fine.
const user = getUser(42);
console.log(user.name);
// ^^^ Runtime: "TypeError: Cannot read
//     properties of undefined"
// This passes TypeScript's type checker if
// strict null checks aren't enabled.
// Even with them, it's easy to ! assert away.`

const RS_NULL = `// Rust — null doesn't exist in the language
fn get_user(id: i32) -> Option<User> {
  db.find(id) // Returns Some(user) or None
}

// Caller MUST handle both cases.
// This won't compile without the match:
match get_user(42) {
    Some(user) => println!("{}", user.name),
    None => println!("not found"),
}

// Or use combinators for concise handling:
let name = get_user(42)
    .map(|u| u.name)
    .unwrap_or("anonymous".into());`

export function NullSlide() {
  return (
    <>
      <Label>Core concept 05</Label>
      <Gap size="sm" />
      <h2>Null doesn't exist</h2>
      <Rule />
      <Annotation>
        Tony Hoare called null references his "billion-dollar mistake." Rust agrees — there
        is no null, no undefined, no nil. Instead, <code>Option&lt;T&gt;</code> makes absence
        explicit: it's either <code>Some(value)</code> or <code>None</code>, and the compiler
        forces you to handle both before you can access the inner value.
      </Annotation>
      <Gap size="md" />
      <CodePair>
        <Code lang="ts">{TS_NULL}</Code>
        <Code lang="rs">{RS_NULL}</Code>
      </CodePair>
    </>
  )
}
