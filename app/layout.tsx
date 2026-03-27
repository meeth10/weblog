import "./global.css"
import Nav from "./components/nav"
import Footer from "./components/footer"

export const metadata = {
  title: "Shourya Singh Thakur",
  description: "Thinking in systems — strategy, finance, technology, and ideas in motion.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 mx-auto w-full max-w-reading px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
