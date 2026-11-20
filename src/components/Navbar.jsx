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
    { name: "Home", href: "#home" },
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[#E9DFFF]/80 bg-white/85 px-5 py-3 shadow-[0_12px_28px_-4px_rgba(48,42,64,0.07),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(121,87,200,0.05)] backdrop-blur-xl dark:border-[#2C2442] dark:bg-[#1C1829]/90 dark:shadow-[0_12px_28px_-4px_rgba(0,0,0,0.4),inset_0_1.5px_2px_rgba(255,255,255,0.08),inset_0_-2px_4px_rgba(0,0,0,0.4)]">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight text-[#302A40] transition-colors duration-200 dark:text-white"
        >
          CHARAN<span className="text-[#7957C8]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-[#746C82] transition-colors duration-200 hover:text-[#7957C8] dark:text-[#A59EBA] dark:hover:text-[#C4B5FD]"
            >
              {link.name}
            </a>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 text-sm font-medium text-[#746C82] transition-colors hover:text-[#7957C8] dark:text-[#A59EBA] dark:hover:text-[#C4B5FD]"
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
              <div className="absolute right-0 top-9 w-48 overflow-hidden rounded-2xl border border-[#E9DFFF] bg-white p-2 shadow-[0_16px_32px_-4px_rgba(48,42,64,0.12),inset_0_2px_3px_rgba(255,255,255,0.95)] dark:border-[#2C2442] dark:bg-[#1C1829] dark:shadow-[0_16px_32px_-4px_rgba(0,0,0,0.5)]">
                <a
                  href="#achievements"
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[#302A40] transition-all hover:bg-[#E9DFFF]/40 hover:text-[#7957C8] dark:text-[#F4F1FA] dark:hover:bg-[#2C2442] dark:hover:text-[#C4B5FD]"
                  onClick={() => setMoreOpen(false)}
                >
                  Achievements
                </a>

                <a
                  href="#certifications"
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[#302A40] transition-all hover:bg-[#E9DFFF]/40 hover:text-[#7957C8] dark:text-[#F4F1FA] dark:hover:bg-[#2C2442] dark:hover:text-[#C4B5FD]"
                  onClick={() => setMoreOpen(false)}
                >
                  Certifications
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="text-sm font-medium text-[#746C82] transition-colors hover:text-[#7957C8] dark:text-[#A59EBA] dark:hover:text-[#C4B5FD]"
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
            className="clay-button-primary flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Download size={16} />
            Resume
          </a>

          {/* Theme */}
          <button
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
            className="clay-button-secondary flex h-10 w-10 items-center justify-center rounded-xl"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="clay-button-secondary flex h-10 w-10 items-center justify-center rounded-xl lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-4 mt-2 rounded-2xl border border-[#E9DFFF] bg-white/95 p-4 shadow-[0_16px_36px_-6px_rgba(48,42,64,0.12),inset_0_2px_3px_rgba(255,255,255,0.95)] backdrop-blur-xl lg:hidden dark:border-[#2C2442] dark:bg-[#1C1829]/95">

          <div className="flex flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#302A40] transition hover:bg-[#E9DFFF]/40 hover:text-[#7957C8] dark:text-[#F4F1FA] dark:hover:bg-[#2C2442] dark:hover:text-[#C4B5FD]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#achievements"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#302A40] transition hover:bg-[#E9DFFF]/40 hover:text-[#7957C8] dark:text-[#F4F1FA] dark:hover:bg-[#2C2442] dark:hover:text-[#C4B5FD]"
            >
              Achievements
            </a>

            <a
              href="#certifications"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#302A40] transition hover:bg-[#E9DFFF]/40 hover:text-[#7957C8] dark:text-[#F4F1FA] dark:hover:bg-[#2C2442] dark:hover:text-[#C4B5FD]"
            >
              Certifications
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#302A40] transition hover:bg-[#E9DFFF]/40 hover:text-[#7957C8] dark:text-[#F4F1FA] dark:hover:bg-[#2C2442] dark:hover:text-[#C4B5FD]"
            >
              Contact
            </a>

            <div className="mt-2 flex gap-2 border-t border-[#E9DFFF]/80 pt-3 dark:border-[#2C2442]">

              <a
                href="/resume.pdf"
                download
                className="clay-button-primary flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
              >
                <Download size={16} />
                Resume
              </a>

              <button
                onClick={handleThemeToggle}
                className="clay-button-secondary flex h-11 w-11 items-center justify-center rounded-xl"
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
