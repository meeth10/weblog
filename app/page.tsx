export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-20 space-y-10">
      <h1 className="text-4xl font-bold">
        Portfolio
      </h1>

      <p className="text-lg text-gray-300 leading-relaxed">
        I’m an Electronics & Communication Engineering student who applies
        engineering rigor to finance, strategy, and technology.
        I break complex systems down and rebuild them with first principles.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Work</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Industry X-Ray: Semiconductor Case Study</li>
          <li>Amazon Prime: Value Adder</li>
          <li>How Network Effects Work</li>
        </ul>
      </section>
    </main>
  )
}
