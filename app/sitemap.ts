import { getAllPosts } from "app/blog/utils";

export const baseUrl = "https://portfolio-blog-starter.vercel.app";

export default async function sitemap() {
  const today = new Date().toISOString().split("T")[0];

  const blogs = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: today,
  }));

  const routes = ["", "/blog", "/writing", "/insights", "/analysis", "/projects", "/now"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: today,
    })
  );

  return [...routes, ...blogs];
}
