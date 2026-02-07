import { notFound } from "next/navigation"
import { posts } from "../../app/data/post"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-16 space-y-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-400">{post.publishedAt}</p>
      <div className="prose prose-invert">
        <p>{post.content}</p>
      </div>
    </article>
  )
}
