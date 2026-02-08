import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-24">
      {/* HERO */}
      <header className="relative space-y-8 rounded-2xl bg-sand px-10 py-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-200 opacity-40 blur-3xl" />

        <div className="relative space-y-6">
          <h1 className="text-6xl max-w-3xl leading-tight">
            Portfolio<span className="text-accent">.</span>
          </h1>

          <p className="max-w-xl text-lg text-gray-600">
            I apply engineering rigor to
            <span className="text-accent font-medium"> finance</span>,
            <span className="text-accent font-medium"> strategy</span>,
            and
            <span className="text-accent font-medium"> technology</span>
            — building tools, writing analysis, and thinking in public.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link href="/writing" className="btn btn-primary">
              Read Writing →
            </Link>

            <Link href="/tech-projects" className="btn btn-secondary">
              View Projects
            </Link>

            <Link
              href="/currently-brewing"
              className="text-sm text-gray-500 hover:text-accent transition"
            >
              What I’m exploring now →
            </Link>
          </div>
        </div>
      </header>

      {/* SELECTED WORK */}
      <section>
        <h2 className="mb-8">Selected Work</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Industry X-Ray: Semiconductors",
              desc: "Structural analysis of the semiconductor value chain.",
              link: "/business-analysis/semiconductors",
            },
            {
              title: "LBO Stress Testing Engine",
              desc: "Scenario-driven leveraged buyout modeling engine.",
              link: "/tech-projects/lbo-engine",
            },
            {
              title: "Comparable Company Analysis",
              desc: "Framework-driven valuation benchmarking.",
              link: "/business-analysis/comps",
            },
            {
              title: "India EV Battery Strategy",
              desc: "National-scale strategy for battery supply chains.",
              link: "/business-analysis/india-ev-battery",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="card bg-sand group"
            >
              <h3 className="group-hover:text-accent transition">
                {item.title}
              </h3>
              <p className="mt-2">{item.desc}</p>
              <span className="mt-4 inline-block text-sm text-gray-500 group-hover:text-accent">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
