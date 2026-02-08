import Link from "next/link"

export default function Home() {
  return (
    <section className="space-y-12">
      <header className="space-y-4">
        <h1>Portfolio</h1>
        <p className="max-w-xl">
          I apply engineering rigor to finance, strategy, and technology.
        </p>
      </header>

      <ul className="space-y-4">
        <li>
          <Link href="/business-analysis/semiconductors" className="link">
            Industry X-Ray: Semiconductors
          </Link>
        </li>
        <li>
          <Link href="/tech-projects/lbo-engine" className="link">
            LBO Stress Testing Engine
          </Link>
        </li>
        <li>
          <Link href="/business-analysis/comps" className="link">
            Comparable Company Analysis
          </Link>
        </li>
        <li>
          <Link href="/business-analysis/india-ev-battery" className="link">
            India EV Battery Strategy
          </Link>
        </li>
      </ul>
    </section>
  )
}
