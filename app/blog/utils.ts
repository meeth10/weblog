import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"

const POSTS_PATH = path.join(process.cwd(), "app/blog/posts")

// 🔒 Single source of truth for blog post shape
export type BlogPost = {
  slug: string
  title: string
  description?: string
  tags?: string[]
  publishedAt?: string
}

// ✅ Used for lists: /writing, /analysis, /insights, homepage
export function getAllPosts(): BlogPost[] {
  return fs.readdirSync(POSTS_PATH).map((file) => {
    const slug = file.replace(/\.mdx$/, "")
    const source = fs.readFileSync(
      path.join(POSTS_PATH, file),
      "utf8"
    )

    const { data } = matter(source)

    return {
      slug,
      title: data.title ?? slug.replace(/_/g, " "),
      description: data.summary ?? data.description ?? "",
      tags: data.tags ?? [],
      publishedAt: data.publishedAt ?? null,
    }
  })
}

// ✅ Used for individual post pages
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const source = fs.readFileSync(fullPath, "utf8")
  const { content, data } = matter(source)

  const compiled = await compileMDX({
    source: content,
  })

  return {
    slug,
    title: data.title ?? slug.replace(/_/g, " "),
    tags: data.tags ?? [],
    publishedAt: data.publishedAt ?? null,
    content: compiled.content,
  }
}
