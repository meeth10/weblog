import Link from "next/link";

export default function Posts() {
  const posts = [
    {
      date: "October 3, 2025",
      title: "Industry X-Ray: Semiconductor Case Study",
      slug: "semiconductor-case-study",
    },
    {
      date: "September 28, 2025",
      title: "Amazon Prime: Value Adder",
      slug: "amazon-prime-value",
    },
    {
      date: "September 22, 2025",
      title: "Amazon Supply: The Next Cash Cow a segment",
      slug: "amazon-supply",
    },
    {
      date: "September 19, 2025",
      title: "Amazon Pharmacy a segment driven analysis",
      slug: "amazon-pharmacy",
    },
    {
      date: "September 8, 2025",
      title: "How Network Effects Work",
      slug: "network-effects",
    },
    {
      date: "September 8, 2025",
      title: "The Hidden Glue: How Switching Costs Work",
      slug: "switching-costs",
    },
    {
      date: "September 1, 2025",
      title: "Comparable Company Analysis: Apples, Oranges, and Rotten Fruit",
      slug: "comparable-company-analysis",
    },
    {
      date: "August 27, 2025",
      title: "Sizing the Prize: TAM, SAM, and SOM Made Simple",
      slug: "tam-sam-som",
    },
    {
      date: "August 2025",
      title: "My take on strategy",
      slug: "strategy",
    },
  ];

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
              {post.title}
            </h2>
            <time className="text-sm text-gray-500 whitespace-nowrap">{post.date}</time>
          </div>
        </Link>
      ))}
    </div>
  );
}