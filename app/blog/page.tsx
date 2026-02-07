// app/blog/page.tsx
import Link from "next/link"
import { posts } from "../data/posts"

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-800 pb-4">
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-2xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-400">{post.publishedAt}</p>
            <p className="text-gray-300 mt-2">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
