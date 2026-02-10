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
      className="group flex items-center gap-3 text-left cursor-pointer"
      aria-label="Toggle thinking space"
    >
      <span className="text-lg">☕</span>

      <span className="text-sm font-medium text-ink group-hover:text-orange transition">
        Double shot espresso
      </span>

      {/* subtle activity dot */}
      <span
        className={`h-1.5 w-1.5 rounded-full transition-opacity ${
          active ? "bg-orange opacity-100" : "bg-line opacity-40"
        }`}
      />
    </button>
  )
}
