import "./global.css"
import Nav from "./components/nav"

export const metadata = {
  title: "Shourya Singh",
  description: "Writing, analysis, and projects at the intersection of strategy, finance, and technology.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Nav />

        <main className="mx-auto max-w-6xl px-6 py-20">
          {children}
        </main>

        <footer className="border-t border-gray-200 mt-24">
          <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
            <span>© 2026 — Shourya Singh</span>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">Email</a>
              <a href="#" className="hover:text-gray-900">GitHub</a>
              <a href="#" className="hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
