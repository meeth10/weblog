import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I am an Electronics & Communication Engineering student driven by curiosity that extends far beyond engineering. 
        While I build and analyze systems in ECE, I actively apply the same rigor to finance, consulting, and strategy, where I break down complex industries, design valuation models, and test ideas through multiple lenses.
        What excites me is not just solving problems, but reframing them — connecting insights across technology, markets, and strategy to uncover opportunities others miss.
        My portfolio reflects this mindset: a collection of work that blends analytical depth with strategic perspective, shaped by an eagerness to learn, challenge assumptions, and create impact`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
