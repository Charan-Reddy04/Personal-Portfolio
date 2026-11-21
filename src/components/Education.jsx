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
    iconBg: "bg-[#E9DFFF]",
    levelBg: "bg-[#E9DFFF]",
    statusBg: "bg-[#E9DFFF] text-[#7957C8] border-[#7957C8]/25",
  },
  {
    icon: School,
    level: "Intermediate",
    title: "Higher Secondary Education",
    institution: "Sri Chaitanya Junior College, B. Thandrapadu, Kurnool",
    details: "960 / 1000 · 96%",
    status: "Completed",
    iconBg: "bg-[#DCEEFF]",
    levelBg: "bg-[#DCEEFF]",
    statusBg: "bg-[#DDF5E8] text-[#302A40] border-[#DDF5E8]",
  },
  {
    icon: BookOpen,
    level: "Class X",
    title: "Secondary School Education",
    institution: "Good Shepherd EM High School, Nandyal",
    details: "550 / 600 · 91.67%",
    status: "Completed",
    iconBg: "bg-[#FFE5D5]",
    levelBg: "bg-[#FFE5D5]",
    statusBg: "bg-[#DDF5E8] text-[#302A40] border-[#DDF5E8]",
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
                className="clay-card flex min-h-[300px] flex-col rounded-[28px] p-7 sm:p-8 transition-all duration-300 hover:border-[#7957C8]/40 hover:shadow-[8px_14px_28px_-4px_rgba(121,87,200,0.16)]"
              >
                {/* Icon + Level */}
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} text-[#7957C8] shadow-[3px_4px_10px_rgba(48,42,64,0.06),inset_2px_2px_3px_rgba(255,255,255,0.95),inset_-2px_-2px_3px_rgba(121,87,200,0.08)]`}>
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className={`rounded-full border border-white/60 ${item.levelBg} px-3.5 py-1 text-xs font-bold text-[#302A40] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9)]`}>
                    {item.level}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7 flex flex-1 flex-col">
                  <h3 className="text-xl font-black leading-7 text-[#302A40] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold leading-6 text-[#7957C8]">
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
                      className={`inline-flex rounded-full border px-3.5 py-1.5 text-xs font-bold shadow-[2px_3px_6px_rgba(48,42,64,0.06),inset_1.5px_1.5px_2px_rgba(255,255,255,0.85)] ${item.statusBg}`}
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
