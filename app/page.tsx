"use client"

import Link from "next/link"
import { useState } from "react"
import ThinkingButton from "./components/ThinkingButton"
import ThinkingLayer from "./components/ThinkingLayer"

export default function Page() {
  const [thinking, setThinking] = useState(false)

  return (
    <main className="relative min-h-screen px-6 md:px-10 py-20 space-y-28">
      <ThinkingLayer active={thinking} />

      {/* HERO */}
      <header className="panel panel-glass p-10 md:p-16 max-w-4xl">
        <div className="space-y-8">
          <span className="eyebrow">Portfolio</span>

          <h1>
            Engineering rigor applied to
            <br />
            <span className="accent">finance, strategy,</span> and{" "}
            <span className="accent">technology</span>.
          </h1>

          <p className="max-w-2xl">
            I build analytical tools, write structured thinking, and explore
            complex systems in public — from markets to technology to strategy.
          </p>

          <ThinkingButton onToggle={() => setThinking(v => !v)} />

          <div className="flex gap-8 pt-4 text-sm">
            <Link href="/writing">Read writing →</Link>
            <Link href="/tech-projects">View projects →</Link>
          </div>
        </div>
      </header>

      {/* SELECTED WORK */}
      <section className="max-w-5xl">
        <h2>Selected Work</h2>

        <div className="grid gap-6 md:grid-cols-3">
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
            <Link key={item.title} href={item.link} className="paper p-6">
              <h3>{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
              <span className="text-sm accent">Read →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
