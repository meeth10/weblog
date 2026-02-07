import { notFound } from "next/navigation"
import { posts } from "../../data/posts"

export default function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-16 space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <time className="text-sm text-gray-400">
          {post.publishedAt}
        </time>
      </header>

      <div className="prose prose-invert max-w-none">
        {post.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </article>
  )
}
