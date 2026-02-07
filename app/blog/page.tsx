import Link from "next/link"
import { posts } from "../data/posts"

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 space-y-10">
      <h1 className="text-4xl font-bold">My Blog</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-400">{post.publishedAt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
