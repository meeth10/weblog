import { projects } from "@/data/projects"

export default function Brewing() {
  const list = projects.filter(p => p.category === "brewing")
  return (
    <main className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Currently Brewing</h1>
      {list.map(p => <p key={p.id}>{p.title}</p>)}
    </main>
  )
}
