import { getAllPosts } from "../blog/utils"
import WritingList from "../components/WritingList"

export default function InsightsPage() {
  const posts = getAllPosts().filter((p) =>
    p.tags?.includes("insight")
  )

  return (
    <section className="max-w-3xl mx-auto py-24 space-y-8">
      <header>
        <h1 className="text-4xl font-semibold">Insights</h1>
        <p className="text-gray-600 mt-2">
          Short ideas, mental models, and observations.
        </p>
      </header>

      <WritingList posts={posts} />
    </section>
  )
}
