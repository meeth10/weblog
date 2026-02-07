import Link from "next/link";
import { getBlogPosts } from "./blog/utils";

export default function Home() {
  const allPosts = getBlogPosts();
  const recentPosts = allPosts.slice(0, 3); // Get first 3 posts

  return (
    <div className="max-w-2xl">
      {/* About Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I am an Electronics & Communication Engineering student driven by
          curiosity that extends far beyond engineering. While I build and
          analyze systems in ECE, I actively apply the same rigor to finance,
          consulting, and strategy, where I break down complex industries,
          design valuation models, and test ideas through multiple lenses.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          What excites me is not just solving problems, but reframing them —
          connecting insights across technology, markets, and strategy to
          uncover opportunities others miss.
        </p>
      </section>

      {/* Recent Work */}
      <section>
        <h2 className="text-xl font-semibold mb-6 text-gray-400">
          Recent Work
        </h2>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
                <h3 className="text-lg text-white group-hover:text-blue-400 transition-colors">
                  {post.metadata.title}
                </h3>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {post.metadata.publishedAt}
                </span>
              </div>
              {post.metadata.category && (
                <p className="text-gray-500 text-sm mt-1">{post.metadata.category}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}