import fs from "fs"
import path from "path"
export const metadata = { title: "Reading — Shourya" }
type R = { title: string; author: string; date: string; file: string; summary: string; tags?: string[]; rating?: number }
function getReading(): R[] {
  const p = path.join(process.cwd(), "public", "reading", "index.json")
  if (!fs.existsSync(p)) return []
  try { return JSON.parse(fs.readFileSync(p, "utf-8")) } catch { return [] }
}
function Stars({ n }: { n?: number }) {
  if (!n) return null
  return <span className="text-[0.65rem] tracking-widest text-steelSoft">{"★".repeat(n)}{"☆".repeat(5-n)}</span>
}
export default function ReadingPage() {
  const books = getReading()
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">Library</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Reading Notes</h1>
        <p className="text-steel text-sm leading-relaxed">Summaries and key takeaways from books and papers I've read. The PDFs are my own notes — not the originals.</p>
      </header>
      <div className="space-y-3">
        {books.map(book => (
          <div key={book.file} className="card p-5 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-[0.92rem] font-semibold text-ink leading-snug">{book.title}</h2>
                  <span className="pdf-badge">Notes</span>
                </div>
                <p className="text-[0.75rem] text-steelSoft">{book.author}</p>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-xs text-steelSoft">{book.date}</span>
                <Stars n={book.rating} />
              </div>
            </div>
            <p className="text-[0.83rem] text-steel leading-relaxed border-l-2 border-line pl-3">{book.summary}</p>
            <div className="flex items-center justify-between pt-0.5">
              <div className="flex gap-1.5 flex-wrap">{book.tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
              <a href={`/reading/${book.file}`} target="_blank" rel="noopener noreferrer" className="text-xs text-orange hover:underline underline-offset-4 font-medium">My notes →</a>
            </div>
          </div>
        ))}
        {books.length === 0 && (
          <div className="py-12 text-center space-y-3">
            <p className="text-steel text-sm">No reading notes yet.</p>
            <p className="text-steelSoft text-xs">Add entries to <code className="text-orange">public/reading/index.json</code></p>
          </div>
        )}
      </div>
      <details className="border border-line p-4 text-xs text-steelSoft">
        <summary className="cursor-pointer hover:text-steel transition-colors font-semibold tracking-wide">How to add reading notes →</summary>
        <div className="mt-3 space-y-2 leading-relaxed">
          <p>1. Write notes as PDF → <code className="text-orange">public/reading/book-notes.pdf</code></p>
          <p>2. Add to <code className="text-orange">public/reading/index.json</code>:</p>
          <pre className="bg-paper border border-line p-3 text-[0.72rem] text-steel overflow-x-auto mt-2">{`{ "title": "Book", "author": "Author", "date": "2026-03", "file": "book-notes.pdf", "summary": "Takeaway.", "tags": ["strategy"], "rating": 5 }`}</pre>
          <p>3. <code className="text-orange">git add . && git commit -m "reading" && git push</code></p>
        </div>
      </details>
    </div>
  )
}
