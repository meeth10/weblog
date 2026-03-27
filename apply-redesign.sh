#!/bin/bash
set -e
echo "Applying redesign..."

# ── tailwind.config.js ──────────────────────────────────────────
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:        "#0d0d0d",
        paper:     "#131313",
        ink:       "#edeae4",
        steel:     "#7a7672",
        steelSoft: "#4a4846",
        line:      "#1c1c1c",
        orange:    "#e85d26",
      },
      fontFamily: {
        sans:    ["DM Sans", "sans-serif"],
        display: ["Instrument Serif", "serif"],
        mono:    ["DM Mono", "monospace"],
      },
      maxWidth: { reading: "68ch" },
    },
  },
  plugins: [],
}
EOF

# ── app/global.css ───────────────────────────────────────────────
cat > app/global.css << 'EOF'
@import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=DM+Mono:wght@400;500&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg: #0d0d0d; --paper: #131313; --ink: #edeae4;
    --steel: #7a7672; --steel-soft: #4a4846; --line: #1c1c1c; --orange: #e85d26;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--ink); font-family: "DM Sans", sans-serif; font-size: 0.9375rem; line-height: 1.65; -webkit-font-smoothing: antialiased; }
  ::selection { background: rgba(232,93,38,0.22); color: var(--ink); }
  a { color: inherit; }
}

