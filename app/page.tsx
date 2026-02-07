import { projects } from "./data/projects"

export default function Home() {
  return (
    <main className="py-20">
      <h1 className="text-5xl font-bold mb-6">Portfolio</h1>
      <p className="text-gray-300 max-w-2xl mb-10">
        I apply engineering rigor to finance, strategy, and technology.
      </p>

      <ul className="space-y-3">
        {projects.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </main>
  )
}
