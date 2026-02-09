import { NextResponse } from "next/server"
import { Buffer } from "buffer"

export async function POST(req: Request) {
  const { title, tags, content } = await req.json()

  if (!title || !content) {
    return new NextResponse("Missing title or content", { status: 400 })
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

  // Convert plain text → markdown-safe body
  const body = content
    .split("\n\n")
    .map((p: string) => p.trim())
    .filter(Boolean)
    .join("\n\n")

  // Generate MDX with controlled frontmatter
  const mdx = `---
title: "${title.replace(/"/g, '\\"')}"
tags: ${JSON.stringify(tags ?? [])}
---

${body}
`

  const path = `app/blog/posts/${slug}.mdx`

  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        message: `Add post: ${title}`,
        content: Buffer.from(mdx).toString("base64"),
        branch: process.env.GITHUB_BRANCH,
      }),
    }
  )

  if (!res.ok) {
    const error = await res.text()
    return new NextResponse(error, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
