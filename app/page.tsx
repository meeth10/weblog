import Link from "next/link";

export default function Home() {
  const featuredWork = {
    title: "Industry X-Ray: Semiconductor Case Study",
    description:
      "Breaking down the semiconductor value chain from design to fabrication. Analyzing competitive dynamics, capital intensity, and where value accrues in the stack.",
    date: "October 3, 2025",
    category: "Business Analysis",
    link: "/blog", // Change this to the actual link when you have the post
    tags: ["semiconductors", "industry-analysis", "value-chain"],
  };

  const recentWork = [
    {
      title: "Amazon Prime: Value Adder",
      category: "Business Analysis",
      date: "September 28, 2025",
      link: "/blog", // Update these links to match your actual blog posts
    },
    {
      title: "How Network Effects Work",
      category: "Blog",
      date: "September 8, 2025",
      link: "/blog",
    },
    {
      title: "TAM/SAM/SOM Framework",
      category: "Tech Projects",
      date: "August 15, 2025",
      link: "/content-here/tech-projects",
    },
  ];

  return (
    <div className="max-w-4xl">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-8">My Portfolio</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am an Electronics & Communication Engineering student driven by
          curiosity that extends far beyond engineering. While I build and
          analyze systems in ECE, I actively apply the same rigor to finance,
          consulting, and strategy, where I break down complex industries,
          design valuation models, and test ideas through multiple lenses. What
          excites me is not just solving problems, but reframing them —
          connecting insights across technology, markets, and strategy to
          uncover opportunities others miss. My portfolio reflects this
          mindset: a collection of work that blends analytical depth with
          strategic perspective, shaped by an eagerness to learn, challenge
          assumptions, and create impact.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Featured Work
        </h2>
        <article className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs px-3 py-1 bg-blue-900/30 rounded text-blue-400">
              {featuredWork.category}
            </span>
            <time className="text-sm text-gray-500">{featuredWork.date}</time>
          </div>
          <Link href={featuredWork.link} className="group">
            <h3 className="text-2xl font-medium text-white group-hover:text-blue-400 transition-colors mb-4">
              {featuredWork.title}
            </h3>
          </Link>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {featuredWork.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {featuredWork.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Recent Work</h2>
          <Link
            href="/blog"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-4">
          {recentWork.map((work, index) => (
            <Link
              key={index}
              href={work.link}
              className="block border-b border-gray-800 pb-4 hover:border-gray-700 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-lg text-white group-hover:text-blue-400 transition-colors mb-1">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-500">{work.category}</p>
                </div>
                <time className="text-sm text-gray-500">{work.date}</time>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="border border-gray-800 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4 text-white">
            What I'm up to now
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Currently diving deep into semiconductor economics, building DCF
            models for high-growth tech companies, and exploring how network
            effects differ across B2B and consumer platforms.
          </p>
          <Link
            href="/currently-brewing/now"
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            See what I'm learning and building →
          </Link>
        </div>
      </section>
    </div>
  );
}