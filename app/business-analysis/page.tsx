import Link from "next/link";

export default function BusinessAnalysis() {
  const analyses = [
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
  ];

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Business Analysis</h1>
      <p className="text-gray-400 mb-16 leading-relaxed">
        Deep dives into companies, industries, and market dynamics.
      </p>

      <div className="space-y-8">
        {analyses.map((analysis) => (
          <Link
            key={analysis.slug}
            href={`/blog/${analysis.slug}`}
            className="block group"
          >
            <div className="flex justify-between items-baseline mb-1">
              <h2 className="text-lg text-white group-hover:text-blue-400 transition-colors">
                {analysis.title}
              </h2>
              <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">{analysis.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}