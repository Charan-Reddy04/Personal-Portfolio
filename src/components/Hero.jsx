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
      className="relative min-h-screen overflow-hidden bg-[#F7F5FC] pt-32 transition-colors duration-300 dark:bg-[#13101C]"
    >
      {/* Background Soft Pastel Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E9DFFF]/40 blur-3xl dark:bg-[#7957C8]/10" />

        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#DCEEFF]/40 blur-3xl dark:bg-[#2C2442]/30" />

        <div className="absolute -left-12 bottom-1/4 h-64 w-64 rounded-full bg-[#FFE5D5]/35 blur-3xl dark:bg-[#7957C8]/5" />
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
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E9DFFF] bg-white px-4 py-2 text-sm font-semibold text-[#302A40] shadow-[3px_4px_10px_rgba(48,42,64,0.06),inset_2px_2px_3px_rgba(255,255,255,0.95),inset_-2px_-2px_3px_rgba(121,87,200,0.05)]"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#7957C8] shadow-[0_0_8px_rgba(121,87,200,0.6)]" />

            Computer Science Student
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-[#302A40] dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-[#7957C8]">
              Charan Kumar Reddy
            </span>
          </h1>

          {/* Role */}
          <p className="mt-7 text-2xl font-bold text-[#302A40] dark:text-[#F4F1FA] sm:text-3xl">
            Full Stack Developer{" "}
            <span className="text-[#7957C8]">·</span>{" "}
            AI/ML Enthusiast
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
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
              className="clay-button-primary group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-white"
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
              className="clay-button-secondary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold"
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
              className="clay-button-secondary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-semibold"
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
              className="clay-button-secondary flex h-11 w-11 items-center justify-center rounded-2xl text-[#746C82]"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/charan571/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="clay-button-secondary flex h-11 w-11 items-center justify-center rounded-2xl text-[#746C82]"
            >
              <FaLinkedin size={20} />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/VenkataCharan_0412/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="clay-button-secondary flex h-11 w-11 items-center justify-center rounded-2xl text-[#746C82]"
            >
              <Code2 size={20} />
            </a>

            {/* Email */}
            <a
              href="mailto:singamcherry571@gmail.com"
              aria-label="Email"
              className="clay-button-secondary flex h-11 w-11 items-center justify-center rounded-2xl text-[#746C82]"
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
          <div className="clay-card relative aspect-square rounded-[28px] p-6">

            {/* Profile Placeholder */}
            <div className="flex h-full items-center justify-center rounded-[22px] border-2 border-dashed border-[#E9DFFF] bg-[#F7F5FC]">
              <div className="text-center">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#E9DFFF] text-[#7957C8] shadow-[3px_4px_12px_rgba(121,87,200,0.15),inset_2px_2px_3px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(121,87,200,0.15)]">
                  <Code2
                    size={48}
                    strokeWidth={1.5}
                  />
                </div>

                <p className="mt-6 text-lg font-bold text-[#302A40] dark:text-white">
                  Profile Image
                </p>

                <p className="mt-2 text-sm text-[#746C82] dark:text-[#A59EBA]">
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
              className="clay-card absolute -bottom-5 -left-5 rounded-2xl px-5 py-4"
            >
              <p className="inline-block rounded-md bg-[#FFE5D5] px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[#302A40]">
                Focus
              </p>

              <p className="mt-1 font-bold text-[#302A40] dark:text-white">
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
