import { Label, Rule, Gap, ConceptBlock, Annotation } from '../components/shared'
import { Code } from '../components/Code'

const BORROW_CODE = `let mut data = vec![1, 2, 3];

// Multiple immutable borrows — totally fine.
// Anyone can read, nobody is writing.
let r1 = &data;       // borrow 1: read access
let r2 = &data;       // borrow 2: also read access
println!("{r1:?} {r2:?}"); // both used here

// Mutable borrow — exclusive access.
// The compiler guarantees nobody else is reading.
let w = &mut data;    // borrow 3: write access
w.push(4);            // safe — we're the only accessor

// This would NOT compile:
// let r3 = &data;    // ✗ can't read while a mutable borrow exists
// The compiler catches the data race at build time.`

export function BorrowingSlide() {
  return (
    <>
      <Label>Core concept 02</Label>
      <Gap size="sm" />
      <h2>Borrowing</h2>
      <Rule />
      <ConceptBlock>
        You can lend a value out as a <em>reference</em> without giving up ownership.
        But the compiler enforces one rule: many readers <strong>or</strong> one writer.
        Never both at the same time.
      </ConceptBlock>
      <Gap size="sm" />
      <Annotation>
        This is Rust's answer to data races. In languages like Java or Go, two threads
        can read and write the same data simultaneously — leading to corruption that only
        shows up intermittently in production. Rust makes this a compile error instead.
      </Annotation>
      <Gap size="md" />
      <Code lang="rs">{BORROW_CODE}</Code>
    </>
  )
}
