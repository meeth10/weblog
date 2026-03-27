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
