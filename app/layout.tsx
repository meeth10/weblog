import "./global.css"
import Nav from "@/components/nav"
import Footer from "@/components/footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white max-w-5xl mx-auto px-6">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
