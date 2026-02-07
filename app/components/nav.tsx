import Link from "next/link"

export default function Nav() {
  return (
    <nav className="flex gap-6 py-6 text-sm text-gray-300">
      <Link href="/">Home</Link>
      <Link href="/blog">Writing</Link>
      <Link href="/insights">Insights</Link>
      <Link href="/business-analysis">Analysis</Link>
      <Link href="/tech-projects">Projects</Link>
      <Link href="/currently-brewing">Now</Link>
    </nav>
  )
}
