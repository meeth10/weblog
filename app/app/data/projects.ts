// app/data/projects.ts
export type Project = {
  id: string
  title: string
  category: "pinned" | "business-analysis" | "tech-project" | "currently-brewing"
  date?: string
  short: string
  href?: string
}

export const projects: Project[] = [
  {
    id: "semiconductor-case",
    title: "Industry X-Ray: Semiconductor Case Study",
    category: "pinned",
    date: "Oct 2025",
    short: "A first-principles strategy teardown of the semiconductor value chain.",
    href: "/business-analysis/industry-x-ray-semiconductors"
  },
  {
    id: "lbo-stress-tool",
    title: "LBO Stress-testing Engine (Python)",
    category: "tech-project",
    date: "Jul 2025",
    short: "Debt schedule, IRR / MOIC scenarios and sensitivity grid.",
    href: "/tech-projects/lbo-stress-tool"
  },
  {
    id: "regime-risk",
    title: "Regime-Sensitive Risk Modeling",
    category: "tech-project",
    date: "Jul 2025",
    short: "HMM + EWMA for regime detection and adaptive allocation.",
    href: "/tech-projects/regime-risk"
  },
  {
    id: "ev-battery-strategy",
    title: "Powering India’s EV Future (venture strategy draft)",
    category: "currently-brewing",
    date: "Aug 2025",
    short: "TAM/SAM/SOM, supplier map, and venture strategy for battery supply chain.",
    href: "/currently-brewing/ev-battery-strategy"
  },
  {
    id: "comps-paper",
    title: "Comparable Company Analysis Paper",
    category: "business-analysis",
    date: "Sep 2025",
    short: "Framework and examples for fair comps adjustments.",
    href: "/business-analysis/comparable-company-analysis"
  }
]
