import { motion } from "framer-motion";
import { Trophy, BadgeCheck } from "lucide-react";

const achievements = [
  {
    title: "Hackathon Project",
    description:
      "Built an AI-powered campus placement operations and interview coordination application.",
    iconBg: "bg-[#FFE5D5]",
    iconColor: "text-[#302A40]",
  },
  {
    title: "Machine Learning Projects",
    description:
      "Developed machine learning projects involving credit scoring and recommendation systems.",
    iconBg: "bg-[#DDF5E8]",
    iconColor: "text-[#302A40]",
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
              className="clay-card group rounded-[28px] p-8 transition-all duration-300 hover:border-[#7957C8]/40 hover:shadow-[8px_14px_28px_-4px_rgba(121,87,200,0.16)]"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} shadow-[3px_4px_10px_rgba(48,42,64,0.06),inset_2px_2px_3px_rgba(255,255,255,0.95),inset_-2px_-2px_3px_rgba(121,87,200,0.08)]`}>
                <Trophy size={22} />
              </div>

              <h3 className="mt-7 text-xl font-black text-[#302A40] dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#746C82] dark:text-[#A59EBA]">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#7957C8]">
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
