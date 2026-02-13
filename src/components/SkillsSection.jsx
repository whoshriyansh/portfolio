import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeader from "./shared/SectionHeader";

const skills = [
  {
    name: "JavaScript",
    category: "Language",
    icon: "logos:javascript",
    proficiency: 95,
  },
  {
    name: "Python",
    category: "Language",
    icon: "logos:python",
    proficiency: 80,
  },
  {
    name: "React",
    category: "Frontend",
    icon: "logos:react",
    proficiency: 95,
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: "devicon:reactnative-wordmark",
    proficiency: 85,
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: "logos:nextjs-icon",
    proficiency: 90,
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: "logos:typescript-icon",
    proficiency: 85,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "logos:nodejs-icon",
    proficiency: 90,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "devicon:express",
    proficiency: 88,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "logos:mongodb-icon",
    proficiency: 85,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "devicon:tailwindcss",
    proficiency: 95,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "devicon:docker",
    proficiency: 75,
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "logos:aws",
    proficiency: 70,
  },
];

const SkillItem = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative bg-surface border border-white/5 rounded-xl p-5 hover:border-orange/20 transition-all duration-300"
      data-cursor-hover
    >
      {/* Icon + info */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-light group-hover:bg-orange/10 transition-colors duration-300">
          <Icon icon={skill.icon} width={24} height={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-sm text-white group-hover:text-orange transition-colors duration-300">
            {skill.name}
          </h3>
          <p className="text-[11px] text-soft_gray/40">{skill.category}</p>
        </div>
      </div>

      {/* Proficiency bar */}
      <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.proficiency}%` } : {}}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-orange to-orange-light rounded-full"
        />
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Expertise"
          title="Skills & Tools"
          description="Technologies I use daily to build scalable, production-grade applications."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {skills.map((skill, i) => (
            <SkillItem key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
