"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function WritePage() {
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState<string | null>(null)
  const [slug, setSlug] = useState<string | null>(null)

  // Autosave draft
  useEffect(() => {
    const saved = localStorage.getItem("draft")
    if (saved) {
      const d = JSON.parse(saved)
      setTitle(d.title)
      setTags(d.tags)
      setContent(d.content)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "draft",
      JSON.stringify({ title, tags, content })
    )
  }, [title, tags, content])

  const words = content.trim().split(/\s+/).filter(Boolean).length
  const readingTime = Math.max(1, Math.ceil(words / 200))

  async function publish() {
    setStatus("Publishing...")

    try {
      const res = await fetch("/api/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
          content,
        }),
      })

      if (res.ok) {
        const generatedSlug = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")

        setSlug(generatedSlug)
        setStatus("Published ✅")
        localStorage.removeItem("draft")
      } else {
        const text = await res.text()
        setStatus(`Error ❌ ${text}`)
      }
    } catch {
      setStatus("Error ❌ Network or server issue")
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* EDITOR */}
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold">Write</h1>

        <input
          placeholder="Title"
          className="w-full border p-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Tags (comma separated)"
          className="w-full border p-3 rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <textarea
          placeholder="Write freely here. No markdown needed."
          className="w-full border p-3 rounded min-h-[300px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{words} words · {readingTime} min read</span>
          <button
            onClick={publish}
            className="btn btn-primary"
            disabled={!title || !content}
          >
            Publish
          </button>
        </div>

        {status && (
          <div className="text-sm text-gray-600 space-y-2">
            <p>{status}</p>
            {slug && (
              <Link
                href={`/blog/${slug}`}
                className="text-orange-500 underline"
              >
                View post →
              </Link>
            )}
          </div>
        )}
      </div>

      {/* PREVIEW */}
      <div className="border-l pl-8 space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>

        <article className="prose prose-gray max-w-none">
          <h1>{title || "Untitled"}</h1>
          {content.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </div>
    </div>
  )
}
