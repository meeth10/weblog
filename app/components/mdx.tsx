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
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
