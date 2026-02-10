import "./global.css"
import Nav from "./components/nav"

export const metadata = {
  title: "Shourya Singh",
  description:
    "Thinking in systems — strategy, finance, technology, and ideas in motion.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased">
        <Nav />

        <main className="mx-auto max-w-reading px-6 py-14">
          {children}
        </main>

        <footer className="mt-20 border-t border-line">
          <div className="mx-auto max-w-reading px-6 py-8 text-sm text-steelSoft flex justify-between">
            <span>© 2026 — Shourya Singh</span>
            <div className="flex gap-6">
              <a className="hover:text-orange" href="#">Email</a>
              <a className="hover:text-orange" href="#">GitHub</a>
              <a className="hover:text-orange" href="#">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
