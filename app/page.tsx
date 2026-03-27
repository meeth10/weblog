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
