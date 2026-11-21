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
            Contact
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[#302A40] dark:text-white sm:text-5xl">
            Let's build something{" "}
            <span className="text-[#7957C8]">together.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#746C82] dark:text-[#A59EBA]">
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
          className="clay-card mt-14 rounded-[2.75rem] p-7 sm:p-9 lg:p-12"
        >
          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center lg:pr-12">

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9DFFF] text-[#7957C8] shadow-[0_4px_10px_-2px_rgba(121,87,200,0.15),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(121,87,200,0.12)] dark:bg-[#2C2442] dark:text-[#C4B5FD]">
                  <Mail size={22} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#302A40] dark:text-white">
                  Get in touch
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#746C82] dark:text-[#A59EBA]">
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E9DFFF]/80 bg-[#F7F5FC] text-[#7957C8] shadow-[0_2px_6px_rgba(48,42,64,0.03),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1.5px_2px_rgba(121,87,200,0.04)] dark:border-[#2C2442] dark:bg-[#161320] dark:text-[#C4B5FD]">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#746C82]/70 dark:text-[#A59EBA]/70">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#302A40] transition-colors duration-200 group-hover:text-[#7957C8] dark:text-[#F4F1FA] dark:group-hover:text-[#C4B5FD]">
                      singamcherry571@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E9DFFF]/80 bg-[#F7F5FC] text-[#7957C8] shadow-[0_2px_6px_rgba(48,42,64,0.03),inset_0_1.5px_2px_rgba(255,255,255,0.95),inset_0_-1.5px_2px_rgba(121,87,200,0.04)] dark:border-[#2C2442] dark:bg-[#161320] dark:text-[#C4B5FD]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#746C82]/70 dark:text-[#A59EBA]/70">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#302A40] dark:text-[#F4F1FA]">
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
                  className="clay-button-secondary flex h-11 w-11 items-center justify-center rounded-2xl text-[#746C82] dark:text-[#A59EBA]"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/charan571/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="clay-button-secondary flex h-11 w-11 items-center justify-center rounded-2xl text-[#746C82] dark:text-[#A59EBA]"
                >
                  <FaLinkedin size={19} />
                </a>

                <a
                  href="mailto:singamcherry571@gmail.com"
                  className="ml-1 inline-flex items-center gap-2 text-sm font-bold text-[#7957C8] transition-colors duration-200 hover:text-[#6744B5] dark:text-[#C4B5FD] dark:hover:text-white"
                >
                  Let's connect
                  <ArrowUpRight size={16} />
                </a>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="mt-10 border-t border-[#E9DFFF]/80 pt-10 dark:border-[#2C2442] lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">

              <form
                ref={formRef}
                onSubmit={sendEmail}
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-[#302A40] dark:text-[#F4F1FA]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="clay-input w-full rounded-2xl px-4 py-3.5 text-sm placeholder:text-[#746C82]/60"
                  />
                </div>

                {/* Email */}
                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-[#302A40] dark:text-[#F4F1FA]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="clay-input w-full rounded-2xl px-4 py-3.5 text-sm placeholder:text-[#746C82]/60"
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-[#302A40] dark:text-[#F4F1FA]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your idea..."
                    required
                    className="clay-input w-full resize-none rounded-2xl px-4 py-3.5 text-sm placeholder:text-[#746C82]/60"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="clay-button-primary mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}

                  {status !== "sending" && <Send size={16} />}
                </button>

                {/* Success Message */}
                {status === "success" && (
                  <p className="mt-4 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <p className="mt-4 text-sm font-semibold text-rose-600 dark:text-rose-400">
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
