export type Post = {
  slug: string
  title: string
  publishedAt: string
  description: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "semiconductor-industry-xray",
    title: "Industry X-Ray: Semiconductor Case Study",
    publishedAt: "2025-10-01",
    description:
      "A first-principles and strategy-led teardown of the global semiconductor value chain.",
    content: `
## Why Semiconductors Matter

Semiconductors are the invisible backbone of modern civilization.
From smartphones to EVs to AI data centers, compute is the new oil.

## Value Chain Breakdown
- Design (NVIDIA, AMD)
- Fabrication (TSMC, Samsung)
- ATP (ASE, Amkor)

## Strategic Insight
Margins accrue where capital intensity meets IP defensibility.
Fabless + ecosystem control beats brute-force manufacturing.
    `,
  },
  {
    slug: "amazon-prime-value-adder",
    title: "Amazon Prime: The Ultimate Value Adder",
    publishedAt: "2025-09-10",
    description:
      "Why Prime is not a subscription — it’s Amazon’s economic moat.",
    content: `
## Prime Is a Flywheel

Prime increases:
- Purchase frequency
- Basket size
- Customer lock-in

## The Real Weapon
Logistics + data + habit formation.

This is strategy disguised as convenience.
    `,
  },
  {
    slug: "network-effects-explained",
    title: "How Network Effects Actually Work",
    publishedAt: "2025-09-01",
    description:
      "Network effects are misunderstood. This piece fixes that.",
    content: `
## Direct vs Indirect Networks

Not all networks compound.
Some collapse.

Understanding *which* network you’re building is everything.
    `,
  },
]
