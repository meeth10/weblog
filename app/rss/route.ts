import { baseUrl } from "app/sitemap"
import { getAllPosts } from "../blog/utils"

export async function GET() {
  const allBlogs = getAllPosts()

  const today = new Date().toUTCString()

  const itemsXml = allBlogs
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <guid>${baseUrl}/blog/${post.slug}</guid>
          <pubDate>${today}</pubDate>
        </item>`
    )
    .join("\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>My Portfolio</title>
    <link>${baseUrl}</link>
    <description>Writing and notes from my personal knowledge base</description>
    ${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  })
}
