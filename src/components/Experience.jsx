import { motion } from "framer-motion";
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    type: "Experience",
    role: "Add Your Role / Position",
    company: "Add Company / Organization",
    period: "Add Duration",
    description:
      "Add a short description of your responsibilities, contributions, and the skills you developed during this experience.",
    skills: ["React", "JavaScript", "Node.js"],
  },
  {
    type: "Project Experience",
    role: "AI Campus Placement Operations & Interview Coordination Agent",
    company: "Hackathon Project",
    period: "Add Duration",
    description:
      "Worked on a full-stack placement operations application involving student data, job eligibility, AI-based matching, interview coordination, notifications, and analytics.",
    skills: ["React", "Node.js", "MongoDB", "AI/ML"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-24 dark:bg-[#050816]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0057FF]">
            Experience
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Learning by{" "}
            <span className="text-[#0057FF]">building.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Experiences that have helped me apply my technical knowledge,
            solve practical problems, and grow as a developer.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.role}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="group rounded-3xl border border-slate-200 bg-[#F8F7F4] p-7 transition-transform duration-300 dark:border-slate-800 dark:bg-[#0B1220]"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0057FF] dark:bg-slate-900">
                  <BriefcaseBusiness size={22} strokeWidth={1.8} />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#0057FF] dark:bg-blue-950/40 dark:text-[#3380FF]">
                  {experience.type}
                </span>
              </div>

              {/* Content */}
              <div className="mt-7">
                <p className="text-sm font-semibold text-[#0057FF]">
                  {experience.company}
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                  {experience.role}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {experience.period}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {experience.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Small interaction */}
              <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors duration-200 group-hover:text-[#0057FF] dark:text-slate-400 dark:group-hover:text-[#3380FF]">
                Explore experience
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;