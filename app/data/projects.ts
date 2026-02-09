export type ProjectStatus = "active" | "paused" | "done"

export type Project = {
  id: string
  title: string
  category: "pinned" | "tech" | "analysis" | "brewing"

  summary: string

  // navigation
  href?: string

  // timeline
  startedAt?: string
  deadline?: string

  // execution (used by Currently Brewing)
  status?: ProjectStatus
  subtasks?: string[]
}

export const projects: Project[] = [
  {
    id: "semi",
    title: "Industry X-Ray: Semiconductors",
    category: "pinned",
    summary: "Strategy teardown of the semiconductor ecosystem.",
    href: "/blog/industry-x-ray-semiconductors",
  },

  {
    id: "lbo",
    title: "LBO Stress Testing Engine",
    category: "tech",
    summary: "IRR, MOIC, and downside modeling in Python.",
    href: "/tech-projects/lbo-engine",
  },

  {
    id: "comps",
    title: "Comparable Company Analysis",
    category: "analysis",
    summary: "Why comps lie unless normalized.",
    href: "/business-analysis/comps",
  },

  {
    id: "ev",
    title: "India EV Battery Strategy",
    category: "brewing",
    summary: "Venture thesis on battery supply chains.",

    status: "active",
    startedAt: "Aug 2025",
    deadline: "Mar 2026",

    subtasks: [
      "Map global battery value chain",
      "China vs India cost comparison",
      "Policy + incentives analysis",
    ],
  },
]
