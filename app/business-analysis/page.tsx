import { getAllPosts } from "../blog/utils"
import WritingList from "../components/WritingList"

export default function BusinessAnalysisPage() {
  const posts = getAllPosts().filter((p) =>
    p.tags?.includes("analysis")
  )

  return (
    <section className="max-w-3xl mx-auto py-24 space-y-8">
      <header>
        <h1 className="text-4xl font-semibold">Business Analysis</h1>
        <p className="text-gray-600 mt-2">
          Deep dives, frameworks, and structured thinking.
        </p>
      </header>

      <WritingList posts={posts} />
    </section>
  )
}
