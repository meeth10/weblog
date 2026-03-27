export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="mx-auto max-w-reading px-6 py-7 text-xs text-steelSoft flex items-center justify-between">
        <span>© 2026 — Shourya Singh Thakur</span>
        <div className="flex gap-5">
          <a href="mailto:shouryast.1004@gmail.com" className="hover:text-orange transition-colors">Email</a>
          <a href="https://github.com/meeth10" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/shourya-singh-197043289/" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
