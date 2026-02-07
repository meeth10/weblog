export type Insight = {
  id: string
  title: string
  date: string
  note: string
}

export const insights: Insight[] = [
  {
    id: "distribution",
    title: "Distribution > Ideas",
    date: "Jan 2026",
    note: "Ideas are cheap. Distribution is the real bottleneck."
  },
  {
    id: "engineers",
    title: "Why Engineers Make Better Investors",
    date: "Dec 2025",
    note: "Systems thinking beats pattern matching."
  }
]
