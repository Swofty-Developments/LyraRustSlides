import { Label, Rule, Gap, Annotation } from '../components/shared'
import { Code, CodePair } from '../components/Code'

const TS_CODE = `// Express.js GET handler
app.get('/users/:id', async (req, res) => {
  // Acquire a connection from the pool
  const db = await pool.connect();

  const user = await db.query(
    'SELECT * FROM users WHERE id = $1',
    [req.params.id]
  );

  if (!user.rows[0]) {
    return res.status(404).json({ error: 'not found' });
    // ^^^ BUG: early return — db.release() is never called.
    // This connection leaks. Under load, the pool
    // exhausts and every request hangs.
  }

  const result = res.json(user.rows[0]);
  db.release(); // Only reached on the happy path
  return result;
});`

const RS_CODE = `// Axum GET handler
async fn get_user(
    State(pool): State<PgPool>,  // pool injected by framework
    Path(id): Path<i32>,         // path param extracted + typed
) -> Result<Json<User>, StatusCode> {
    // Borrow a connection — automatically returned
    // when this function exits, no matter how it exits.
    let user = sqlx::query_as!(
        User,
        "SELECT * FROM users WHERE id = $1",
        id
    )
    .fetch_optional(&pool)
    .await
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    // ^^^ ? returns early on error.
    // Connection is STILL cleaned up — ownership guarantees it.

    user.map(Json).ok_or(StatusCode::NOT_FOUND)
} // conn dropped here. Always. Every path.`

export function HandlerComparisonSlide() {
  return (
    <>
      <Label>A real-world example</Label>
      <Gap size="sm" />
      <h2>The same handler — one leaks, one can't</h2>
      <Rule />
      <Annotation>
        Both handlers do the same thing: look up a user by ID, return 404 if not found.
        The TypeScript version has a subtle resource leak. The Rust version makes that
        bug structurally impossible.
      </Annotation>
      <Gap size="md" />
      <CodePair>
        <Code lang="ts">{TS_CODE}</Code>
        <Code lang="rs">{RS_CODE}</Code>
      </CodePair>
    </>
  )
}
