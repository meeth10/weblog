import { notFound } from "next/navigation"
import { posts } from "./app/data/posts"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-400">{post.publishedAt}</p>
      <p className="mt-6 text-gray-300">{post.content}</p>
    </article>
  )
}
