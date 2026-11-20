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
      className="relative bg-[#F7F5FC] py-24 transition-colors duration-300 dark:bg-[#13101C]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#7957C8]">
            Achievements
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#302A40] dark:text-white sm:text-5xl">
            Milestones I've{" "}
            <span className="text-[#7957C8]">achieved.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
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
              whileHover={{ y: -6 }}
              className="clay-card group rounded-[2.5rem] p-8 transition-all duration-300 hover:border-[#7957C8]/40 hover:shadow-[0_24px_48px_-6px_rgba(121,87,200,0.16)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE5D5] text-[#C46830] shadow-[0_4px_10px_-2px_rgba(196,104,48,0.15),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(196,104,48,0.12)] dark:bg-[#3D2517] dark:text-[#FFB58A]">
                <Trophy size={22} />
              </div>

              <h3 className="mt-7 text-xl font-black text-[#302A40] dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#746C82] dark:text-[#A59EBA]">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#7957C8] dark:text-[#C4B5FD]">
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
