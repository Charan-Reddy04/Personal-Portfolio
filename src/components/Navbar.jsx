import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Download,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    {name:"Home",href:"#home"},
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
  ];

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight text-slate-950 dark:text-white"
        >
          CHARAN<span className="text-[#0057FF]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#0057FF] dark:text-slate-300 dark:hover:text-[#0057FF]"
            >
              {link.name}
            </a>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-[#0057FF] dark:text-slate-300 dark:hover:text-[#0057FF]"
            >
              More
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-9 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <a
                  href="#achievements"
                  className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-[#0057FF] dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() => setMoreOpen(false)}
                >
                  Achievements
                </a>

                <a
                  href="#certifications"
                  className="block rounded-lg px-4 py-2.5 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-[#0057FF] dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() => setMoreOpen(false)}
                >
                  Certifications
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[#0057FF] dark:text-slate-300 dark:hover:text-[#0057FF]"
          >
            Contact
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-xl bg-[#0057FF] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0046CC]"
          >
            <Download size={16} />
            Resume
          </a>

          {/* Theme */}
          <button
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all hover:border-[#0057FF] hover:text-[#0057FF] dark:border-slate-700 dark:text-slate-200"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-4 mt-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl backdrop-blur-xl lg:hidden dark:border-slate-800 dark:bg-slate-950">

          <div className="flex flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#0057FF] dark:text-slate-300 dark:hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#achievements"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#0057FF] dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Achievements
            </a>

            <a
              href="#certifications"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#0057FF] dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Certifications
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#0057FF] dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Contact
            </a>

            <div className="mt-2 flex gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">

              <a
                href="/resume.pdf"
                download
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0057FF] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0046CC]"
              >
                <Download size={16} />
                Resume
              </a>

              <button
                onClick={handleThemeToggle}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;