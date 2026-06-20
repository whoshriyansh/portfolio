"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Linkedin, GitHub, Instagram } from "react-feather";
import SectionHeader from "./shared/SectionHeader";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", interest: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setFormData({ name: "", email: "", interest: "" });
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const contactLinks = [
    {
      icon: <Mail size={16} />,
      label: "Email Me",
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
      icon: <Instagram size={16} />,
      label: "Instagram",
      href: "https://www.instagram.com/whoshriyansh/",
    },
  ];

  return (
    <section id="newsletter" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Newsletter"
          title="Stay in the loop"
          description="Subscribe for new essays and blogs on startups, programming, and life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white heading-tight mb-4">
                Subscribe to my
                <span className="text-gradient-orange"> newsletter</span>
              </h3>
              <p className="text-soft_gray/50 text-sm leading-relaxed">
                Get notified when I publish a new essay. It can feel like spam sometimes, but I will share my experience and knowledge on everything I learn about from life and books.
              </p>
            </div>

            <div className="grid grid-cols-2 flex-col gap-4">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-surface border border-white/5 text-orange group-hover:border-orange/30 transition-colors duration-300 w-full flex flex-center justify-center gap-2">
                    {link.icon}

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
                    <span className="text-sm text-soft_gray/70">{link.label}</span>
                  )}
                  </div>
                 
                </motion.div>
              ))}
            </div>
          </motion.div>

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
                disabled={status === "loading"}
                className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-soft_gray/30 focus:outline-none focus:border-orange/40 transition-colors duration-300 disabled:opacity-50"
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
                disabled={status === "loading"}
                className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-soft_gray/30 focus:outline-none focus:border-orange/40 transition-colors duration-300 disabled:opacity-50"
              />
            </div>

             <div className="relative">
              <select
                value={formData.interest || ""}
                onChange={(e) =>
                  setFormData({ ...formData, interest: e.target.value })
                }
                required
                disabled={status === "loading"}
                className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-soft_gray/30 focus:outline-none focus:border-orange/40 transition-colors duration-300 disabled:opacity-50"
              >
                <option value="" disabled>
                  I'm interested in...
                </option>
                <option value="blogs">Blogs</option>
                <option value="essays">Essays</option>
                <option value="both">Both</option>
              </select>
            </div>

           

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-orange text-white font-display font-semibold text-sm hover:bg-orange-light transition-colors duration-300 disabled:opacity-50"
              data-cursor-hover
            >
              <Mail size={16} />
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </motion.button>

            {message && (
              <p
                className={`text-sm ${
                  status === "error" ? "text-red-400" : "text-soft_gray/70"
                }`}
              >
                {message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
