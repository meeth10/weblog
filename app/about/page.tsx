export const metadata = { title: "About — Shourya" }
export default function About() {
  return (
    <div className="space-y-10 py-4">
      <header className="space-y-2">
        <span className="eyebrow">About</span>
        <h1 className="text-[1.6rem] font-semibold tracking-tight text-ink">Shourya Singh Thakur</h1>
      </header>
      <div className="space-y-5 max-w-prose text-steel text-[0.92rem] leading-relaxed">
        <p>I think about markets, technology, and how systems — economic, organizational, technological — actually work versus how they're supposed to work.</p>
        <p>This site is where I publish structured thinking: analysis of companies and industries, shorter ideas and mental models, and summaries of things I've read. It's partly for me, partly for anyone who finds it useful.</p>
        <p>I'm interested in capital allocation, competitive dynamics, and the intersection of technology and geopolitics. I build analytical tools when I can't find one that does what I need.</p>
        <div className="h-px bg-line my-6" />
        <p className="text-xs text-steelSoft">Get in touch: <a href="mailto:shouryast.1004@gmail.com" className="text-orange hover:underline underline-offset-4">shouryast.1004@gmail.com</a></p>
      </div>
    </div>
  )
}
