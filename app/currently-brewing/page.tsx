export const metadata = { title: "Now — Shourya" }
export default function Now() {
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">March 2026</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Now</h1>
        <p className="text-steel text-sm">What I'm working on and thinking about.</p>
      </header>
      <div className="space-y-8 max-w-prose">
        {[
          { label: "Reading", items: ["The Alchemy of Air — Thomas Hager", "Damodaran's valuation lecture series"] },
          { label: "Building", items: ["LBO stress-testing engine (scenario-based)", "Industry X-Ray series: semiconductors → energy → pharma"] },
          { label: "Thinking about", items: ["Whether DeepSeek changes the semiconductor thesis", "Reinvestment rates as the primary moat signal", "Why most strategy writing is just retrospective history"] },
        ].map(({ label, items }) => (
          <section key={label} className="space-y-2">
            <span className="eyebrow">{label}</span>
            <ul className="space-y-1.5 pt-1">
              {items.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-steel">
                  <span className="text-orange mt-0.5 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="text-xs text-steelSoft pt-2">Last updated March 2026.</p>
    </div>
  )
}
