// app/page.tsx
import Link from "next/link"
import { projects } from "./app/data/projects"

export default function Home() {
  const pinned = projects.filter((p) => p.category === "pinned")

  return (
    <main className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-4">Portfolio</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        I’m an Electronics & Communication Engineering student who applies engineering rigor to finance,
        strategy, and technology. I break complex systems down and rebuild them with first principles.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pinned Work</h2>
        <ul className="space-y-4">
          {pinned.map((p) => (
            <li key={p.id}>
              <Link href={p.href ?? "#"} className="text-xl font-semibold hover:underline">
                {p.title}
              </Link>
              <div className="text-sm text-gray-400">{p.date}</div>
              <div className="text-gray-300">{p.short}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
