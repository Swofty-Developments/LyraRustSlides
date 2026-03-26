import styles from './Code.module.css'

interface CodeProps {
  lang?: 'ts' | 'rs'
  children: string
}

const SYNTAX_RULES: [RegExp, string][] = [
  [/\/\/.*$/gm, 'cm'],
  [/"[^"]*"|'[^']*'/g, 'str'],
  [/\b(fn|let|mut|const|async|await|if|else|return|impl|for|struct|trait|use|pub|mod|type|enum|match|where)\b/g, 'kw'],
  [/\b(app|pool|db|req|res|sqlx|fs|toml|format|vec)\b/g, 'ns'],
  [/\b(String|Option|Result|Ok|Err|Some|None|Json|Path|State|PgPool|StatusCode|Config|User|i32|str|io|Error|number)\b/g, 'tp'],
  [/\b\d+\b/g, 'num'],
  [/\b([a-z_]+)(?=\s*[!(])/g, 'fn'],
]

function highlight(code: string): string {
  const tokens: { start: number; end: number; cls: string; text: string }[] = []

  for (const [regex, cls] of SYNTAX_RULES) {
    const re = new RegExp(regex.source, regex.flags)
    let m: RegExpExecArray | null
    while ((m = re.exec(code)) !== null) {
      tokens.push({ start: m.index, end: m.index + m[0].length, cls, text: m[0] })
    }
  }

  tokens.sort((a, b) => a.start - b.start || b.end - a.end)

  const result: string[] = []
  let pos = 0
  const used = new Uint8Array(code.length)

  for (const t of tokens) {
    let overlap = false
    for (let i = t.start; i < t.end; i++) {
      if (used[i]) { overlap = true; break }
    }
    if (overlap) continue
    for (let i = t.start; i < t.end; i++) used[i] = 1

    if (t.start > pos) result.push(esc(code.slice(pos, t.start)))
    result.push(`<span class="${t.cls}">${esc(t.text)}</span>`)
    pos = t.end
  }

  if (pos < code.length) result.push(esc(code.slice(pos)))
  return result.join('')
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function Code({ lang, children }: CodeProps) {
  const trimmed = children.trim()
  const lines = trimmed.split('\n')

  return (
    <div className={styles.block}>
      {lang && (
        <span className={`${styles.label} ${lang === 'ts' ? styles.ts : styles.rs}`}>
          {lang === 'ts' ? 'TypeScript' : 'Rust'}
        </span>
      )}
      <pre className={styles.pre}>
        {lines.map((line, i) => (
          <span
            key={i}
            className={styles.line}
            style={{ '--line-i': i } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: highlight(line) || '\u200b' }}
          />
        ))}
      </pre>
    </div>
  )
}

export function CodePair({ children }: { children: React.ReactNode }) {
  return <div className={styles.pair}>{children}</div>
}
