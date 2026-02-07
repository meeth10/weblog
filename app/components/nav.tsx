import Link from "next/link"

export default function Nav() {
  return (
    <nav className="max-w-5xl mx-auto flex gap-6 py-6 text-sm text-gray-300">
      <Link href="/" className="hover:text-white">Home</Link>
      <Link href="/blog" className="hover:text-white">Writing</Link>
      <Link href="/business-analysis" className="hover:text-white">Analysis</Link>
      <Link href="/now" className="hover:text-white">Now</Link>
    </nav>
  )
}
