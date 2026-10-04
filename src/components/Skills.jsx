import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Brain,
  Database,
  Wrench,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Recommendation Systems",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Development & DevOps Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
  {
    title: "Core Computer Science",
    icon: Cpu,
    skills: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "OOP"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F8F7F4] py-24 dark:bg-[#050816]"
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
            Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Technologies I{" "}
            <span className="text-[#0057FF]">work with.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            A growing set of technical skills covering programming,
            full-stack development, AI/ML, databases, tools, and core
            computer science concepts.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-[#0B1220] dark:hover:border-blue-900"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0057FF] transition-transform duration-300 group-hover:scale-105 dark:bg-blue-950/40">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-[#0057FF] hover:bg-blue-50 hover:text-[#0057FF] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-[#0057FF] dark:hover:bg-blue-950/30 dark:hover:text-[#3380FF]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;