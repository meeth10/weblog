// app/components/nav.tsx
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="max-w-5xl mx-auto py-6 px-6 flex justify-between items-center text-sm text-gray-300">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Writing</Link>
        <Link href="/business-analysis">Analysis</Link>
        <Link href="/tech-projects">Projects</Link>
        <Link href="/currently-brewing">Now</Link>
      </div>
      <div className="text-xs">HomeWritingAnalysisNow</div>
    </nav>
  )
}
