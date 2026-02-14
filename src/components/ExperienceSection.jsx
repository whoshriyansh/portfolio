import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./shared/SectionHeader";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Varaniti Consultancy Services (Volvrit)",
    timeline: "Nov 2025 — Feb 2025",
    description:
      "Delivered internal tools, SaaS platforms, and mobile app backends across multiple projects. Integrated AI automation features (e.g., interview workflows, analytics) into live systems. Managed project tasks, requirements, and sprint deliveries within a 12-developer team. Developed and optimized scalable backend APIs and responsive frontend modules.",
    techStack: ["React Native", "DevOps", "SEO", "Analytics"],
  },
  {
    id: 6,
    role: "Freelance Developer",
    company: "Self-Employed",
    timeline: "APR 2025 — Nov 2025",
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
      "Converted Figma designs into a fully responsive website using React and Next.js, collaborating with a 4-person team for end-to-end development and deployment. Maintained SEO scores at 90-100% through optimised meta tags and structured data, while ensuring 98%+ site availability across 100+ countries via AWS S3 and CDN.",
    techStack: ["Wix Studio", "SEO", "Analytics"],
  },
  {
    id: 4,
    role: "React Developer",
    company: "StarOps Technologies",
    timeline: "NOV 2023 — MAR 2025",
    description:
      "Shipped EdTech, admin, and loan processing dashboards with React and Node.js integrations, driving ₹30L+ monthly transactions and 3,000+ partner onboardings in 4 months. Accelerated development velocity by 30% by architecting a reusable UI library and Figma-integrated design system. Automated loan eligibility checks by developing frontend components that integrated with bank APIs for real-time validation and processing. Boosted application performance by 40% through code splitting, lazy loading, and S3-optimised image delivery, achieving 15% faster load times. Collaborated with cross-functional teams (sales, finance, founders) to launch iterative features for team's use case.",
    techStack: ["React", "REST APIs", "Admin Panels"],
  },
  {
    id: 5,
    role: "Frontend Developer",
    company: "Gateway Car Rental",
    timeline: "JAN 2023 — AUG 2023",
    description:
      "Increased booking engagement by 40% by building a React-based booking site from scratch, incorporating dynamic UI elements and user flows. Streamlined rental pricing and availability calculations with custom React logic and calculators. Transitioned from initial design tasks to leading frontend development, delivering UI components that supported scalable rental management.",
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
