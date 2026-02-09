import Link from "next/link"

export default function WritingList({ posts }: { posts: any[] }) {
  if (posts.length === 0) {
    return <p className="text-gray-500">Nothing here yet.</p>
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block group border-b pb-4"
        >
          <h2 className="text-xl font-medium group-hover:text-orange-500 transition">
            {post.title}
          </h2>

          {post.tags?.length ? (
            <div className="mt-2 flex gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </Link>
      ))}
    </div>
  )
}
