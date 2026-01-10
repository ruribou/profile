import { Button } from "@/components/ui/button";

const MENU = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Social", href: "#social" },
];

const Header = () => (
  <header className="fixed top-0 right-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      <a href="#about" className="text-white font-bold text-lg hover:text-violet-400 transition-colors">
        ruribou
      </a>
      <ul className="flex items-center gap-1">
        {MENU.map((item) => (
          <li key={item.label}>
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/10 font-medium transition-all duration-200"
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
