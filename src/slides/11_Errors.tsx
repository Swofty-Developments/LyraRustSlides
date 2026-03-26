import { Label, Rule, Gap, Annotation } from '../components/shared'
import { ErrorFlowVisual } from '../components/visuals/ErrorFlowVisual'
import { Code } from '../components/Code'

const ERROR_CODE = `// Every function declares its error type in the signature.
// The caller sees exactly what can go wrong.
fn read_config(path: &str) -> Result<Config, ConfigError> {
    // ? operator: if this returns Err, propagate it immediately.
    // If it returns Ok, unwrap the value and continue.
    let contents = fs::read_to_string(path)
        .map_err(ConfigError::FileNotFound)?;

    let config: Config = toml::from_str(&contents)
        .map_err(ConfigError::ParseError)?;

    Ok(config) // Explicitly return the success case
}

// Caller must handle the Result — can't just ignore it:
match read_config("app.toml") {
    Ok(config) => start_server(config),
    Err(e) => eprintln!("Failed to load config: {e}"),
}`

export function ErrorsSlide() {
  return (
    <>
      <Label>Core concept 06</Label>
      <Gap size="sm" />
      <h2>Errors are values, not exceptions</h2>
      <Rule />
      <Annotation>
        Rust has no exceptions, no try/catch. Errors are returned as values using
        <code> Result&lt;T, E&gt;</code> — either <code>Ok(value)</code> or <code>Err(error)</code>.
        The <code>?</code> operator makes propagation concise without hiding the error path.
        You can see every possible failure just by reading the function signature.
      </Annotation>
      <Gap size="md" />
      <ErrorFlowVisual />
      <Gap size="md" />
      <Code lang="rs">{ERROR_CODE}</Code>
    </>
  )
}
