import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    title: "NPTEL – Principles of Management",
    issuer: "NPTEL",
    description:
      "Completed the NPTEL Principles of Management course with Elite certification.",
    image: "/certificates/1787659490858-252a9768-4b86-4ce5-8e15-0eec57cad980_1.jpg",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#302A40] dark:text-white sm:text-5xl">
            Learning backed by{" "}
            <span className="text-[#7957C8]">certifications.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
            Courses and certifications that complement my technical
            learning and development journey.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {certifications.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="clay-card group overflow-hidden rounded-[2.5rem] transition-all duration-300 hover:border-[#7957C8]/40 hover:shadow-[0_24px_48px_-6px_rgba(121,87,200,0.16)]"
            >

              {/* Certificate Image */}
              <div className="group relative overflow-hidden border-b border-[#E9DFFF]/80 bg-[#F7F5FC] dark:border-[#2C2442] dark:bg-[#161320]">
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-7 sm:p-8">

                {/* Icon + Issuer */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9DFFF] text-[#7957C8] shadow-[0_4px_10px_-2px_rgba(121,87,200,0.15),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(121,87,200,0.1)] dark:bg-[#2C2442] dark:text-[#C4B5FD]">
                    <Award size={22} />
                  </div>

                  <span className="rounded-full border border-[#E9DFFF]/80 bg-[#F7F5FC] px-3.5 py-1 text-xs font-bold text-[#746C82] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] dark:border-[#2C2442] dark:bg-[#161320] dark:text-[#A59EBA]">
                    {item.issuer}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black text-[#302A40] dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#746C82] dark:text-[#A59EBA]">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#7957C8] dark:text-[#C4B5FD]">
                    <BadgeCheck size={17} />
                    Certified
                  </div>

                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#302A40] transition-colors duration-200 hover:text-[#7957C8] dark:text-[#F4F1FA] dark:hover:text-[#C4B5FD]"
                  >
                    View Certificate
                    <ExternalLink size={15} />
                  </a>

                </div>

              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;
