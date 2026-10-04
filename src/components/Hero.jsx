import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F8F7F4] pt-32 dark:bg-[#050816]"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-950/20" />

        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-slate-100/60 blur-3xl dark:bg-slate-900/30" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-[#0057FF]" />

            Computer Science Student
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-[#0057FF]">
              Charan Kumar Reddy
            </span>
          </h1>

          {/* Role */}
          <p className="mt-7 text-2xl font-bold text-slate-800 dark:text-slate-200 sm:text-3xl">
            Full Stack Developer{" "}
            <span className="text-[#0057FF]">·</span>{" "}
            AI/ML Enthusiast
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            I build modern web applications and intelligent solutions
            with clean code, practical problem solving, and a strong
            interest in AI and machine learning.
          </p>

          {/* ================= MAIN BUTTONS ================= */}
          <div className="mt-9 flex flex-wrap gap-4">

            {/* View Projects */}
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#0057FF] px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-[#0046CC]"
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Charan-Reddy04"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition-all duration-200 hover:border-[#0057FF] hover:text-[#0057FF] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[#0057FF] dark:hover:text-[#3380FF]"
            >
              <FaGithub size={18} />

              GitHub
            </motion.a>

            {/* Resume */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition-all duration-200 hover:border-[#0057FF] hover:text-[#0057FF] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[#0057FF] dark:hover:text-[#3380FF]"
            >
              <Download size={18} />

              Resume
            </motion.a>
          </div>

          {/* ================= SOCIAL ICONS ================= */}
          <div className="mt-9 flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/Charan-Reddy04"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#0057FF] hover:text-[#0057FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-[#0057FF] dark:hover:text-[#3380FF]"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/charan571/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#0057FF] hover:text-[#0057FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-[#0057FF] dark:hover:text-[#3380FF]"
            >
              <FaLinkedin size={20} />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/VenkataCharan_0412/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#0057FF] hover:text-[#0057FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-[#0057FF] dark:hover:text-[#3380FF]"
            >
              <Code2 size={20} />
            </a>

            {/* Email */}
            <a
              href="mailto:singamcherry571@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:-translate-y-1 hover:border-[#0057FF] hover:text-[#0057FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-[#0057FF] dark:hover:text-[#3380FF]"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT PROFILE AREA ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#0B1220]">

            {/* Profile Placeholder */}
            <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 dark:border-slate-700">
              <div className="text-center">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 text-[#0057FF] dark:bg-blue-950/40">
                  <Code2
                    size={48}
                    strokeWidth={1.5}
                  />
                </div>

                <p className="mt-6 text-lg font-bold text-slate-900 dark:text-white">
                  Profile Image
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Add your photo here later
                </p>

              </div>
            </div>

            {/* Floating Focus Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Focus
              </p>

              <p className="mt-1 font-bold text-slate-900 dark:text-white">
                Full Stack + AI/ML
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;