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
      className="bg-[#F8F7F4] py-24 dark:bg-[#050816]"
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
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0057FF]">
            Certifications
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Learning backed by{" "}
            <span className="text-[#0057FF]">certifications.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
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
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-lg dark:border-slate-800 dark:bg-[#0B1220] dark:hover:border-blue-900"
            >

              {/* Certificate Image */}
              <div className="group relative overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                <img
                  src={item.image}
                  alt={`${item.title} certificate`}
                  className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Icon + Issuer */}
                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0057FF] dark:bg-blue-950/40">
                    <Award size={21} />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {item.issuer}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0057FF]">
                    <BadgeCheck size={17} />
                    Certified
                  </div>

                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-[#0057FF] dark:text-slate-300 dark:hover:text-[#3380FF]"
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