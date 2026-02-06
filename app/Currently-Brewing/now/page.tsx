export default function Now() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Now</h1>
      <p className="text-gray-400 mb-12 text-sm">
        Last updated: February 7, 2026
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Currently Learning
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">→</span>
              <span>
                Building DCF models for SaaS companies with non-linear growth
                curves
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">→</span>
              <span>
                Understanding semiconductor manufacturing economics and TSMC's
                competitive moat
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">→</span>
              <span>
                Exploring network effects in B2B marketplaces vs consumer
                platforms
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Current Projects
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg text-white mb-2">
                Cloud Infrastructure Economics
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Analyzing cost structures across AWS, Azure, and GCP. Building
                a framework to evaluate when companies should migrate between
                providers or build in-house.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-white mb-2">
                AI Model Deployment at Scale
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Designing systems for serving LLMs in production. Focus on
                latency optimization, cost per token, and inference
                infrastructure trade-offs.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Reading</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <span className="text-white">The Power Law</span> by Sebastian
              Mallaby
            </li>
            <li>
              <span className="text-white">Crossing the Chasm</span> by Geoffrey
              Moore
            </li>
            <li>
              <span className="text-white">Chip War</span> by Chris Miller
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Thinking About
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>
                How to value companies in industries being disrupted by AI
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>
                The shift from horizontal to vertical SaaS and what it means
                for market sizing
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">•</span>
              <span>
                Why some engineering cultures produce better strategic thinkers
              </span>
            </li>
          </ul>
        </section>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Derek Sivers' Now page movement
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}