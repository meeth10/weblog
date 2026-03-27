"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/",                  label: "Home"     },
  { href: "/about",             label: "About"    },
  { href: "/insights",          label: "Insights" },
  { href: "/business-analysis", label: "Analysis" },
  { href: "/writing",           label: "Writing"  },
  { href: "/reading",           label: "Reading"  },
  { href: "/currently-brewing", label: "Now"      },
]

export default function Nav() {
  const path = usePathname()
  return (
    <header className="border-b border-line sticky top-0 z-50 bg-bg/[0.97] backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-[0.9rem] font-semibold tracking-tight text-ink leading-none">
          Shourya Singh Thakur<span className="text-orange">.</span>
        </Link>
        <nav className="hidden sm:flex gap-6">
          {links.map(({ href, label }) => {
            const active = href === "/" ? path === "/" : path.startsWith(href)
            return <Link key={href} href={href} className={`nav-link ${active ? "active" : ""}`}>{label}</Link>
          })}
        </nav>
        <nav className="flex sm:hidden gap-5 overflow-x-auto max-w-[70vw]">
          {links.map(({ href, label }) => {
            const active = href === "/" ? path === "/" : path.startsWith(href)
            return <Link key={href} href={href} className={`nav-link whitespace-nowrap ${active ? "active" : ""}`}>{label}</Link>
          })}
        </nav>
      </div>
    </header>
  )
}
