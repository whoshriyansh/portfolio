import { motion } from "framer-motion";
import { GitHub, Linkedin, Mail, ArrowDown } from "react-feather";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.04,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const name = "SHRIYANSH";
  const subtitle = "FULL-STACK DEVELOPER";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,108,56,0.06)_0%,_transparent_70%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-6xl mx-auto"
      >
        {/* Small greeting */}
        <motion.p
          variants={itemVariants}
          className="text-soft_gray text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Big animated name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="font-display font-bold text-[clamp(3rem,12vw,10rem)] leading-[0.9] heading-tight text-white"
          >
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Role subtitle */}
        <div className="overflow-hidden mb-8">
          <motion.h2
            className="font-display font-bold text-[clamp(1rem,3.5vw,2.5rem)] heading-tight"
          >
            {subtitle.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i + name.length}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${letter === " " ? "mr-3" : ""}`}
                style={{
                  color: i < 10 ? "rgba(244,108,56,0.9)" : "rgba(182,180,189,0.4)",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-soft_gray/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          Specializing in MERN Stack, Next.js & React Native.
          <br className="hidden md:block" />
          Building scalable, production-grade applications with modern Tools and Architecture.
        </motion.p>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-8"
        >
          {[
            { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/whoshriyansh/", label: "LinkedIn" },
            { icon: <GitHub size={18} />, href: "https://github.com/whoshriyansh", label: "GitHub" },
            { icon: <Mail size={18} />, href: "mailto:whoshriyansh@gmail.com", label: "Email" },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group relative p-3 text-soft_gray hover:text-orange transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              {social.icon}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-soft_gray/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-soft_gray/40 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-soft_gray/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
