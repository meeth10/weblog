export default function Now() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Now</h1>
      <p className="text-gray-500 mb-16 text-sm">
        Last updated: February 7, 2026
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Currently Learning
          </h2>
          <ul className="space-y-2 text-gray-300 leading-relaxed">
            <li>
              Building DCF models for SaaS companies with non-linear growth
              curves
            </li>
            <li>
              Understanding semiconductor manufacturing economics and TSMC's
              competitive moat
            </li>
            <li>
              Exploring network effects in B2B marketplaces vs consumer
              platforms
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Current Projects
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-white mb-1">
                Cloud Infrastructure Economics
              </h3>
              <p className="text-gray-400">
                Analyzing cost structures across AWS, Azure, and GCP. Building
                a framework to evaluate when companies should migrate between
                providers.
              </p>
            </div>
            <div>
              <h3 className="text-white mb-1">
                AI Model Deployment at Scale
              </h3>
              <p className="text-gray-400">
                Designing systems for serving LLMs in production. Focus on
                latency optimization and cost per token.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Reading</h2>
          <ul className="space-y-1 text-gray-300">
            <li>The Power Law – Sebastian Mallaby</li>
            <li>Crossing the Chasm – Geoffrey Moore</li>
            <li>Chip War – Chris Miller</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Thinking About
          </h2>
          <ul className="space-y-2 text-gray-300 leading-relaxed">
            <li>
              How to value companies in industries being disrupted by AI
            </li>
            <li>
              The shift from horizontal to vertical SaaS and what it means
              for market sizing
            </li>
            <li>
              Why some engineering cultures produce better strategic thinkers
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}