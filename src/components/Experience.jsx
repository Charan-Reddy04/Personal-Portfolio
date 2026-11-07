
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

const profiles = [
  {
    name: "GitHub",
    subtitle: "Development & Open Source",
    description:
      "Explore my repositories, full-stack applications, and machine learning projects.",
    url: "https://github.com/Charan-Reddy04",
    icon: FaGithub,
    label: "View GitHub",
    color: "text-slate-900 dark:text-white",
  },
  {
    name: "LinkedIn",
    subtitle: "Professional Network",
    description:
      "Connect with me to follow my learning journey, projects, and professional updates.",
    url: "https://www.linkedin.com/in/charan571/",
    icon: FaLinkedin,
    label: "Connect on LinkedIn",
    color: "text-[#0A66C2]",
  },
  {
    name: "LeetCode",
    subtitle: "Data Structures & Algorithms",
    description:
      "Visit my profile to explore my coding practice and problem-solving progress.",
    url: "https://leetcode.com/u/VenkataCharan_0412/",
    icon: SiLeetcode,
    label: "View LeetCode",
    color: "text-[#FFA116]",
  },
  {
    name: "HackerRank",
    subtitle: "Coding Practice & Skills",
    description:
      "Explore coding challenges, practice activities, and skill certifications.",
    url: "https://www.hackerrank.com/",
    icon: FaHackerrank,
    label: "View HackerRank",
    color: "text-[#2EC866]",
  },
  {
    name: "CodeChef",
    subtitle: "Competitive Programming",
    description:
      "Explore competitive programming challenges and improve coding skills.",
    url: "https://www.codechef.com/",
    icon: SiCodechef,
    label: "View CodeChef",
    color: "text-[#5B4638] dark:text-[#D9C2A7]",
  },
  {
    name: "Take U Forward",
    subtitle: "DSA & Interview Preparation",
    description:
      "Explore structured data structures and algorithms tutorials and interview preparation resources.",
    url: "https://takeuforward.org/",
    icon: Code2,
    label: "Explore TUF",
    color: "text-[#0057FF]",
  },
  {
    name: "GeeksforGeeks",
    subtitle: "Computer Science & DSA",
    description:
      "Learn computer science concepts, practice coding problems, and prepare for technical interviews.",
    url: "https://www.geeksforgeeks.org/",
    icon: SiGeeksforgeeks,
    label: "Explore GeeksforGeeks",
    color: "text-[#2F8D46]",
  },
];

function Experience() {
  return (
    <section
      id="profiles"
      className="scroll-mt-24 bg-[#F8F7F4] py-24 dark:bg-[#050816]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0057FF]">
            Profiles & Resources
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Find me <span className="text-[#0057FF]">online.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Explore my coding profiles, development projects, professional
            network, and favorite learning resources.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <motion.article
                key={profile.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.07,
                }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:border-[#0057FF]/40 hover:shadow-md dark:border-slate-800 dark:bg-[#0B1220] dark:hover:border-[#0057FF]/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
  <Icon
    size={27}
    className={`${profile.color} opacity-100`}
    style={{ strokeWidth: 2 }}
  />
</div>

                  <ExternalLink
                    size={17}
                    className="text-slate-400 transition-colors group-hover:text-[#0057FF] dark:text-slate-500"
                  />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                  {profile.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#0057FF]">
                  {profile.subtitle}
                </p>

                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {profile.description}
                </p>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition-colors duration-200 hover:text-[#0057FF] dark:text-slate-200 dark:hover:text-[#3380FF]"
                >
                  {profile.label}
                  <ExternalLink size={15} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
