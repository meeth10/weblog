"use client"

import { useState } from "react"

export default function WritePage() {
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState("")

  async function publish() {
    setStatus("Publishing...")

    const res = await fetch("/api/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        tags: tags.split(",").map(t => t.trim()),
        content,
      }),
    })

    if (res.ok) {
      setStatus("Published ✅ (redeploying…)")  
      setTitle("")
      setTags("")
      setContent("")
    } else {
      setStatus("Error ❌")
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-24 space-y-6">
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
        placeholder="Write MDX here…"
        className="w-full border p-3 rounded min-h-[300px]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={publish}
        className="btn btn-primary"
      >
        Publish
      </button>

      {status && <p className="text-sm text-gray-500">{status}</p>}
    </div>
  )
}
