import { ArrowUp } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-[#E9DFFF]/80 bg-[#F7F5FC] transition-colors duration-300 dark:border-[#2C2442] dark:bg-[#13101C]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div>
            <a
              href="#home"
              className="text-xl font-black tracking-tight text-[#302A40] dark:text-white"
            >
              CHARAN<span className="text-[#7957C8]">.</span>
            </a>

            <p className="mt-2 text-sm text-[#746C82] dark:text-[#A59EBA]">
              Full Stack Developer · AI/ML Enthusiast
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#746C82] dark:text-[#A59EBA]">
            <a
              href="#home"
              className="transition-colors duration-200 hover:text-[#7957C8] dark:hover:text-[#C4B5FD]"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition-colors duration-200 hover:text-[#7957C8] dark:hover:text-[#C4B5FD]"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition-colors duration-200 hover:text-[#7957C8] dark:hover:text-[#C4B5FD]"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition-colors duration-200 hover:text-[#7957C8] dark:hover:text-[#C4B5FD]"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="transition-colors duration-200 hover:text-[#7957C8] dark:hover:text-[#C4B5FD]"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-[#7957C8] dark:hover:text-[#C4B5FD]"
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
              className="clay-button-secondary flex h-10 w-10 items-center justify-center rounded-xl text-[#746C82] dark:text-[#A59EBA]"
            >
              <FaGithub size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/charan571/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="clay-button-secondary flex h-10 w-10 items-center justify-center rounded-xl text-[#746C82] dark:text-[#A59EBA]"
            >
              <FaLinkedin size={17} />
            </a>

            {/* Back To Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="clay-button-primary flex h-10 w-10 items-center justify-center rounded-xl text-white"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 border-t border-[#E9DFFF]/80 pt-6 dark:border-[#2C2442]">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-[#746C82] dark:text-[#A59EBA] sm:flex-row">
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
