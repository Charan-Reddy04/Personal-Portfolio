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
    iconBg: "bg-[#E9DFFF]",
    iconColor: "text-[#7957C8]",
  },
  {
    name: "LinkedIn",
    subtitle: "Professional Network",
    description:
      "Connect with me to follow my learning journey, projects, and professional updates.",
    url: "https://www.linkedin.com/in/charan571/",
    icon: FaLinkedin,
    label: "Connect on LinkedIn",
    iconBg: "bg-[#DCEEFF]",
    iconColor: "text-[#7957C8]",
  },
  {
    name: "LeetCode",
    subtitle: "Data Structures & Algorithms",
    description:
      "Visit my profile to explore my coding practice and problem-solving progress.",
    url: "https://leetcode.com/u/VenkataCharan_0412/",
    icon: SiLeetcode,
    label: "View LeetCode",
    iconBg: "bg-[#FFE5D5]",
    iconColor: "text-[#302A40]",
  },
  {
    name: "HackerRank",
    subtitle: "Coding Practice & Skills",
    description:
      "Explore coding challenges, practice activities, and skill certifications.",
    url: "https://www.hackerrank.com/",
    icon: FaHackerrank,
    label: "View HackerRank",
    iconBg: "bg-[#DDF5E8]",
    iconColor: "text-[#302A40]",
  },
  {
    name: "CodeChef",
    subtitle: "Competitive Programming",
    description:
      "Explore competitive programming challenges and improve coding skills.",
    url: "https://www.codechef.com/",
    icon: SiCodechef,
    label: "View CodeChef",
    iconBg: "bg-[#FFE5D5]",
    iconColor: "text-[#7957C8]",
  },
  {
    name: "Take U Forward",
    subtitle: "DSA & Interview Preparation",
    description:
      "Explore structured data structures and algorithms tutorials and interview preparation resources.",
    url: "https://takeuforward.org/",
    icon: Code2,
    label: "Explore TUF",
    iconBg: "bg-[#E9DFFF]",
    iconColor: "text-[#7957C8]",
  },
  {
    name: "GeeksforGeeks",
    subtitle: "Computer Science & DSA",
    description:
      "Learn computer science concepts, practice coding problems, and prepare for technical interviews.",
    url: "https://www.geeksforgeeks.org/",
    icon: SiGeeksforgeeks,
    label: "Explore GeeksforGeeks",
    iconBg: "bg-[#DDF5E8]",
    iconColor: "text-[#302A40]",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[#F7F5FC] py-24 transition-colors duration-300 dark:bg-[#13101C]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#7957C8]">
            Profiles & Resources
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#302A40] dark:text-white sm:text-5xl">
            Find me <span className="text-[#7957C8]">online.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
            Explore my coding profiles, development projects, professional
            network, and favorite learning resources.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                whileHover={{ y: -5 }}
                className="clay-card group flex flex-col rounded-[28px] p-6 transition-all duration-300 hover:border-[#7957C8]/40 hover:shadow-[8px_14px_28px_-4px_rgba(121,87,200,0.16)]"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/70 ${profile.iconBg} shadow-[3px_4px_10px_rgba(48,42,64,0.06),inset_2px_2px_3px_rgba(255,255,255,0.95),inset_-2px_-2px_3px_rgba(121,87,200,0.08)]`}>
                    <Icon
                      size={25}
                      className={`${profile.iconColor}`}
                      style={{ strokeWidth: 2 }}
                    />
                  </div>

                  <ExternalLink
                    size={17}
                    className="text-[#746C82] transition-colors group-hover:text-[#7957C8] dark:text-[#A59EBA]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-black text-[#302A40] dark:text-white">
                  {profile.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#7957C8]">
                  {profile.subtitle}
                </p>

                <p className="mt-4 flex-1 text-sm leading-6 text-[#746C82] dark:text-[#A59EBA]">
                  {profile.description}
                </p>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#302A40] transition-colors duration-200 hover:text-[#7957C8] dark:text-[#F4F1FA]"
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
