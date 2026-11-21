import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Brain,
  GitBranch,
  Sparkles,
} from "lucide-react";

const workItems = [
  {
    icon: Globe,
    title: "Frontend",
    text: "React.js · HTML · CSS",
    bgColor: "bg-[#E9DFFF]",
    iconColor: "text-[#7957C8]",
  },
  {
    icon: Server,
    title: "Backend",
    text: "Node.js · Express.js · REST APIs",
    bgColor: "bg-[#DCEEFF]",
    iconColor: "text-[#3B82F6]",
  },
  {
    icon: Brain,
    title: "AI / ML",
    text: "Python · Scikit-learn · Data Analysis",
    bgColor: "bg-[#DDF5E8]",
    iconColor: "text-[#10B981]",
  },
  {
    icon: GitBranch,
    title: "Development",
    text: "Git · GitHub · VS Code",
    bgColor: "bg-[#FFE5D5]",
    iconColor: "text-[#F97316]",
  },
];

function About() {
  return (
    <section
      id="about"
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
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#302A40] dark:text-white sm:text-5xl">
            Building with curiosity,
            <span className="text-[#7957C8]">
              {" "}learning with purpose.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
            I'm a Computer Science student interested in building useful
            software and exploring intelligent technologies. I enjoy
            understanding how things work, solving problems, and turning
            ideas into practical applications.
          </p>
        </motion.div>

        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="clay-card mt-14 rounded-[2.5rem] p-8 sm:p-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            {/* A Little About My Journey */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E9DFFF] text-[#7957C8] shadow-[0_4px_10px_-2px_rgba(121,87,200,0.15),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_3px_rgba(121,87,200,0.12)] dark:bg-[#2C2442] dark:text-[#C4B5FD]">
                  <Sparkles size={22} />
                </div>

                <h3 className="text-2xl font-black text-[#302A40] dark:text-white">
                  A little about my journey
                </h3>
              </div>

              <div className="mt-6 space-y-5 text-base leading-7 text-[#746C82] dark:text-[#A59EBA]">

                <p>
                  My journey in technology started with learning programming
                  fundamentals and gradually expanded into web development,
                  databases, machine learning, and problem solving.
                </p>

                <p>
                  I enjoy working across different parts of a project —
                  from designing clean user interfaces to developing APIs,
                  connecting databases, and building practical applications.
                </p>

                <p>
                  Problem solving is an important part of my learning journey.
                  I regularly practice Data Structures and Algorithms while
                  improving my ability to approach problems logically and
                  write efficient solutions.
                </p>

                <p>
                  Currently, I'm focused on strengthening my development
                  skills, exploring AI and machine learning, and building
                  projects that demonstrate real-world thinking.
                </p>

              </div>
            </div>

            {/* What I Work With */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7957C8]">
                What I Work With
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {workItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -3 }}
                      className="group rounded-2xl border border-[#E9DFFF]/80 bg-[#F7F5FC] p-4 shadow-[0_6px_16px_-2px_rgba(48,42,64,0.05),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(121,87,200,0.04)] transition-all duration-300 hover:border-[#7957C8]/35 hover:shadow-[0_12px_24px_-4px_rgba(121,87,200,0.12)] dark:border-[#2C2442] dark:bg-[#161320] dark:shadow-[0_6px_16px_-2px_rgba(0,0,0,0.35)]"
                    >
                      <div className="flex items-start gap-3">

                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.bgColor} ${item.iconColor} shadow-[0_4px_8px_-1px_rgba(48,42,64,0.06),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_3px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-105 dark:bg-[#2C2442] dark:text-[#C4B5FD]`}>
                          <Icon size={20} />
                        </div>

                        <div>
                          <h4 className="font-bold text-[#302A40] dark:text-white">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-[#746C82] dark:text-[#A59EBA]">
                            {item.text}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
