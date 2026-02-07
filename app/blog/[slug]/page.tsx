// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import { posts } from "../../data/posts"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  // simple paragraph splitting; replace later with MDX if you want
  const paragraphs = post.content.split("\n\n").filter(Boolean)

  return (
    <article className="max-w-4xl mx-auto py-16 px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <time className="text-sm text-gray-400 block mt-2">{post.publishedAt}</time>
        <p className="text-gray-300 mt-4">{post.description}</p>
      </header>

      <div className="prose prose-invert max-w-none">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  )
}
