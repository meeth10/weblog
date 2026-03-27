import fs from "fs"
import path from "path"
export const metadata = { title: "Writing — Shourya" }
type W = { title: string; date: string; excerpt?: string; file: string; tags?: string[] }
function getWriting(): W[] {
  const p = path.join(process.cwd(), "public", "writing", "index.json")
  if (!fs.existsSync(p)) return []
  try { return JSON.parse(fs.readFileSync(p, "utf-8")) } catch { return [] }
}
export default function WritingPage() {
  const pieces = getWriting()
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">My Work</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Writing</h1>
        <p className="text-steel text-sm leading-relaxed">Longer essays, frameworks, and papers I've written. Available as PDFs.</p>
      </header>
      <div className="space-y-2">
        {pieces.map(piece => (
          <div key={piece.file} className="card p-5 flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-[0.92rem] font-semibold text-ink leading-snug">{piece.title}</h2>
                <span className="pdf-badge">PDF</span>
              </div>
              {piece.excerpt && <p className="text-xs text-steel leading-snug">{piece.excerpt}</p>}
              {piece.tags && piece.tags.length > 0 && (
                <div className="flex gap-1.5 pt-0.5 flex-wrap">{piece.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
              )}
            </div>
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <span className="text-xs text-steelSoft">{piece.date}</span>
              <a href={`/writing/${piece.file}`} target="_blank" rel="noopener noreferrer" className="text-xs text-orange hover:underline underline-offset-4 font-medium">Open →</a>
            </div>
          </div>
        ))}
        {pieces.length === 0 && (
          <div className="py-12 text-center space-y-3">
            <p className="text-steel text-sm">No writing published yet.</p>
            <p className="text-steelSoft text-xs">Add PDFs to <code className="text-orange">public/writing/</code> and entries to <code className="text-orange">public/writing/index.json</code></p>
          </div>
        )}
      </div>
      <details className="border border-line p-4 text-xs text-steelSoft">
        <summary className="cursor-pointer hover:text-steel transition-colors font-semibold tracking-wide">How to add writing →</summary>
        <div className="mt-3 space-y-2 leading-relaxed">
          <p>1. Drop your PDF into <code className="text-orange">public/writing/your-file.pdf</code></p>
          <p>2. Add an entry to <code className="text-orange">public/writing/index.json</code></p>
          <pre className="bg-paper border border-line p-3 text-[0.72rem] text-steel overflow-x-auto mt-2">{`{ "title": "Your Title", "date": "2026-03", "excerpt": "One line.", "file": "your-file.pdf", "tags": ["strategy"] }`}</pre>
          <p>3. <code className="text-orange">git add . && git commit -m "add" && git push</code></p>
        </div>
      </details>
    </div>
  )
}
