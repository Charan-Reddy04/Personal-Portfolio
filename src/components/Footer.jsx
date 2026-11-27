import { ArrowUp } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8F7F4] dark:border-slate-800 dark:bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div>
            <a
              href="#home"
              className="text-xl font-black tracking-tight text-slate-950 dark:text-white"
            >
              CHARAN<span className="text-[#0057FF]">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Full Stack Developer · AI/ML Enthusiast
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
            <a
              href="#home"
              className="transition-colors duration-200 hover:text-[#0057FF]"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition-colors duration-200 hover:text-[#0057FF]"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition-colors duration-200 hover:text-[#0057FF]"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition-colors duration-200 hover:text-[#0057FF]"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="transition-colors duration-200 hover:text-[#0057FF]"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-[#0057FF]"
            >
              Contact
            </a>
          </nav>

          {/* Social + Back to Top */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/Charan-Reddy04"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:text-[#0057FF] dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-900 dark:hover:text-[#3380FF]"
            >
              <FaGithub size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/charan571/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:text-[#0057FF] dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-900 dark:hover:text-[#3380FF]"
            >
              <FaLinkedin size={17} />
            </a>

            {/* Back To Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0057FF] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#0046CC]"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Charan Kumar Reddy. All rights reserved.
            </p>

            <p>
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;