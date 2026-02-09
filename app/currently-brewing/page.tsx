import { projects } from "../data/projects"

export default function CurrentlyBrewing() {
  const list = projects.filter(
    (p) => p.category === "brewing" && p.status === "active"
  )

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 space-y-14">
      {/* PAGE HEADER */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Currently Brewing</h1>
        <p className="text-gray-500 max-w-2xl">
          Ongoing work, open questions, and things I’m actively building or
          thinking through.
        </p>
      </header>

      {/* PROJECTS */}
      <div className="space-y-10">
        {list.map((p) => (
          <div
            key={p.id}
            className="border-l-2 border-orange-500/40 pl-6 space-y-2"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold">{p.title}</h2>

              {p.deadline && (
                <span className="text-sm text-gray-500">
                  Target: {p.deadline}
                </span>
              )}
            </div>

            <p className="text-gray-500 max-w-2xl">
              {p.summary}
            </p>

            {p.subtasks?.length ? (
              <ul className="mt-3 list-disc pl-5 text-gray-500 space-y-1">
                {p.subtasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}

        {list.length === 0 && (
          <p className="text-gray-400 italic">
            Nothing actively brewing right now.
          </p>
        )}
      </div>
    </section>
  )
}
