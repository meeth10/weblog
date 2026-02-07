import Link from "next/link";
import { getBlogPosts } from "../blog/utils";

export default function BusinessAnalysis() {
  const allPosts = getBlogPosts();
  
  // Filter for business analysis posts (Amazon, Semiconductor, etc.)
  const businessPosts = allPosts.filter((post) => 
    post.metadata.category === "Business Analysis" ||
    post.metadata.title.includes("Amazon") ||
    post.metadata.title.includes("Semiconductor")
  );

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Business Analysis</h1>
      <p className="text-gray-400 mb-16 leading-relaxed">
        Deep dives into companies, industries, and market dynamics.
      </p>

      <div className="space-y-6">
        {businessPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
              <h2 className="text-lg text-white group-hover:text-blue-400 transition-colors">
                {post.metadata.title}
              </h2>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {post.metadata.publishedAt}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}