import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="mb-12 pt-8">
        <div className="flex gap-8 text-lg flex-wrap">
          <Link href="/" className="hover:text-white/80 transition-colors">home</Link>
          <Link href="/blog" className="hover:text-white/80 transition-colors">blog</Link>
          <Link href="/business-analysis" className="hover:text-white/80 transition-colors">business analysis</Link>
          <Link href="/Tech-Projects" className="hover:text-white/80 transition-colors">tech projects</Link>
          <Link href="/insights" className="hover:text-white/80 transition-colors">insights</Link>
          <Link href="/now" className="hover:text-white/80 transition-colors">now</Link>
        </div>
      </nav>

      <main className="flex-grow">
        <h1 className="text-5xl font-bold mb-6">Pinned Work</h1>
        
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          I am an Electronics & Communication Engineering student driven by curiosity that extends far beyond engineering. While I build and analyze systems in ECE, I actively apply the same rigor to finance, consulting, and strategy, where I break down complex industries, design valuation models, and test ideas through multiple lenses.
        </p>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          What excites me is not just solving problems, but reframing them — connecting insights across technology, markets, and strategy to uncover opportunities others miss.
        </p>

        <section>
          <div className="space-y-8">
            <article className="flex justify-between items-start">
              <div>
                <Link href="/blog/industry-xray-semiconductor" className="group">
                  <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                    Industry X-Ray: Semiconductor Case Study
                  </h2>
                </Link>
                <p className="text-gray-400">Business Analysis</p>
              </div>
              <time className="text-gray-500 text-sm whitespace-nowrap">Oct 2025</time>
            </article>

            <article className="flex justify-between items-start">
              <div>
                <Link href="/blog/amazon-prime-value-adder" className="group">
                  <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                    Amazon Prime: Value Adder
                  </h2>
                </Link>
                <p className="text-gray-400">Business Analysis</p>
              </div>
              <time className="text-gray-500 text-sm whitespace-nowrap">Sep 2025</time>
            </article>

            <article className="flex justify-between items-start">
              <div>
                <Link href="/blog/how-network-effects-work" className="group">
                  <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                    How Network Effects Work
                  </h2>
                </Link>
                <p className="text-gray-400">Blog</p>
              </div>
              <time className="text-gray-500 text-sm whitespace-nowrap">Sep 2025</time>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}