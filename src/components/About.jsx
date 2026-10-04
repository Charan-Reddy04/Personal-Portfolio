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
  },
  {
    icon: Server,
    title: "Backend",
    text: "Node.js · Express.js · REST APIs",
  },
  {
    icon: Brain,
    title: "AI / ML",
    text: "Python · Scikit-learn · Data Analysis",
  },
  {
    icon: GitBranch,
    title: "Development",
    text: "Git · GitHub · VS Code",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 dark:bg-[#050816]"
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
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Building with curiosity,
            <span className="text-[#0057FF]">
              {" "}learning with purpose.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
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
          className="mt-14 rounded-3xl border border-slate-200 bg-[#F8F7F4] p-8 dark:border-slate-800 dark:bg-[#0B1220] sm:p-10"
        >
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            {/* A Little About My Journey */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0057FF] dark:bg-blue-950/40">
                  <Sparkles size={22} />
                </div>

                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                  A little about my journey
                </h3>
              </div>

              <div className="mt-6 space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">

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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0057FF]">
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
                      className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-900"
                    >
                      <div className="flex items-start gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0057FF] transition-transform duration-300 group-hover:scale-105 dark:bg-blue-950/40">
                          <Icon size={19} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
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