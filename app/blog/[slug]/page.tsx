import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "../utils"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) return notFound()

  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <article className="prose max-w-none">
        {/* Title */}
        <h1>{post.title}</h1>

        {/* Content */}
        {post.content}
      </article>
    </section>
  )
}
