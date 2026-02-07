export type Project = {
  id: string
  title: string
  category: "pinned" | "tech" | "analysis" | "brewing"
  date: string
  summary: string
  href: string
}

export const projects: Project[] = [
  {
    id: "semi",
    title: "Industry X-Ray: Semiconductors",
    category: "pinned",
    date: "Oct 2025",
    summary: "Strategy teardown of the semiconductor ecosystem.",
    href: "/blog/industry-x-ray-semiconductors"
  },
  {
    id: "lbo",
    title: "LBO Stress Testing Engine",
    category: "tech",
    date: "Jul 2025",
    summary: "IRR, MOIC, and downside modeling in Python.",
    href: "/tech-projects"
  },
  {
    id: "comps",
    title: "Comparable Company Analysis",
    category: "analysis",
    date: "Sep 2025",
    summary: "Why comps lie unless normalized.",
    href: "/business-analysis"
  },
  {
    id: "ev",
    title: "India EV Battery Strategy",
    category: "brewing",
    date: "Aug 2025",
    summary: "Venture thesis on battery supply chains.",
    href: "/currently-brewing"
  }
]
