import { motion } from "framer-motion";
import { GitHub, Linkedin, Mail, Heart } from "react-feather";

const PremiumFooter = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="font-display font-bold text-xl text-white heading-tight">
              Shriyansh
              <span className="text-orange">.</span>
            </h3>
            <p className="text-soft_gray/40 text-xs mt-1">
              Full-Stack Developer
            </p>
          </motion.div>

          {/* Center - Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: <GitHub size={16} />, href: "https://github.com/whoshriyansh", label: "GitHub" },
              { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/whoshriyansh/", label: "LinkedIn" },
              { icon: <Mail size={16} />, href: "mailto:whoshriyansh@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-soft_gray/40 hover:text-orange transition-colors duration-300"
                data-cursor-hover
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Credit + year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-soft_gray/30 text-xs flex items-center gap-1 justify-center md:justify-end">
              Built with <Heart size={10} className="text-orange" /> by Shriyansh
            </p>
            <p className="text-soft_gray/20 text-[10px] mt-1">
              © {new Date().getFullYear()} — All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
