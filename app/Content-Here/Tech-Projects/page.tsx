// app/tech-projects/page.tsx
import Link from "next/link"
import { projects } from "../app/data/projects"

export default function TechProjects() {
  const list = projects.filter((p) => p.category === "tech-project")
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Tech Projects</h1>
      <ul className="space-y-6">
        {list.map((p) => (
          <li key={p.id}>
            <Link href={p.href ?? "#"} className="text-2xl font-semibold hover:underline">
              {p.title}
            </Link>
            <p className="text-sm text-gray-400">{p.date}</p>
            <p className="text-gray-300">{p.short}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
