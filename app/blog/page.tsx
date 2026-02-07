import Link from "next/link"
import { posts } from "../app/data/posts"

export default function BlogPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 space-y-10">
      <h1 className="text-4xl font-bold">Writing</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400">{post.publishedAt}</p>
              <p className="text-gray-300">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
