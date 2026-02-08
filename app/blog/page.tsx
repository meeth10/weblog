import Link from "next/link"
import { getAllPosts } from "./utils"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <h1>Writing</h1>
        <p className="max-w-xl text-gray-600">
          Long-form thinking, analysis, and notes. This is my public notebook.
        </p>
      </header>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h3 className="group-hover:text-accent transition">
                {post.title}
              </h3>
              {post.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {post.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
