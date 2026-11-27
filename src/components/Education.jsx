import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    level: "B.Tech",
    title: "Computer Science & Engineering",
    institution: "Vignan University, Vadlamudi, Guntur",
    details: "3rd Year  · 5th Semester",
    score: "CGPA: 8.23 / 10",
    status: "Currently Studying",
  },
  {
    icon: School,
    level: "Intermediate",
    title: "Higher Secondary Education",
    institution: "Sri Chaitanya Junior College, B. Thandrapadu, Kurnool",
    details: "960 / 1000 · 96%",
    status: "Completed",
  },
  {
    icon: BookOpen,
    level: "Class X",
    title: "Secondary School Education",
    institution: "Good Shepherd EM High School, Nandyal",
    details: "550 / 600 · 91.67%",
    status: "Completed",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-[#F8F7F4] py-24 dark:bg-[#050816]"
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
            Education
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            My academic{" "}
            <span className="text-[#0057FF]">journey.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            My academic background and the foundation that shaped my
            interest in computer science and technology.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.level}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="flex min-h-[300px] flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-transform duration-300 dark:border-slate-800 dark:bg-[#0B1220]"
              >
                {/* Icon + Level */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0057FF] dark:bg-blue-950/40">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {item.level}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7 flex flex-1 flex-col">
                  <h3 className="text-xl font-black leading-7 text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-6 text-[#0057FF]">
                    {item.institution}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.details}
                  </p>

                  {item.score && (
                    <p className="mt-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                      {item.score}
                    </p>
                  )}

                  <div className="mt-auto pt-6">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${item.status === "Currently Studying"
                          ? "bg-blue-50 text-[#0057FF] dark:bg-blue-950/40 dark:text-[#3380FF]"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;