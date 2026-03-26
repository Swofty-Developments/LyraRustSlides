import { Label, Gap, Annotation } from '../components/shared'
import { Code } from '../components/Code'

const TRAITS_CODE = `// Define behavior as a trait — like an interface
trait Summarize {
    fn summary(&self) -> String;
}

// Two completely unrelated structs
struct Article { title: String, body: String }
struct Tweet   { user: String, text: String }

// Each implements the same trait differently
impl Summarize for Article {
    fn summary(&self) -> String {
        format!("{}", self.title)
    }
}

impl Summarize for Tweet {
    fn summary(&self) -> String {
        format!("@{}: {}", self.user, self.text)
    }
}

// Now any function can accept "anything summarizable"
// without knowing the concrete type
fn print_summary(item: &impl Summarize) {
    println!("{}", item.summary());
}`

export function TraitsSlide() {
  return (
    <>
      <Label>Composition in practice</Label>
      <Gap size="sm" />
      <h2>Traits</h2>
      <Gap size="md" />
      <Annotation>
        A trait defines a contract: "if you implement me, you must provide these methods."
        Any struct can implement any number of traits. There's no hierarchy — an Article
        and a Tweet have nothing in common except that they both can be summarized.
        Functions accept traits, not concrete types, so they work with anything that
        fulfills the contract.
      </Annotation>
      <Gap size="md" />
      <Code lang="rs">{TRAITS_CODE}</Code>
    </>
  )
}
