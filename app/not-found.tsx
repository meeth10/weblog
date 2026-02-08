import Link from "next/link"

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto py-24 text-center">
      <h1>Nothing here.</h1>
      <p className="text-gray-600 mt-4">
        All writing lives in one place.
      </p>
      <Link href="/blog" className="text-accent mt-6 inline-block">
        Go to Writing →
      </Link>
    </div>
  )
}
