import Link from "next/link";
import Footer from "@/components/footer";

export default function BlogPage() {
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
        <h1 className="text-5xl font-bold mb-12">My Blog</h1>

        <div className="space-y-8">
          <article>
            <Link href="/blog/industry-xray-semiconductor" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                Industry X-Ray: Semiconductor Case Study
              </h2>
              <time className="text-gray-400 text-sm">October 3, 2025</time>
            </Link>
          </article>

          <article>
            <Link href="/blog/amazon-prime-value-adder" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                Amazon Prime: Value Adder
              </h2>
              <time className="text-gray-400 text-sm">September 28, 2025</time>
            </Link>
          </article>

          <article>
            <Link href="/blog/amazon-supply-cash-cow" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                Amazon Supply: The Next Cash Cow a segment
              </h2>
              <time className="text-gray-400 text-sm">September 22, 2025</time>
            </Link>
          </article>

          <article>
            <Link href="/blog/amazon-pharmacy-analysis" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                Amazon Pharmacy a segment driven analysis
              </h2>
              <time className="text-gray-400 text-sm">September 19, 2025</time>
            </Link>
          </article>

          <article>
            <Link href="/blog/how-network-effects-work" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                How Network Effects Work
              </h2>
              <time className="text-gray-400 text-sm">September 8, 2025</time>
            </Link>
          </article>

          <article>
            <Link href="/blog/switching-costs" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                The Hidden Glue: How Switching Costs Work
              </h2>
              <time className="text-gray-400 text-sm">September 8, 2025</time>
            </Link>
          </article>

          <article>
            <Link href="/blog/comparable-company-analysis" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                Comparable Company Analysis: Apples, Oranges, and Rotten Fruit
              </h2>
              <time className="text-gray-400 text-sm">September 1, 2025</time>
            </Link>
          </article>

          <article>
            <Link href="/blog/tam-sam-som" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                Sizing the Prize: TAM, SAM, and SOM Made Simple
              </h2>
              <time className="text-gray-400 text-sm">August 27, 2025</time>
            </Link>
          </article>

          <article>
            <Link href="/blog/my-take-on-strategy" className="group">
              <h2 className="text-2xl font-bold mb-1 group-hover:text-white/80 transition-colors">
                My take on strategy
              </h2>
              <time className="text-gray-400 text-sm">August 2025</time>
            </Link>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}