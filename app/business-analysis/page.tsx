import Link from "next/link";

export default function BusinessAnalysis() {
  const analyses = [
    {
      date: "October 3, 2025",
      title: "Industry X-Ray: Semiconductor Case Study",
      slug: "semiconductor-case-study",
      tags: ["semiconductors", "industry-analysis", "strategy"],
    },
    {
      date: "September 28, 2025",
      title: "Amazon Prime: Value Adder",
      slug: "amazon-prime-value",
      tags: ["amazon", "business-model", "moats"],
    },
    {
      date: "September 22, 2025",
      title: "Amazon Supply: The Next Cash Cow a segment",
      slug: "amazon-supply-analysis",
      tags: ["amazon", "b2b", "market-expansion"],
    },
    {
      date: "September 19, 2025",
      title: "Amazon Pharmacy a segment driven analysis",
      slug: "amazon-pharmacy",
      tags: ["amazon", "healthcare", "disruption"],
    },
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Business Analysis</h1>
      <p className="text-gray-300 mb-12 leading-relaxed">
        Deep dives into companies, industries, and market dynamics. I break down
        complex businesses, design valuation models, and analyze strategic moves
        through multiple lenses—combining technical understanding with market
        perspective.
      </p>

      <div className="space-y-8">
        {analyses.map((analysis) => (
          <article key={analysis.slug} className="border-b border-gray-800 pb-8">
            <time className="text-sm text-gray-500 block mb-2">
              {analysis.date}
            </time>
            <Link
              href={`/business-analysis/${analysis.slug}`}
              className="group"
            >
              <h2 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors mb-3">
                {analysis.title}
              </h2>
            </Link>
            <div className="flex gap-2 flex-wrap">
              {analysis.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}