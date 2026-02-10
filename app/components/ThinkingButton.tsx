"use client"

import { useState } from "react"

export default function ThinkingButton({
  onToggle,
}: {
  onToggle: () => void
}) {
  const [active, setActive] = useState(false)

  return (
    <button
      onClick={() => {
        setActive(v => !v)
        onToggle()
      }}
      className="group text-left cursor-pointer"
      aria-label="Toggle thinking space"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-ink group-hover:text-orange transition">
          Shourya Singh
        </span>

        {/* subtle activity dot */}
        <span
          className={`h-1.5 w-1.5 rounded-full transition-opacity ${
            active ? "bg-orange opacity-100" : "bg-line opacity-40"
          }`}
        />
      </div>

      <div className="mt-1 max-w-md text-sm text-steel group-hover:text-ink transition">
        Engineer by training. Strategy, finance, and systems thinking.
      </div>
    </button>
  )
}
