import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const formRef = useRef();

  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Let's build something{" "}
            <span className="text-[#0057FF]">together.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Have a project idea, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-[#0B1220] sm:p-9 lg:p-10"
        >
          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center lg:pr-12">

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0057FF] dark:bg-blue-950/40">
                  <Mail size={22} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-950 dark:text-white">
                  Get in touch
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
                  I'm open to new opportunities, collaborations, projects,
                  and conversations about technology.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-8 space-y-5">

                <a
                  href="mailto:singamcherry571@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#0057FF] dark:bg-slate-900">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700 transition-colors duration-200 group-hover:text-[#0057FF] dark:text-slate-300 dark:group-hover:text-[#3380FF]">
                      singamcherry571@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#0057FF] dark:bg-slate-900">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      India
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="mt-8 flex items-center gap-3">

                <a
                  href="https://github.com/Charan-Reddy04"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:text-[#0057FF] dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-900 dark:hover:text-[#3380FF]"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/charan571/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:text-[#0057FF] dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-900 dark:hover:text-[#3380FF]"
                >
                  <FaLinkedin size={19} />
                </a>

                <a
                  href="mailto:singamcherry571@gmail.com"
                  className="ml-1 inline-flex items-center gap-2 text-sm font-bold text-[#0057FF] transition-colors duration-200 hover:text-[#0046CC]"
                >
                  Let's connect
                  <ArrowUpRight size={16} />
                </a>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="mt-10 border-t border-slate-200 pt-10 dark:border-slate-800 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">

              <form
                ref={formRef}
                onSubmit={sendEmail}
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-[#F8F7F4] px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0057FF] focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-blue-950"
                  />
                </div>

                {/* Email */}
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-[#F8F7F4] px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0057FF] focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-blue-950"
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your idea..."
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-[#F8F7F4] px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#0057FF] focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-blue-950"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0057FF] px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0046CC] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}

                  {status !== "sending" && <Send size={16} />}
                </button>

                {/* Success Message */}
                {status === "success" && (
                  <p className="mt-4 text-sm font-semibold text-green-600 dark:text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <p className="mt-4 text-sm font-semibold text-red-600 dark:text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}

              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;