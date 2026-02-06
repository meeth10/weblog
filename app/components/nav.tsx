"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "home" },
    { href: "/blog", label: "blog" },
    { href: "/business-analysis", label: "business analysis" },
    { href: "/content-here/tech-projects", label: "tech projects" },
    { href: "/content-here/insights", label: "insights" },
    { href: "/currently-brewing/now", label: "now" },
  ];

  return (
    <nav className="mb-20">
      <ul className="flex flex-wrap items-center list-none" style={{ gap: '1.5rem' }}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm transition-colors hover:text-white ${
                pathname === link.href ? "text-white" : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}