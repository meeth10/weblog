import { insights } from "../app/data/insights"

export default function InsightsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Insights</h1>
      <ul className="space-y-6">
        {insights.map(i => (
          <li key={i.id}>
            <h2 className="text-xl font-semibold">{i.title}</h2>
            <p className="text-sm text-gray-400">{i.date}</p>
            <p className="text-gray-300">{i.note}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
