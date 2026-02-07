export type Post = {
  slug: string
  title: string
  publishedAt: string
  description: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "industry-x-ray-semiconductors",
    title: "Industry X-Ray: Semiconductor Case Study",
    publishedAt: "October 3, 2025",
    description: "A strategic teardown of the global semiconductor value chain.",
    content: "Full case study content goes here.",
  },
  {
    slug: "amazon-prime-value-adder",
    title: "Amazon Prime: Value Adder",
    publishedAt: "September 28, 2025",
    description: "Why Prime is Amazon’s strongest moat.",
    content: "Prime analysis content goes here.",
  },
  {
    slug: "amazon-supply-cash-cow",
    title: "Amazon Supply: The Next Cash Cow Segment",
    publishedAt: "September 22, 2025",
    description: "A segment-driven analysis of Amazon Supply.",
    content: "Amazon Supply analysis goes here.",
  },
  {
    slug: "amazon-pharmacy-analysis",
    title: "Amazon Pharmacy: A Segment-Driven Analysis",
    publishedAt: "September 19, 2025",
    description: "How Amazon is attacking healthcare distribution.",
    content: "Pharmacy analysis goes here.",
  },
  {
    slug: "network-effects",
    title: "How Network Effects Work",
    publishedAt: "September 8, 2025",
    description: "Direct, indirect, and false network effects explained.",
    content: "Network effects content goes here.",
  },
  {
    slug: "switching-costs",
    title: "The Hidden Glue: How Switching Costs Work",
    publishedAt: "September 8, 2025",
    description: "Why customers stay even when better products exist.",
    content: "Switching cost content goes here.",
  },
  {
    slug: "comparable-company-analysis",
    title: "Comparable Company Analysis: Apples, Oranges, and Rotten Fruit",
    publishedAt: "September 1, 2025",
    description: "How comps actually lie if you don’t normalize them.",
    content: "Comparable company analysis goes here.",
  },
  {
    slug: "tam-sam-som",
    title: "Sizing the Prize: TAM, SAM, and SOM Made Simple",
    publishedAt: "August 27, 2025",
    description: "Market sizing without MBA nonsense.",
    content: "TAM SAM SOM content goes here.",
  },
  {
    slug: "my-take-on-strategy",
    title: "My Take on Strategy",
    publishedAt: "August 2025",
    description: "A personal synthesis of strategy frameworks.",
    content: "Strategy essay goes here.",
  },
]
