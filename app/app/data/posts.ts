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
    description: "A first-principles teardown of the semiconductor value chain.",
    content: "Semiconductors power everything. This piece breaks down where value actually accrues."
  },
  {
    slug: "amazon-prime-value-adder",
    title: "Amazon Prime: Value Adder",
    publishedAt: "September 28, 2025",
    description: "Prime is not a subscription — it’s a moat.",
    content: "Prime increases frequency, basket size, and lock-in. That’s strategy."
  },
  {
    slug: "network-effects",
    title: "How Network Effects Work",
    publishedAt: "September 8, 2025",
    description: "Why some networks compound and others collapse.",
    content: "Direct vs indirect networks — most people get this wrong."
  },
  {
    slug: "tam-sam-som",
    title: "Sizing the Prize: TAM, SAM, and SOM Made Simple",
    publishedAt: "August 27, 2025",
    description: "Market sizing without MBA nonsense.",
    content: "TAM is fantasy. SAM is reality. SOM is execution."
  }
]
