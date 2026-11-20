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
            Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#302A40] dark:text-white sm:text-5xl">
            Technologies I{" "}
            <span className="text-[#7957C8]">work with.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
            A growing set of technical skills covering programming,
            full-stack development, AI/ML, databases, tools, and core
            computer science concepts.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className="clay-card group rounded-[2.25rem] p-7 transition-all duration-300 hover:border-[#7957C8]/40 hover:shadow-[0_22px_44px_-6px_rgba(121,87,200,0.15)]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E9DFFF] text-[#7957C8] shadow-[0_4px_10px_-2px_rgba(121,87,200,0.15),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(121,87,200,0.12)] transition-transform duration-300 group-hover:scale-105 dark:bg-[#2C2442] dark:text-[#C4B5FD]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-bold text-[#302A40] dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-[#E9DFFF]/80 bg-[#F7F5FC] px-3.5 py-1.5 text-sm font-medium text-[#302A40] shadow-[0_2px_6px_rgba(48,42,64,0.03),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1.5px_2px_rgba(121,87,200,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7957C8]/40 hover:bg-[#E9DFFF]/40 hover:text-[#7957C8] dark:border-[#2C2442] dark:bg-[#161320] dark:text-[#F4F1FA] dark:hover:text-[#C4B5FD]"
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
