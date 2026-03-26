import { Label, Rule, Gap, Annotation } from '../components/shared'
import { Code, CodePair } from '../components/Code'

const STRUCT_CODE = `struct BlogPost<'a> {
    title: &'a str,    // borrowed
    body: &'a str,     // same lifetime
    views: u64,        // owned, no lifetime
}

impl<'a> BlogPost<'a> {
    fn summary(&self) -> String {
        format!("{} ({} views)", self.title, self.views)
    }
}`

const USAGE_CODE = `let title = String::from("Why Rust?");
let body = String::from("The compiler catches bugs.");

let post = BlogPost {
    title: &title,     // borrows title
    body: &body,       // borrows body
    views: 42,
};

println!("{}", post.summary()); // ✓ still alive

// drop(title);  // ✗ compile error —
                 //   post holds a reference`

export function LifetimesInPracticeSlide() {
  return (
    <>
      <Label>Lifetimes in practice</Label>
      <Gap size="sm" />
      <h2>Lifetimes on structs</h2>
      <Rule />
      <Annotation>
        When a struct holds a reference instead of owning the data, you need a lifetime
        parameter. <code>'a</code> is a contract: "this struct cannot outlive the thing
        it borrows from." The compiler enforces this at every usage site — if you try to
        use the struct after the borrowed data is gone, it's a compile error, not a runtime crash.
      </Annotation>
      <Gap size="md" />
      <CodePair>
        <Code lang="rs">{STRUCT_CODE}</Code>
        <Code lang="rs">{USAGE_CODE}</Code>
      </CodePair>
    </>
  )
}
