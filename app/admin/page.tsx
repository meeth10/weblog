"use client"
import { useState, useRef, useCallback, FormEvent } from "react"

type Section = "writing" | "reading"
type Status = "idle" | "uploading" | "success" | "error"

export default function AdminPage() {
  // ── Auth ───────────────────────────────────────────────────
  const [authed, setAuthed]     = useState(false)
  const [pw, setPw]             = useState("")
  const [pwError, setPwError]   = useState(false)
  const passwordRef             = useRef("")

  function handleLogin(e: FormEvent) {
    e.preventDefault()
    passwordRef.current = pw
    // We'll verify against the server on first publish;
    // for UX just gate the UI client-side too.
    if (pw.length < 1) { setPwError(true); return }
    setAuthed(true)
  }

  // ── Form state ─────────────────────────────────────────────
  const [section, setSection]   = useState<Section>("writing")
  const [pdfFile, setPdfFile]   = useState<File | null>(null)
  const [dragging, setDragging] = useState(false)
  const [title, setTitle]       = useState("")
  const [excerpt, setExcerpt]   = useState("")   // writing
  const [summary, setSummary]   = useState("")   // reading
  const [author, setAuthor]     = useState("")   // reading
  const [tags, setTags]         = useState("")
  const [rating, setRating]     = useState(5)
  const [date, setDate]         = useState(() => {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`
  })
  const [status, setStatus]     = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const fileInputRef            = useRef<HTMLInputElement>(null)

  // ── Drag-drop ──────────────────────────────────────────────
  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragging(false)
    const f = e.dataTransfer.files[0]
    if (f?.type === "application/pdf") setPdfFile(f)
  }, [])

  // ── Submit ─────────────────────────────────────────────────
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!pdfFile) return
    setStatus("uploading")
    setErrorMsg("")

    try {
      // Convert PDF to base64
      const pdfBase64: string = await new Promise((res, rej) => {
        const reader = new FileReader()
        reader.onload = () => {
          const result = (reader.result as string).split(",")[1]
          res(result)
        }
        reader.onerror = rej
        reader.readAsDataURL(pdfFile)
      })

      const filename = pdfFile.name.replace(/\s+/g, "-").toLowerCase()

      const meta =
        section === "writing"
          ? { title, excerpt, tags: tags.split(",").map(t=>t.trim()).filter(Boolean), date }
          : { title, author, summary, tags: tags.split(",").map(t=>t.trim()).filter(Boolean), date, rating }

      const res = await fetch("/api/admin-publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": passwordRef.current,
        },
        body: JSON.stringify({ type: section, pdfBase64, pdfFilename: filename, meta }),
      })

      if (res.status === 401) { setStatus("error"); setErrorMsg("Wrong password — log out and try again."); return }
      if (!res.ok) { setStatus("error"); setErrorMsg(await res.text()); return }

      setStatus("success")
      // Reset form
      setPdfFile(null); setTitle(""); setExcerpt(""); setSummary(""); setAuthor(""); setTags("")
    } catch (err) {
      setStatus("error")
      setErrorMsg(String(err))
    }
  }

  // ── Login screen ───────────────────────────────────────────
  if (!authed) return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <div className="space-y-1">
          <span className="eyebrow">Admin</span>
          <h1 className="text-xl font-semibold text-ink">Sign in</h1>
        </div>
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={e => { setPw(e.target.value); setPwError(false) }}
          className="w-full bg-paper border border-line px-4 py-2.5 text-sm text-ink placeholder:text-steelSoft outline-none focus:border-orange transition-colors"
          autoFocus
        />
        {pwError && <p className="text-xs text-orange">Enter a password</p>}
        <button type="submit" className="w-full bg-orange text-white text-sm font-semibold py-2.5 hover:bg-orange/90 transition-colors">
          Enter
        </button>
      </form>
    </div>
  )

  // ── Main admin UI ──────────────────────────────────────────
  return (
    <div className="space-y-8 py-4 max-w-reading">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <span className="eyebrow">Admin</span>
          <h1 className="text-[1.4rem] font-semibold text-ink">Publish</h1>
        </div>
        <button onClick={() => { setAuthed(false); setPw(""); passwordRef.current = "" }}
          className="text-xs text-steelSoft hover:text-orange transition-colors">
          Sign out
        </button>
      </header>

      {/* Section toggle */}
      <div className="flex gap-2">
        {(["writing","reading"] as Section[]).map(s => (
          <button key={s} onClick={() => { setSection(s); setStatus("idle") }}
            className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-colors border ${
              section === s ? "border-orange text-orange bg-orange/10" : "border-line text-steelSoft hover:border-steel"
            }`}>
            {s === "writing" ? "Writing" : "Reading Notes"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* PDF drop zone */}
        <div
          onDragOver={e => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-sm p-10 text-center cursor-pointer transition-colors ${
            dragging ? "border-orange bg-orange/5" :
            pdfFile  ? "border-orange/50 bg-orange/5" : "border-line hover:border-steel"
          }`}
        >
          <input ref={fileInputRef} type="file" accept=".pdf,application/pdf"
            className="hidden" onChange={e => { if (e.target.files?.[0]) setPdfFile(e.target.files[0]) }} />
          {pdfFile ? (
            <div className="space-y-1">
              <p className="text-sm font-semibold text-orange">{pdfFile.name}</p>
              <p className="text-xs text-steelSoft">{(pdfFile.size / 1024).toFixed(0)} KB — click to change</p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-sm text-steel">Drag & drop a PDF here</p>
              <p className="text-xs text-steelSoft">or click to browse</p>
            </div>
          )}
        </div>

        {/* Fields */}
        <Field label="Title" required>
          <input value={title} onChange={e=>setTitle(e.target.value)} required
            placeholder="e.g. My Essay on Capital Allocation"
            className="input" />
        </Field>

        {section === "reading" && (
          <Field label="Author" required>
            <input value={author} onChange={e=>setAuthor(e.target.value)} required
              placeholder="e.g. Hamilton Helmer"
              className="input" />
          </Field>
        )}

        {section === "writing" ? (
          <Field label="Excerpt">
            <textarea value={excerpt} onChange={e=>setExcerpt(e.target.value)} rows={2}
              placeholder="One sentence summary shown on the writing page"
              className="input resize-none" />
          </Field>
        ) : (
          <Field label="Summary (shown inline on site)" required>
            <textarea value={summary} onChange={e=>setSummary(e.target.value)} rows={3} required
              placeholder="2–3 sentence takeaway. What's the main idea?"
              className="input resize-none" />
          </Field>
        )}

        <div className="grid grid-cols-2 gap-4">
          <Field label="Date (YYYY-MM)">
            <input value={date} onChange={e=>setDate(e.target.value)}
              placeholder="2026-03" className="input" />
          </Field>
          <Field label="Tags (comma separated)">
            <input value={tags} onChange={e=>setTags(e.target.value)}
              placeholder="strategy, finance" className="input" />
          </Field>
        </div>

        {section === "reading" && (
          <Field label="Rating">
            <div className="flex gap-2 pt-1">
              {[1,2,3,4,5].map(n => (
                <button key={n} type="button" onClick={() => setRating(n)}
                  className={`text-lg transition-colors ${n <= rating ? "text-orange" : "text-steelSoft"}`}>
                  ★
                </button>
              ))}
            </div>
          </Field>
        )}

        {/* Status messages */}
        {status === "success" && (
          <div className="bg-orange/10 border border-orange/30 px-4 py-3 text-sm text-orange space-y-0.5">
            <p className="font-semibold">Published! ✓</p>
            <p className="text-xs text-orange/70">Vercel is deploying — live in ~30 seconds.</p>
          </div>
        )}
        {status === "error" && (
          <div className="bg-red-900/20 border border-red-800/40 px-4 py-3 text-sm text-red-400 space-y-1">
            <p className="font-semibold">Error</p>
            <p className="text-xs break-all">{errorMsg}</p>
          </div>
        )}

        <button type="submit" disabled={!pdfFile || !title || status === "uploading"}
          className="w-full bg-orange text-white text-sm font-bold tracking-wide py-3 hover:bg-orange/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
          {status === "uploading" ? "Publishing…" : `Publish to ${section === "writing" ? "Writing" : "Reading Notes"}`}
        </button>
      </form>

      <details className="border border-line p-4 text-xs text-steelSoft">
        <summary className="cursor-pointer hover:text-steel transition-colors font-semibold tracking-wide">
          First-time setup →
        </summary>
        <div className="mt-3 space-y-2 leading-relaxed">
          <p>Add these to your Vercel project environment variables:</p>
          <pre className="bg-paper border border-line p-3 text-[0.72rem] text-steel overflow-x-auto">{`GITHUB_TOKEN    = ghp_your_token_here
GITHUB_REPO     = meeth10/weblog
GITHUB_BRANCH   = main
ADMIN_PASSWORD  = your_secret_password`}</pre>
          <p>Get a GitHub token at <span className="text-orange">github.com/settings/tokens</span> — needs <span className="text-orange">repo</span> scope.</p>
          <p>Set env vars at <span className="text-orange">vercel.com → your project → Settings → Environment Variables</span></p>
        </div>
      </details>
    </div>
  )
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-steelSoft uppercase tracking-widest">
        {label}{required && <span className="text-orange ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
