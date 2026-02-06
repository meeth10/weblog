// Template for individual blog posts: app/blog/[slug]/page.tsx
// This prevents duplicate titles

import Link from "next/link";

export default function BlogPost({ params }: { params: { slug: string } }) {
  // You'll fetch your actual post data here based on slug
  // For now, this is the structure
  
  const post = {
    title: "Industry X-Ray: Semiconductor Case Study",
    date: "October 3, 2025",
    // content would come from your MDX or CMS
  };

  return (
    <article className="max-w-2xl">
      {/* Back link */}
      <Link
        href="/blog"
        className="text-sm text-gray-400 hover:text-white transition-colors mb-8 inline-block"
      >
        ← Back
      </Link>

      {/* Single title and date - only show ONCE */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <time className="text-sm text-gray-500">{post.date}</time>
      </header>

      {/* Your MDX content renders here WITHOUT the title */}
      <div className="prose prose-invert max-w-none">
        {/* 
          IMPORTANT: Make sure your MDX content does NOT include 
          the title as an H1 - it's already shown above
          
          Your MDX should start directly with content:
        */}
        
        {/* Example content structure */}
        <h2 className="text-xl font-semibold mt-12 mb-4">Paper Outcomes</h2>
        <ol className="space-y-2 mb-8">
          <li>Translate vague ambitions into clear market fit.</li>
          <li>Apply framework-driven thinking for strategic evaluation.</li>
          <li>Identify the startup edge and own your niche.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-12 mb-4">Why am I doing this?</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          As an Electronics and Communication Engineer, I saw a recurring issue...
        </p>

        {/* Rest of your content */}
      </div>
    </article>
  );
}
