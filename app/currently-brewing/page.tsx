import { projects } from "../data/projects"

export default function CurrentlyBrewing() {
  const list = projects.filter(p => p.category === "brewing")

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-12">
      
      {/* PAGE HEADER */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Currently Brewing</h1>
        <p className="text-gray-400 max-w-2xl">
          Ongoing work, open questions, and ideas I’m actively exploring.
        </p>
      </header>

      {/* CONTENT */}
      <div className="space-y-6">
        {list.map(p => (
          <div key={p.id} className="border-l-2 border-gray-700 pl-4">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-400">{p.summary}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
