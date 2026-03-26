import { Label, Rule, Gap, Annotation } from '../components/shared'
import { Code } from '../components/Code'

const STRUCT_CODE = `// This struct holds a reference to a string — not an owned String.
// 'a tells the compiler: "this struct can't outlive the string it borrows."
struct BlogPost<'a> {
    title: &'a str,    // borrowed from somewhere else
    body: &'a str,     // also borrowed — same lifetime
    views: u64,        // this is owned, no lifetime needed
}

// The impl block carries the same 'a — it flows through
impl<'a> BlogPost<'a> {
    fn summary(&self) -> String {
        format!("{} ({} views)", self.title, self.views)
    }
}

// Usage — the compiler tracks the lifetimes automatically:
let title = String::from("Why Rust?");
let body = String::from("Because the compiler catches your bugs.");

let post = BlogPost {
    title: &title,     // borrows title
    body: &body,       // borrows body
    views: 42,
};

println!("{}", post.summary()); // ✓ title and body still alive

// drop(title);  // ✗ compile error if uncommented —
                 //   post still holds a reference to title`

const COMPARISON_CODE = `// Without lifetimes (TypeScript), this silently breaks:
// const post = { title: getTitle() };
// // ...later, the original string is garbage collected
// // or mutated, and post.title points to stale data.
// // No error. Just a subtle bug.

// With lifetimes (Rust), the compiler guarantees that
// post.title is valid for as long as post exists.
// The 'a annotation is that guarantee, written in code.`

export function LifetimesInPracticeSlide() {
  return (
    <>
      <Label>Lifetimes in practice</Label>
      <Gap size="sm" />
      <h2>Lifetimes on structs</h2>
      <Rule />
      <Annotation>
        When a struct holds a reference instead of owning the data, you need a lifetime
        parameter. <code>&apos;a</code> is a contract between the struct and its data:
        "this struct cannot outlive the thing it's borrowing from."
        The compiler enforces this at every usage site — if you try to use the struct
        after the borrowed data is gone, it's a compile error, not a runtime crash.
      </Annotation>
      <Gap size="md" />
      <Code lang="rs">{STRUCT_CODE}</Code>
      <Gap size="md" />
      <Code>{COMPARISON_CODE}</Code>
    </>
  )
}
