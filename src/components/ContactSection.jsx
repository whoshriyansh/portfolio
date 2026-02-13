import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, GitHub } from "react-feather";
import SectionHeader from "./shared/SectionHeader";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Mailto fallback
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:whoshriyansh@gmail.com?subject=${subject}&body=${body}`
    );

    setTimeout(() => {
      setIsSending(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const contactLinks = [
    {
      icon: <Mail size={16} />,
      label: "whoshriyansh@gmail.com",
      href: "mailto:whoshriyansh@gmail.com",
    },
    {
      icon: <Linkedin size={16} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/whoshriyansh/",
    },
    {
      icon: <GitHub size={16} />,
      label: "GitHub",
      href: "https://github.com/whoshriyansh",
    },
    {
      icon: <MapPin size={16} />,
      label: "India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Get in Touch"
          title="Contact"
          description="Have a project in mind or want to collaborate? Let's talk."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white heading-tight mb-4">
                Let&apos;s build something
                <span className="text-gradient-orange"> amazing</span> together.
              </h3>
              <p className="text-soft_gray/50 text-sm leading-relaxed">
                I&apos;m always open to new opportunities, freelance projects,
                and interesting collaborations. Drop me a line and I&apos;ll get
                back to you as soon as possible.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-orange group-hover:border-orange/30 transition-colors duration-300">
                    {link.icon}
                  </div>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-soft_gray/70 hover:text-orange transition-colors duration-300"
                      data-cursor-hover
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-sm text-soft_gray/70">
                      {link.label}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-soft_gray/30 focus:outline-none focus:border-orange/40 transition-colors duration-300"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-soft_gray/30 focus:outline-none focus:border-orange/40 transition-colors duration-300"
              />
            </div>

            <div className="relative">
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-soft_gray/30 focus:outline-none focus:border-orange/40 transition-colors duration-300 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-orange text-white font-display font-semibold text-sm hover:bg-orange-light transition-colors duration-300 disabled:opacity-50"
              data-cursor-hover
            >
              <Send size={16} />
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
