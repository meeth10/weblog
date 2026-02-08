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
    <article className="prose prose-neutral max-w-3xl">
      <h1>{post.title}</h1>
      {post.content}
    </article>
  )
}
