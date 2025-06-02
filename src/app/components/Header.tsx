const MENU = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

const Header = () => (
  <header className="fixed top-0 right-0 w-full z-50 bg-blue-900/80 backdrop-blur shadow">
    <nav className="container mx-auto flex justify-end py-4 px-6">
      <ul className="flex space-x-8">
        {MENU.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-white hover:text-blue-300 font-semibold transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header; 