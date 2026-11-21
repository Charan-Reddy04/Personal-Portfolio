import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "FoodRush",
    category: "Full Stack Web Application",
    description:
      "A full-stack web application project focused on building a practical food ordering experience with a modern web interface.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Charan-Reddy04/foodrush",
    demo: "https://foodrush-07.onrender.com",
    badgeBg: "bg-[#E9DFFF]",
    badgeText: "text-[#7957C8]",
  },
  {
    number: "02",
    title: "SkillTrack",
    category: "MERN Stack Web Application",
    description:
      "A comprehensive full-stack platform designed to help developers monitor their learning roadmap, track technical competencies, and manage skill progress.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Charan-Reddy04/SkillTrack",
    demo: "https://skill-track-eight-virid.vercel.app/",
    badgeBg: "bg-[#DCEEFF]",
    badgeText: "text-[#7957C8]",
  },
  {
    number: "03",
    title: "AI Placement Agent",
    category: "AI & Full Stack Application",
    description:
      "An intelligent placement coordination platform streamlining campus hiring operations, candidate assessment workflows, and interview management.",
    technologies: ["React", "Node.js", "AI Integration", "MongoDB"],
    github: "https://github.com/Charan-Reddy04/Ai-Placement-Agent",
    demo: "https://ai-placement-agent-1.onrender.com/",
    badgeBg: "bg-[#DDF5E8]",
    badgeText: "text-[#302A40]",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#F7F5FC] py-24 transition-colors duration-300 dark:bg-[#13101C]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#7957C8]">
            Projects
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#302A40] dark:text-white sm:text-5xl">
            Things I've{" "}
            <span className="text-[#7957C8]">built.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
            A selection of projects where I have explored full-stack
            development, machine learning, and AI-based applications.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="clay-card group relative flex min-h-[470px] flex-col overflow-hidden rounded-[28px] p-7 sm:p-8 transition-all duration-300 hover:border-[#7957C8]/40 hover:shadow-[8px_16px_32px_-4px_rgba(121,87,200,0.18)]"
            >
              {/* Subtle Pastel Glow */}
              <div className="pointer-events-none absolute -left-32 -top-20 h-40 w-40 rounded-full bg-[#E9DFFF]/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top */}
              <div className="relative flex items-center justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${project.badgeBg} ${project.badgeText} text-sm font-bold shadow-[3px_4px_10px_rgba(121,87,200,0.12),inset_2px_2px_3px_rgba(255,255,255,0.95),inset_-2px_-2px_3px_rgba(121,87,200,0.08)]`}>
                  {project.number}
                </span>

                <ArrowUpRight
                  size={21}
                  className="text-[#746C82] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#7957C8]"
                />
              </div>

              {/* Project Content */}
              <div className="relative mt-8 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7957C8]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-[#302A40] dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#746C82] dark:text-[#A59EBA]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-xl border border-[#E9DFFF] bg-[#F7F5FC] px-3 py-1.5 text-xs font-semibold text-[#746C82] shadow-[1px_2px_4px_rgba(48,42,64,0.03),inset_1px_1px_2px_rgba(255,255,255,0.9)] transition-colors duration-200 group-hover:border-[#7957C8]/40 group-hover:bg-[#E9DFFF]/40 group-hover:text-[#7957C8]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="relative mt-8 grid grid-cols-2 gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="clay-button-secondary inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="clay-button-primary inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Charan-Reddy04"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#746C82] transition-colors hover:text-[#7957C8]"
          >
            View more on GitHub
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
