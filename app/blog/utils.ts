import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"

const POSTS_PATH = path.join(process.cwd(), "app/blog/posts")

export function getAllPosts() {
  return fs.readdirSync(POSTS_PATH).map((file) => {
    const slug = file.replace(/\.mdx$/, "")
    const source = fs.readFileSync(path.join(POSTS_PATH, file), "utf8")
    const { data } = matter(source)

    return {
      slug,
      title: data.title ?? slug.replace(/_/g, " "),
      description: data.description ?? "",
    }
  })
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const source = fs.readFileSync(fullPath, "utf8")
  const { content, data } = matter(source)

  const compiled = await compileMDX({
    source: content,
  })

  return {
    title: data.title ?? slug.replace(/_/g, " "),
    content: compiled.content,
  }
}
