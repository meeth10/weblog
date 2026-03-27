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
