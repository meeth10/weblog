import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl">
      {/* About Section - This is about YOU */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I am an Electronics & Communication Engineering student driven by
          curiosity that extends far beyond engineering. While I build and
          analyze systems in ECE, I actively apply the same rigor to finance,
          consulting, and strategy, where I break down complex industries,
          design valuation models, and test ideas through multiple lenses.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          What excites me is not just solving problems, but reframing them —
          connecting insights across technology, markets, and strategy to
          uncover opportunities others miss.
        </p>
      </section>

      {/* Pinned Work - Just 3 items, simple list */}
      <section>
        <h2 className="text-xl font-semibold mb-6 text-gray-400">
          Recent Work
        </h2>
        <div className="space-y-6">
          <Link href="/blog/semiconductor-case-study" className="block group">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg text-white group-hover:text-blue-400 transition-colors">
                Industry X-Ray: Semiconductor Case Study
              </h3>
              <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">Oct 2025</span>
            </div>
            <p className="text-gray-500 text-sm">Business Analysis</p>
          </Link>

          <Link href="/blog/amazon-prime-value" className="block group">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg text-white group-hover:text-blue-400 transition-colors">
                Amazon Prime: Value Adder
              </h3>
              <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">Sep 2025</span>
            </div>
            <p className="text-gray-500 text-sm">Business Analysis</p>
          </Link>

          <Link href="/blog/network-effects" className="block group">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg text-white group-hover:text-blue-400 transition-colors">
                How Network Effects Work
              </h3>
              <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">Sep 2025</span>
            </div>
            <p className="text-gray-500 text-sm">Blog</p>
          </Link>
        </div>
      </section>
    </div>
  );
}