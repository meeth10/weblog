import { insights } from "../data/insights"

export default function InsightsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Insights</h1>
      <ul className="space-y-4">
        {insights.map(i => (
          <li key={i.id}>
            <strong>{i.title}</strong> — {i.note}
          </li>
        ))}
      </ul>
    </main>
  )
}
