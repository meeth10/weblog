import Link from "next/link";
import { getAllPosts } from "../blog/utils";

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block group"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
            <h2 className="text-lg text-white group-hover:text-blue-400 transition-colors">
              {post.metadata.title}
            </h2>
            <time className="text-sm text-gray-500 whitespace-nowrap">
              {post.metadata.publishedAt}
            </time>
          </div>
        </Link>
      ))}
    </div>
  );
}