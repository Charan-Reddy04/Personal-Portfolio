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
  },
  {
    number: "02",
    title: "Credit Scoring Model",
    category: "Machine Learning",
    description:
      "A machine learning project focused on developing a credit scoring model and applying data-driven techniques to credit-related prediction.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github:
      "https://github.com/Charan-Reddy04/CodeAlpha-Task1-Credit-Scoring-Model",
    demo:
      "https://github.com/Charan-Reddy04/CodeAlpha-Task1-Credit-Scoring-Model",
  },
  {
    number: "03",
    title: "Handwritten Character Recognition",
    category: "Deep Learning",
    description:
      "An AI project focused on recognizing handwritten characters using machine learning and deep learning techniques.",
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    github:
      "https://github.com/Charan-Reddy04/CodeAlpha_Task3_Handwritten_Character_Recognition",
    demo:
      "https://github.com/Charan-Reddy04/CodeAlpha_Task3_Handwritten_Character_Recognition",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-24 dark:bg-[#050816]"
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
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0057FF]">
            Projects
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Things I've{" "}
            <span className="text-[#0057FF]">built.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
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
              className="group relative flex min-h-[470px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-[#F8F7F4] p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-[#0B1220] dark:hover:border-blue-900"
            >
              {/* Subtle Shine */}
              <div className="pointer-events-none absolute -left-32 -top-20 h-40 w-40 rounded-full bg-white/60 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-blue-400/10" />

              {/* Top */}
              <div className="relative flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#0057FF] shadow-sm dark:bg-slate-900">
                  {project.number}
                </span>

                <ArrowUpRight
                  size={21}
                  className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0057FF]"
                />
              </div>

              {/* Project Content */}
              <div className="relative mt-8 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0057FF]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-slate-950 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:border-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:group-hover:border-blue-900"
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0057FF] px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0046CC] hover:shadow-lg"
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
            className="group inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-[#0057FF] dark:text-slate-300 dark:hover:text-[#3380FF]"
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