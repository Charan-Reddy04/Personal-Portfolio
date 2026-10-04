import { motion } from "framer-motion";
import { Trophy, BadgeCheck } from "lucide-react";

const achievements = [
  {
    title: "Hackathon Project",
    description:
      "Built an AI-powered campus placement operations and interview coordination application.",
  },
  {
    title: "Machine Learning Projects",
    description:
      "Developed machine learning projects involving credit scoring and recommendation systems.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-white py-24 dark:bg-[#050816]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0057FF]">
            Achievements
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Milestones I've{" "}
            <span className="text-[#0057FF]">achieved.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Highlights from my learning journey, projects, and technical
            experiences.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-slate-200 bg-[#F8F7F4] p-7 transition-transform duration-300 dark:border-slate-800 dark:bg-[#0B1220]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0057FF] dark:bg-blue-950/40">
                <Trophy size={22} />
              </div>

              <h3 className="mt-7 text-xl font-black text-slate-950 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0057FF]">
                <BadgeCheck size={17} />
                Achievement
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;