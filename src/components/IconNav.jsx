import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Folder,
  Briefcase,
  Code,
  Mail,
  Download,
  Menu,
  X,
  Tool,
} from "react-feather";

const navItems = [
  { icon: <Home size={18} />, label: "Home", href: "#home" },
  { icon: <Folder size={18} />, label: "Work", href: "#work" },
  { icon: <Briefcase size={18} />, label: "Experience", href: "#experience" },
  { icon: <Code size={18} />, label: "Skills", href: "#skills" },
  { icon: <Tool size={18} />, label: "Tools", href: "#tools" },
  { icon: <Mail size={18} />, label: "Contact", href: "#contact" },
];

const IconNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop - Fixed right side icon nav */}
      <motion.nav
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1"
      >
        <div className="bg-surface/80 backdrop-blur-md border border-white/5 rounded-lg py-4 px-2 flex flex-col items-center gap-1">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative group p-3 text-soft_gray/60 hover:text-orange transition-colors duration-300 rounded-full"
              onMouseEnter={() => setActiveTooltip(i)}
              onMouseLeave={() => setActiveTooltip(null)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              data-cursor-hover
            >
              {item.icon}
              <AnimatePresence>
                {activeTooltip === i && (
                  <motion.span
                    initial={{ opacity: 0, x: 10, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.8 }}
                    className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs text-white bg-surface-light border border-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.a>
          ))}

          {/* Separator line */}
          <div className="w-5 h-px bg-white/10 my-1" />

          {/* Resume download */}
          <motion.a
            href="/resume.pdf"
            download="Shriyansh_Lohia.pdf"
            className="relative group p-3 text-soft_gray/60 hover:text-orange transition-colors duration-300 rounded-full"
            onMouseEnter={() => setActiveTooltip("resume")}
            onMouseLeave={() => setActiveTooltip(null)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            data-cursor-hover
          >
            <Download size={18} />
            <AnimatePresence>
              {activeTooltip === "resume" && (
                <motion.span
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs text-white bg-surface-light border border-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap"
                >
                  Resume
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        </div>
      </motion.nav>

      {/* Mobile - Hamburger */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] md:hidden p-3 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full text-white"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-4 text-white text-lg font-display font-medium hover:text-orange transition-colors"
              >
                {item.icon}
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href="/resume2.pdf"
              download="Shriyansh_Lohia.pdf"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: navItems.length * 0.08, duration: 0.4 }}
              className="flex items-center gap-4 text-orange text-lg font-display font-medium mt-4"
            >
              <Download size={18} />
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IconNav;
