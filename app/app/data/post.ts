// app/data/posts.ts
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
    content: `Why Semiconductors Matter

Semiconductors are the invisible backbone of modern civilization — from phones to EVs to AI datacenters.

Value chain highlights:
- Design (IP, fabs-lite)
- Fabrication (TSMC, Samsung)
- Assembly & Test (ASE, Amkor)

Strategic insight: margins accumulate where IP meets ecosystem control.`,
  },
  {
    slug: "amazon-prime-value-adder",
    title: "Amazon Prime: Value Adder",
    publishedAt: "September 28, 2025",
    description: "Why Prime is Amazon’s strongest moat.",
    content: `Prime is a habit-forming flywheel:
- increases frequency
- raises basket size
- reduces price sensitivity

Real moat = logistics + data + habit.`,
  },
  {
    slug: "amazon-supply-cash-cow",
    title: "Amazon Supply: The Next Cash Cow Segment",
    publishedAt: "September 22, 2025",
    description: "A segment-driven look at Amazon Supply.",
    content: `Amazon Supply is about margin capture in enterprise logistics — not retail discounting.`,
  },
  {
    slug: "amazon-pharmacy-analysis",
    title: "Amazon Pharmacy: A Segment-Driven Analysis",
    publishedAt: "September 19, 2025",
    description: "How Amazon is attacking healthcare distribution.",
    content: `Pharmacy is distribution + trust. Amazon's play is logistics + pricing transparency.`,
  },
  {
    slug: "network-effects",
    title: "How Network Effects Work",
    publishedAt: "September 8, 2025",
    description: "Direct vs indirect network effects explained.",
    content: `Not all networks compound. Build the **right** network for your product.`,
  },
  {
    slug: "switching-costs",
    title: "The Hidden Glue: How Switching Costs Work",
    publishedAt: "September 8, 2025",
    description: "Why customers stay even when better products exist.",
    content: `Switching costs can be behavioral, technical, or contractual — and many startups confuse them.`,
  },
  {
    slug: "comparable-company-analysis",
    title: "Comparable Company Analysis: Apples, Oranges, and Rotten Fruit",
    publishedAt: "September 1, 2025",
    description: "How comps mislead if not normalized properly.",
    content: `Normalize metrics. Watch out for accounting differences and leverage effects.`,
  },
  {
    slug: "tam-sam-som",
    title: "Sizing the Prize: TAM, SAM, and SOM Made Simple",
    publishedAt: "August 27, 2025",
    description: "Market sizing without MBA nonsense.",
    content: `Quick rules of thumb to size TAM, SAM, SOM with data & sanity checks.`,
  },
  {
    slug: "my-take-on-strategy",
    title: "My Take on Strategy",
    publishedAt: "August 2025",
    description: "A personal synthesis of strategy frameworks.",
    content: `Strategy is choice + trade-offs. Use first principles and test assumptions.`,
  }
]
