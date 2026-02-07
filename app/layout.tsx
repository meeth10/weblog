// app/layout.tsx
import "./global.css"
import Nav from "./components/nav"
import Footer from "./components/footer"

export const metadata = {
  title: "Portfolio",
  description: "Portfolio site",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
