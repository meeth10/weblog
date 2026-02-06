import Link from "next/link";

export default function Insights() {
  const insights = [
    {
      date: "January 15, 2026",
      title: "Ben Thompson on AI Distribution",
      source: "Stratechery Podcast",
      slug: "ben-thompson-ai-distribution",
    },
    {
      date: "January 8, 2026",
      title: "The Innovator's Dilemma",
      source: "Clayton Christensen",
      slug: "innovators-dilemma",
    },
    {
      date: "December 20, 2025",
      title: "Jensen Huang on AI Infrastructure",
      source: "NVIDIA GTC Keynote",
      slug: "jensen-huang-ai-infrastructure",
    },
    {
      date: "December 10, 2025",
      title: "How to Read a 10-K",
      source: "Invest Like the Best",
      slug: "reading-10k",
    },
  ];

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Insights</h1>
      <p className="text-gray-400 mb-16 leading-relaxed">
        Notes from talks, books, and podcasts.
      </p>

      <div className="space-y-8">
        {insights.map((insight) => (
          <div key={insight.slug}>
            <div className="flex justify-between items-baseline mb-1">
              <h2 className="text-lg text-white">{insight.title}</h2>
              <span className="text-sm text-gray-500 ml-4">{insight.date}</span>
            </div>
            <p className="text-sm text-gray-500">{insight.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}