@layer components {
  .display { font-family: "Instrument Serif", serif; font-size: clamp(2.2rem,4.5vw,3.4rem); line-height: 1.08; letter-spacing: -0.02em; color: var(--ink); }
  .eyebrow { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--orange); }
  .card { background: var(--paper); border: 1px solid var(--line); transition: border-color 0.18s, background 0.18s; }
  .card:hover { border-color: #2a2a2a; background: #161616; }
  .nav-link { position: relative; color: var(--steel); font-size: 0.825rem; font-weight: 500; letter-spacing: 0.01em; transition: color 0.15s; }
  .nav-link::after { content: ""; position: absolute; bottom: -3px; left: 0; height: 1.5px; width: 0; background: var(--orange); transition: width 0.2s; }
  .nav-link:hover, .nav-link.active { color: var(--ink); }
  .nav-link:hover::after, .nav-link.active::after { width: 100%; }
  .tag { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; padding: 0.18rem 0.5rem; border: 1px solid #252525; color: var(--steel-soft); background: transparent; }
  .pdf-badge { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.12rem 0.38rem; background: rgba(232,93,38,0.1); color: var(--orange); border: 1px solid rgba(232,93,38,0.22); }
  .prose-post { color: #b8b4ae; font-size: 1rem; line-height: 1.82; }
  .prose-post h1, .prose-post h2, .prose-post h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.01em; margin-top: 2.2em; margin-bottom: 0.5em; }
  .prose-post h1 { font-size: 1.6rem; }
  .prose-post h2 { font-size: 1.15rem; padding-bottom: 0.4em; border-bottom: 1px solid var(--line); }
  .prose-post h3 { font-size: 1rem; }
  .prose-post p { margin-bottom: 1.15em; }
  .prose-post a { color: var(--orange); text-decoration: underline; text-decoration-color: rgba(232,93,38,0.35); text-underline-offset: 3px; }
  .prose-post blockquote { border-left: 2px solid var(--orange); padding-left: 1.1rem; color: var(--steel); font-style: italic; margin: 1.8em 0; }
  .prose-post code { font-family: "DM Mono", monospace; font-size: 0.85em; background: #1a1a1a; padding: 0.12em 0.38em; color: var(--orange); }
  .prose-post hr { border: none; border-top: 1px solid var(--line); margin: 2.5em 0; }
  .prose-post ul { padding-left: 1.4rem; margin-bottom: 1.2em; }
  .prose-post li { margin-bottom: 0.35em; color: #b8b4ae; }
  .prose-post strong { color: var(--ink); font-weight: 600; }
}
EOF

# ── app/layout.tsx ───────────────────────────────────────────────
cat > app/layout.tsx << 'EOF'
import "./global.css"
import Nav from "./components/nav"
import Footer from "./components/footer"

export const metadata = {
  title: "Shourya Singh Thakur",
  description: "Thinking in systems — strategy, finance, technology, and ideas in motion.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 mx-auto w-full max-w-reading px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
EOF

# ── app/components/nav.tsx ───────────────────────────────────────
cat > app/components/nav.tsx << 'EOF'
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/",                  label: "Home"     },
  { href: "/about",             label: "About"    },
  { href: "/insights",          label: "Insights" },
  { href: "/business-analysis", label: "Analysis" },
  { href: "/writing",           label: "Writing"  },
  { href: "/reading",           label: "Reading"  },
  { href: "/currently-brewing", label: "Now"      },
]

export default function Nav() {
  const path = usePathname()
  return (
    <header className="border-b border-line sticky top-0 z-50 bg-bg/[0.97] backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-[0.9rem] font-semibold tracking-tight text-ink leading-none">
          Shourya Singh Thakur<span className="text-orange">.</span>
        </Link>
        <nav className="hidden sm:flex gap-6">
          {links.map(({ href, label }) => {
            const active = href === "/" ? path === "/" : path.startsWith(href)
            return <Link key={href} href={href} className={`nav-link ${active ? "active" : ""}`}>{label}</Link>
          })}
        </nav>
        <nav className="flex sm:hidden gap-5 overflow-x-auto max-w-[70vw]">
          {links.map(({ href, label }) => {
            const active = href === "/" ? path === "/" : path.startsWith(href)
            return <Link key={href} href={href} className={`nav-link whitespace-nowrap ${active ? "active" : ""}`}>{label}</Link>
          })}
        </nav>
      </div>
    </header>
  )
}
EOF

# ── app/components/footer.tsx ────────────────────────────────────
cat > app/components/footer.tsx << 'EOF'
export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="mx-auto max-w-reading px-6 py-7 text-xs text-steelSoft flex items-center justify-between">
        <span>© 2026 — Shourya Singh Thakur</span>
        <div className="flex gap-5">
          <a href="mailto:shouryast.1004@gmail.com" className="hover:text-orange transition-colors">Email</a>
          <a href="https://github.com/meeth10" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/shourya-singh-197043289/" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
EOF

# ── app/page.tsx ─────────────────────────────────────────────────
cat > app/page.tsx << 'EOF'
import Link from "next/link"
import { getAllPosts } from "./blog/utils"

export default function Home() {
  const recent = getAllPosts()
    .filter(p => p.tags?.includes("insight") || p.tags?.includes("analysis"))
    .slice(0, 4)
  return (
    <div className="space-y-16 py-4">
      <section className="space-y-5 pt-2">
        <span className="eyebrow">Portfolio</span>
        <h1 className="display">Strategy, finance,<br /><span className="italic text-orange">and systems thinking.</span></h1>
        <p className="text-steel max-w-prose leading-relaxed">Structured analysis on markets, technology, and business strategy. Interested in how systems break — and what that reveals.</p>
        <div className="flex gap-6 pt-1 text-sm">
          <Link href="/insights" className="text-orange hover:underline underline-offset-4">Read insights →</Link>
          <Link href="/business-analysis" className="text-steel hover:text-ink transition-colors">See analysis →</Link>
        </div>
      </section>
      <div className="h-px bg-line" />
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <span className="eyebrow">Recent</span>
          <Link href="/insights" className="text-xs text-steelSoft hover:text-orange transition-colors">All →</Link>
        </div>
        <div className="space-y-2">
          {recent.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card flex items-start justify-between gap-4 p-4 group block">
              <div className="min-w-0 flex-1 space-y-0.5">
                <p className="text-[0.92rem] font-medium text-ink group-hover:text-orange transition-colors leading-snug">{post.title}</p>
                {post.description && <p className="text-xs text-steel leading-snug line-clamp-1">{post.description}</p>}
              </div>
              <span className="text-xs text-steelSoft whitespace-nowrap pt-0.5 flex-shrink-0">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US",{month:"short",year:"numeric"}) : ""}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-2 gap-3">
        {[
          { href: "/writing",           label: "Writing",       desc: "Essays & PDFs I've written" },
          { href: "/reading",           label: "Reading Notes", desc: "Summaries of what I've read" },
          { href: "/business-analysis", label: "Analysis",      desc: "Deep-dives on companies & industries" },
          { href: "/currently-brewing", label: "Now",           desc: "What I'm thinking about" },
        ].map(({ href, label, desc }) => (
          <Link key={href} href={href} className="card p-4 space-y-0.5 group">
            <p className="text-sm font-semibold text-ink group-hover:text-orange transition-colors">{label} →</p>
            <p className="text-xs text-steel">{desc}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}
EOF

# ── app/insights/page.tsx ────────────────────────────────────────
cat > app/insights/page.tsx << 'EOF'
import Link from "next/link"
import { getAllPosts } from "../blog/utils"
export const metadata = { title: "Insights — Shourya" }
export default function InsightsPage() {
  const posts = getAllPosts().filter(p => p.tags?.includes("insight"))
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">Writing</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Insights</h1>
        <p className="text-steel text-sm leading-relaxed">Short ideas, mental models, and observations.</p>
      </header>
      <div className="space-y-2">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card flex items-start justify-between gap-4 p-5 group block">
            <div className="min-w-0 flex-1 space-y-1.5">
              <h2 className="text-[0.92rem] font-semibold text-ink group-hover:text-orange transition-colors leading-snug">{post.title}</h2>
              {post.description && <p className="text-xs text-steel leading-snug line-clamp-2">{post.description}</p>}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-1.5 pt-0.5 flex-wrap">{post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
              )}
            </div>
            <span className="text-xs text-steelSoft whitespace-nowrap pt-0.5 flex-shrink-0">
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US",{month:"short",year:"numeric"}) : ""}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
EOF

# ── app/business-analysis/page.tsx ──────────────────────────────
cat > app/business-analysis/page.tsx << 'EOF'
import Link from "next/link"
import { getAllPosts } from "../blog/utils"
export const metadata = { title: "Analysis — Shourya" }
export default function AnalysisPage() {
  const posts = getAllPosts().filter(p => p.tags?.includes("analysis"))
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">Deep Dives</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Analysis</h1>
        <p className="text-steel text-sm leading-relaxed">Structured breakdowns of companies, industries, and business models.</p>
      </header>
      <div className="space-y-2">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card flex items-start justify-between gap-4 p-5 group block">
            <div className="min-w-0 flex-1 space-y-1.5">
              <h2 className="text-[0.92rem] font-semibold text-ink group-hover:text-orange transition-colors leading-snug">{post.title}</h2>
              {post.description && <p className="text-xs text-steel leading-snug line-clamp-2">{post.description}</p>}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-1.5 pt-0.5 flex-wrap">{post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
              )}
            </div>
            <span className="text-xs text-steelSoft whitespace-nowrap pt-0.5 flex-shrink-0">
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US",{month:"short",year:"numeric"}) : ""}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
EOF

# ── app/blog/[slug]/page.tsx ─────────────────────────────────────
cat > app/blog/\[slug\]/page.tsx << 'EOF'
import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "../utils"

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return { title: post ? `${post.title} — Shourya` : "Not found" }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return notFound()
  const isAnalysis = post.tags?.includes("analysis")
  return (
    <article className="py-4 space-y-8 max-w-reading">
      <Link href={isAnalysis ? "/business-analysis" : "/insights"} className="text-xs text-steelSoft hover:text-orange transition-colors">
        ← {isAnalysis ? "Analysis" : "Insights"}
      </Link>
      <header className="space-y-3 pb-6 border-b border-line">
        <h1 className="text-[1.5rem] font-semibold tracking-tight text-ink leading-snug">{post.title}</h1>
        <div className="flex items-center gap-3 flex-wrap">
          {post.publishedAt && <span className="text-xs text-steelSoft">{new Date(post.publishedAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</span>}
          {post.tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </header>
      <div className="prose-post">{post.content}</div>
    </article>
  )
}
EOF

# ── app/blog/page.tsx ────────────────────────────────────────────
cat > app/blog/page.tsx << 'EOF'
import Link from "next/link"
import { getAllPosts } from "./utils"
export const metadata = { title: "Writing — Shourya" }
export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">All Posts</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Writing</h1>
      </header>
      <div className="space-y-2">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card flex items-start justify-between gap-4 p-5 group block">
            <div className="min-w-0 flex-1 space-y-1">
              <h2 className="text-[0.92rem] font-semibold text-ink group-hover:text-orange transition-colors leading-snug">{post.title}</h2>
              {post.description && <p className="text-xs text-steel line-clamp-1">{post.description}</p>}
            </div>
            <span className="text-xs text-steelSoft whitespace-nowrap pt-0.5 flex-shrink-0">
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US",{month:"short",year:"numeric"}) : ""}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
EOF

# ── app/about/page.tsx ───────────────────────────────────────────
cat > app/about/page.tsx << 'EOF'
export const metadata = { title: "About — Shourya" }
export default function About() {
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">About</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Shourya Singh Thakur</h1>
      </header>
      <div className="space-y-5 max-w-prose text-steel text-[0.92rem] leading-relaxed">
        <p>I think about markets, technology, and how systems — economic, organizational, technological — actually work versus how they're supposed to work.</p>
        <p>This site is where I publish structured thinking: analysis of companies and industries, shorter ideas and mental models, and summaries of things I've read. It's partly for me, partly for anyone who finds it useful.</p>
        <p>I'm interested in capital allocation, competitive dynamics, and the intersection of technology and geopolitics. I build analytical tools when I can't find one that does what I need.</p>
        <div className="h-px bg-line my-6" />
        <p className="text-xs text-steelSoft">Get in touch: <a href="mailto:shouryast.1004@gmail.com" className="text-orange hover:underline underline-offset-4">shouryast.1004@gmail.com</a></p>
      </div>
    </div>
  )
}
EOF

# ── app/currently-brewing/page.tsx ──────────────────────────────
cat > app/currently-brewing/page.tsx << 'EOF'
export const metadata = { title: "Now — Shourya" }
export default function Now() {
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">March 2026</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Now</h1>
        <p className="text-steel text-sm">What I'm working on and thinking about.</p>
      </header>
      <div className="space-y-8 max-w-prose">
        {[
          { label: "Reading", items: ["The Alchemy of Air — Thomas Hager", "Damodaran's valuation lecture series"] },
          { label: "Building", items: ["LBO stress-testing engine (scenario-based)", "Industry X-Ray series: semiconductors → energy → pharma"] },
          { label: "Thinking about", items: ["Whether DeepSeek changes the semiconductor thesis", "Reinvestment rates as the primary moat signal", "Why most strategy writing is just retrospective history"] },
        ].map(({ label, items }) => (
          <section key={label} className="space-y-2">
            <span className="eyebrow">{label}</span>
            <ul className="space-y-1.5 pt-1">
              {items.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-steel">
                  <span className="text-orange mt-0.5 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="text-xs text-steelSoft pt-2">Last updated March 2026.</p>
    </div>
  )
}
EOF

# ── app/writing/page.tsx (NEW) ───────────────────────────────────
mkdir -p app/writing
cat > app/writing/page.tsx << 'EOF'
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
EOF

# ── app/reading/page.tsx (NEW) ───────────────────────────────────
mkdir -p app/reading
cat > app/reading/page.tsx << 'EOF'
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
EOF

# ── public JSON stubs ────────────────────────────────────────────
mkdir -p public/writing public/reading

cat > public/writing/index.json << 'EOF'
[]
EOF

cat > public/reading/index.json << 'EOF'
[]
EOF

# ── Remove dead pages ────────────────────────────────────────────
rm -rf app/tech-projects app/write
rm -f app/components/ThinkingButton.tsx app/components/ThinkingLayer.tsx
rm -f app/components/WritingList.tsx app/components/posts.tsx
rm -f app/data/projects.ts

echo ""
echo "✅ Done! Now run:"
echo "   git add -A && git commit -m 'Redesign: dark theme, Writing + Reading sections' && git push"
