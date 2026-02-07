// app/insights/page.tsx
import { insights } from "../app/data/insights"

export default function InsightsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Insights</h1>
      <p className="text-gray-300 mb-10">
        Short-form notes on strategy, investing, technology, and systems thinking.
      </p>

      <ul className="space-y-6">
        {insights.map((insight) => (
          <li
            key={insight.id}
            className="border-b border-gray-800 pb-4"
          >
            <h2 className="text-2xl font-semibold">{insight.title}</h2>
            <p className="text-sm text-gray-400">{insight.date}</p>
            <p className="text-gray-300 mt-2">{insight.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
