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
      className="relative bg-[#F7F5FC] py-24 transition-colors duration-300 dark:bg-[#13101C]"
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
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#7957C8]">
            Education
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#302A40] dark:text-white sm:text-5xl">
            My academic{" "}
            <span className="text-[#7957C8]">journey.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
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
                whileHover={{ y: -6 }}
                className="clay-card flex min-h-[300px] flex-col rounded-[2.5rem] p-7 sm:p-8 transition-all duration-300 hover:border-[#7957C8]/40 hover:shadow-[0_22px_44px_-6px_rgba(121,87,200,0.15)]"
              >
                {/* Icon + Level */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9DFFF] text-[#7957C8] shadow-[0_4px_10px_-2px_rgba(121,87,200,0.15),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(121,87,200,0.12)] dark:bg-[#2C2442] dark:text-[#C4B5FD]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="rounded-full border border-[#E9DFFF]/80 bg-[#F7F5FC] px-3.5 py-1 text-xs font-bold text-[#746C82] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] dark:border-[#2C2442] dark:bg-[#161320] dark:text-[#A59EBA]">
                    {item.level}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7 flex flex-1 flex-col">
                  <h3 className="text-xl font-black leading-7 text-[#302A40] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-6 text-[#7957C8] dark:text-[#C4B5FD]">
                    {item.institution}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#746C82] dark:text-[#A59EBA]">
                    {item.details}
                  </p>

                  {item.score && (
                    <p className="mt-2 text-sm font-bold text-[#302A40] dark:text-[#F4F1FA]">
                      {item.score}
                    </p>
                  )}

                  <div className="mt-auto pt-6">
                    <span
                      className={`inline-flex rounded-full px-3.5 py-1.5 text-xs font-bold ${
                        item.status === "Currently Studying"
                          ? "border border-[#7957C8]/25 bg-[#E9DFFF] text-[#7957C8] shadow-[0_2px_6px_rgba(121,87,200,0.12),inset_0_1.5px_2px_rgba(255,255,255,0.85)] dark:bg-[#2C2442] dark:text-[#C4B5FD]"
                          : "border border-[#A7E7C4] bg-[#DDF5E8] text-[#1E7449] shadow-[0_2px_6px_rgba(30,116,73,0.1),inset_0_1.5px_2px_rgba(255,255,255,0.85)] dark:border-[#235237] dark:bg-[#173022] dark:text-[#6EE7B7]"
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
