import { projects } from "@/data/projects"

export default function BusinessAnalysis() {
  const list = projects.filter(p => p.category === "analysis")
  return (
    <main className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Business Analysis</h1>
      {list.map(p => <p key={p.id}>{p.title}</p>)}
    </main>
  )
}
