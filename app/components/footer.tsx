import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 pt-8 border-t border-gray-800">
      <ul className="flex items-center list-none mb-4" style={{ gap: '1.5rem' }}>
        <li>
          <Link href="mailto:your@email.com" className="text-sm text-gray-400 hover:text-white transition-colors">
            gmail
          </Link>
        </li>
        <li>
          <Link href="https://github.com/yourusername" target="_blank" className="text-sm text-gray-400 hover:text-white transition-colors">
            github
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="text-sm text-gray-400 hover:text-white transition-colors">
            linkedin
          </Link>
        </li>
      </ul>
      <p className="text-gray-500 text-xs">© 2026 MIT Licensed</p>
    </footer>
  );
}