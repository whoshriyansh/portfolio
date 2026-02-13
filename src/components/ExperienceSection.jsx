import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./shared/SectionHeader";

const experiences = [
  {
    id: 1,
    role: "Freelance Developer",
    company: "Self-Employed",
    timeline: "APR 2025 — Present",
    description:
      "Building MVPs for startups, automating CI/CD pipelines, and developing cross-platform apps with React Native. SEO optimization and Google Analytics management for client projects.",
    techStack: ["React Native", "DevOps", "SEO", "Analytics"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Garg N Garg's Associates",
    timeline: "APR 2025 — JUN 2025",
    description:
      "Designed full UI/UX in Figma, built responsive animated React app. Deployed on AWS EC2 with Nginx and PM2 for production-grade performance.",
    techStack: ["React", "Express.js", "AWS EC2", "Figma"],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Cloud Ingenious",
    timeline: "JUL 2024 — AUG 2024",
    description:
      "Designed and developed complete website using Wix Studio with full responsiveness, SEO, accessibility, and performance optimization.",
    techStack: ["Wix Studio", "SEO", "Analytics"],
  },
  {
    id: 4,
    role: "Frontend Lead",
    company: "StarOps Technologies",
    timeline: "NOV 2023 — MAR 2025",
    description:
      "Led frontend architecture for admin dashboards and user portals. Improved onboarding rates by 30%. Built scalable dashboard for ₹50L/month loan business.",
    techStack: ["React", "REST APIs", "Admin Panels"],
  },
  {
    id: 5,
    role: "Frontend Developer",
    company: "Gateway Car Rental",
    timeline: "JAN 2023 — AUG 2023",
    description:
      "Developed complete frontend including booking flow, contact system, and admin dashboard. Achieved 32% traffic increase and 25% performance boost.",
    techStack: ["React", "JavaScript", "UI Optimization"],
  },
];

const ExperienceItem = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 group-last:bg-transparent" />

      {/* Timeline dot */}
      <motion.div
        className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-surface border-2 border-orange"
        whileHover={{ scale: 1.5 }}
      />

      {/* Content */}
      <div className="group-hover:bg-surface-light/50 rounded-xl p-4 -ml-4 transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
          <h3 className="font-display font-semibold text-lg text-white group-hover:text-orange transition-colors duration-300">
            {experience.role}
          </h3>
          <span className="text-[11px] text-soft_gray/40 tracking-wider font-mono">
            {experience.timeline}
          </span>
        </div>

        <p className="text-orange/70 text-sm font-medium mb-2">
          {experience.company}
        </p>

        <p className="text-soft_gray/50 text-sm leading-relaxed">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-soft_gray/50 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Career"
          title="Experience"
          description="A timeline of my professional journey building products and leading frontend development."
        />

        <div className="mt-16 ml-4">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
