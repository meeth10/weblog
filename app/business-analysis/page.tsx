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
