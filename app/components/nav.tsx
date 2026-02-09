import Link from "next/link"

export default function Nav() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Shourya<span className="text-orange-500">.</span>
        </Link>

        <nav className="flex gap-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link><Link
  href="/about"
  className="relative text-gray-600 hover:text-gray-900
    after:absolute after:-bottom-1 after:left-0
    after:h-[2px] after:w-0 after:bg-orange-500
    after:transition-all hover:after:w-full"
>
  About
</Link>

          <Link href="/insights" className="hover:text-gray-900">Insights</Link>
          <Link href="/business-analysis" className="hover:text-gray-900">Analysis</Link>
          <Link href="/tech-projects" className="hover:text-gray-900">Projects</Link>
          <Link href="/currently-brewing" className="hover:text-gray-900">Now</Link>

        </nav>
      </div>
    </header>
  )
}
