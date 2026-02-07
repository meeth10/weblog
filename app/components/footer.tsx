// app/components/footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-5xl mx-auto py-6 px-6 flex justify-between items-center text-sm text-gray-400">
        <div>© 2026 — Shourya Singh</div>
        <div className="flex gap-6">
          <a href="mailto:your@email.com" className="hover:text-white">Email</a>
          <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
