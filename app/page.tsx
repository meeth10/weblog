"use client"

import Link from "next/link"
import { useState } from "react"
import ThinkingButton from "./components/ThinkingButton"
import ThinkingLayer from "./components/ThinkingLayer"

export default function Page() {
  const [thinking, setThinking] = useState(false)

  return (
    <main
      className={`relative z-10 min-h-screen space-y-24 transition-colors
        ${thinking ? "bg-bg" : "bg-bg"}
      `}
    >
      {/* GLOBAL VECTOR SPACE */}
      <ThinkingLayer active={thinking} />

      {/* HERO / INTRO */}
      <header
        className={`relative rounded-2xl border border-line p-8 md:p-14
          transition-all
          ${thinking ? "bg-sand/80 backdrop-blur-sm" : "bg-sand/90"}
        `}
      >
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl leading-tight font-heading text-ink">
            Portfolio<span className="text-orange">.</span>
          </h1>

          <p className="text-base text-steel">
            I apply engineering rigor to
            <span className="text-orange font-medium"> finance</span>,{" "}
            <span className="text-orange font-medium">strategy</span>, and{" "}
            <span className="text-orange font-medium">technology</span>
            — building tools, writing analysis, and thinking in public.
          </p>

          {/* NAME + PROFESSIONAL SUMMARY (THINKING TOGGLE) */}
          <div className="pt-2">
            <ThinkingButton onToggle={() => setThinking(v => !v)} />
          </div>

          {/* PRIMARY NAV ACTIONS */}
          <div className="flex flex-wrap gap-6 pt-6">
            <Link
              href="/writing"
              className="text-sm font-medium text-ink hover:text-orange transition"
            >
              Read writing →
            </Link>

            <Link
              href="/tech-projects"
              className="text-sm font-medium text-ink hover:text-orange transition"
            >
              View projects →
            </Link>
          </div>
        </div>
      </header>
    </main>
  )
}
{/* PINNED PROJECTS */}
<section className="grid gap-6 md:grid-cols-3">
  {[
    {
      title: "Industry X-Ray: Semiconductors",
      desc: "Systems-first breakdown of the semiconductor value chain.",
      link: "/cases/semiconductors",
    },
    {
      title: "LBO Stress Testing Engine",
      desc: "Scenario-based leveraged buyout modeling tool.",
      link: "/tech-projects/lbo-engine",
    },
    {
      title: "India EV Battery Strategy",
      desc: "National-scale strategy for battery supply chains.",
      link: "/cases/india-ev-battery",
    },
  ].map(item => (
    <Link
      key={item.title}
      href={item.link}
      className="paper p-5 transition hover:border-orange"
    >
      <h3 className="font-heading text-base text-ink">
        {item.title}
      </h3>

      <p className="mt-2 text-sm text-steel">
        {item.desc}
      </p>

      <span className="mt-4 inline-block text-sm text-steelSoft hover:text-orange">
        Read →
      </span>
    </Link>
  ))}
</section>
