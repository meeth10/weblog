import Link from "next/link"

export default function Nav() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-14 py-8 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight leading-none text-ink"
        >
          Shourya Singh Thakur<span className="text-orange">.</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-10 text-[1.05rem] font-medium text-steel">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Insights", href: "/insights" },
            { name: "Analysis", href: "/business-analysis" },
            { name: "Projects", href: "/tech-projects" },
            { name: "Now", href: "/currently-brewing" },
          ].map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="
                relative transition
                hover:text-ink
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0 after:bg-orange
                after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
