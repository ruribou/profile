import Link from "next/link";
import { CalendarDays, Terminal } from "lucide-react";

const MENU = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Social", href: "#social" },
];

const Header = () => (
  <header className="fixed top-0 right-0 w-full z-50">
    <div className="bg-white/60 dark:bg-[#1a1a2e]/70 backdrop-blur-xl border-b border-white/50 dark:border-white/5">
      <nav className="container mx-auto flex justify-between items-center py-3 px-6">
        <a
          href="#about"
          className="flex items-center gap-2 font-extrabold text-lg tracking-tight text-gray-800 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
        >
          <Terminal className="w-4 h-4 text-purple-500 dark:text-purple-400" />
          ruribou
        </a>
        <ul className="flex items-center gap-1">
          {MENU.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/booking"
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-300/20 dark:hover:shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Schedule</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="rainbow-divider" />
  </header>
);

export default Header;
