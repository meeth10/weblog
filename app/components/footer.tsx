Footer · TSX
Copy

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 pt-8 border-t border-gray-800">
      <div className="flex items-center gap-6 text-sm text-gray-400">
        <Link href="mailto:your@email.com" className="hover:text-white transition-colors">
          gmail
        </Link>
        <Link href="https://github.com/yourusername" target="_blank" className="hover:text-white transition-colors">
          github
        </Link>
        <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white transition-colors">
          linkedin
        </Link>
      </div>
      <p className="text-gray-500 text-xs mt-4">© 2026 MIT Licensed</p>
    </footer>
  );
}