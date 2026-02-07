import Link from "next/link"
import { posts } from "@/data/posts"

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <ul className="space-y-6">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-2xl font-semibold hover:underline">
              {p.title}
            </Link>
            <p className="text-sm text-gray-400">{p.publishedAt}</p>
            <p className="text-gray-300">{p.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
