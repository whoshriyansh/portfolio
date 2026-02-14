import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeader from "./shared/SectionHeader";

const tools = [
  {
    name: "Git",
    category: "Version Control",
    icon: "logos:git-icon",
    proficiency: 80,
  },
  {
    name: "GitHub",
    category: "Version Control",
    icon: "logos:github-icon",
    proficiency: 90,
  },
  {
    name: "GitLab",
    category: "Version Control",
    icon: "logos:gitlab-icon",
    proficiency: 70,
  },
  {
    name: "VS Code",
    category: "Editor",
    icon: "logos:visual-studio-code",
    proficiency: 90,
  },
  {
    name: "Postman",
    category: "API Testing",
    icon: "logos:postman-icon",
    proficiency: 90,
  },
  {
    name: "Swagger",
    category: "API Documentation",
    icon: "logos:swagger",
    proficiency: 80,
  },
  {
    name: "Linux",
    category: "Operating System",
    icon: "logos:linux-tux",
    proficiency: 90,
  },
  {
    name: "Figma",
    category: "Design",
    icon: "logos:figma",
    proficiency: 88,
  },
  {
    name: "Slack",
    category: "Communication",
    icon: "logos:slack-icon",
    proficiency: 85,
  },
  {
    name: "Teams",
    category: "Communication",
    icon: "logos:microsoft-teams",
    proficiency: 90,
  },
 
];

const ToolItem = ({ tool, index }) => {
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
          <Icon icon={tool.icon} width={24} height={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-sm text-white group-hover:text-orange transition-colors duration-300">
            {tool.name}
          </h3>
          <p className="text-[11px] text-soft_gray/40">{tool.category}</p>
        </div>
      </div>

      {/* Proficiency bar */}
      <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${tool.proficiency}%` } : {}}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-orange to-orange-light rounded-full"
        />
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </motion.div>
  );
};

const ToolsSection = () => {
  return (
    <section id="tools" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Daily Life"
          title="Tools"
          description="Tools I use daily to build scalable, production-grade applications."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {tools.map((tool, i) => (
            <ToolItem key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
