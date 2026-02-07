import "./global.css"
import Nav from "./components/nav"
import Footer from "./components/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Nav />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
