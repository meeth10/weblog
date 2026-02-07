import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPosts } from "../utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl">
      <Link
        href="/blog"
        className="text-sm text-gray-400 hover:text-white transition-colors mb-8 inline-block"
      >
        ← Back
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">{post.metadata.title}</h1>
        <time className="text-sm text-gray-500">{post.metadata.publishedAt}</time>
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}