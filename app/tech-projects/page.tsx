import { getAllPosts } from "../blog/utils"
import WritingList from "../components/WritingList"

export default function TechProjectsPage() {
  const posts = getAllPosts().filter((p) =>
    p.tags?.includes("project")
  )

  return (
    <section className="max-w-3xl mx-auto py-24 space-y-8">
      <header>
        <h1 className="text-4xl font-semibold">Tech Projects</h1>
        <p className="text-gray-600 mt-2">
          Tools, systems, and things I’ve built.
        </p>
      </header>

      <WritingList posts={posts} />
    </section>
  )
}
