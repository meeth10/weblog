import Link from "next/link";

export default function Insights() {
  const insights = [
    {
      date: "January 15, 2026",
      title: "Ben Thompson on AI Distribution",
      source: "Stratechery Podcast",
      type: "Podcast",
      summary:
        "Key insights on how AI changes distribution economics and why aggregation theory still holds.",
      tags: ["ai", "distribution", "strategy"],
      slug: "ben-thompson-ai-distribution",
    },
    {
      date: "January 8, 2026",
      title: "The Innovator's Dilemma",
      source: "Clayton Christensen",
      type: "Book",
      summary:
        "Why good companies fail: managing sustaining vs disruptive innovation, and when to cannibalize yourself.",
      tags: ["innovation", "disruption", "management"],
      slug: "innovators-dilemma",
    },
    {
      date: "December 20, 2025",
      title: "Jensen Huang on AI Infrastructure",
      source: "NVIDIA GTC Keynote",
      type: "Talk",
      summary:
        "The shift from CPU to GPU paradigm and what it means for the next decade of computing.",
      tags: ["ai", "infrastructure", "semiconductors"],
      slug: "jensen-huang-ai-infrastructure",
    },
    {
      date: "December 10, 2025",
      title: "How to Read a 10-K",
      source: "Invest Like the Best",
      type: "Podcast",
      summary:
        "Framework for extracting signal from financial filings and finding what management isn't saying.",
      tags: ["finance", "analysis", "due-diligence"],
      slug: "reading-10k",
    },
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Insights</h1>
      <p className="text-gray-300 mb-12 leading-relaxed">
        Distilled learnings from talks, books, podcasts, and papers. What I'm
        consuming and how it's shaping my thinking.
      </p>

      <div className="space-y-8">
        {insights.map((insight) => (
          <article key={insight.slug} className="border-b border-gray-800 pb-8">
            <div className="flex items-center gap-4 mb-2">
              <time className="text-sm text-gray-500">{insight.date}</time>
              <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">
                {insight.type}
              </span>
            </div>
            <Link href={`/insights/${insight.slug}`} className="group">
              <h2 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors mb-1">
                {insight.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mb-3">{insight.source}</p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {insight.summary}
            </p>
            <div className="flex gap-2 flex-wrap">
              {insight.tags.map((tag) => (
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