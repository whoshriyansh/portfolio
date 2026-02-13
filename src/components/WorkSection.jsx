import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, X, GitHub, ExternalLink, FileText } from "react-feather";
import SectionHeader from "./shared/SectionHeader";

const projects = [
  {
    id: 1,
    name: "Code Sail",
    tagline: "VS Code Extension for Planning & Analysing",
    description:
      "A powerful VS Code extension that helps developers plan, analyse, and track their coding workflow. Built with modern extension APIs for seamless integration into the development environment.",
    imageUrl: "/assets/codesail.svg",
    techStack: ["VS Code API", "JavaScript", "Node.js"],
    githubUrl: "https://github.com/whoshriyansh/CodeSail",
  },
  {
    id: 2,
    name: "Genbloc",
    tagline: "Task Management Application",
    description:
      "A complete task management application that lets you organize, track, and finish your tasks efficiently. Built with a focus on clean UI and smooth user experience with real-time updates.",
    imageUrl: "/assets/genbloc.png",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/whoshriyansh/genbloc",
  },
  {
    id: 3,
    name: "CI/CD Pipeline",
    tagline: "GitHub Actions with AWS EC2",
    description:
      "A complete CI/CD pipeline using GitHub Actions that triggers on every push to the main branch. Automatically builds Docker images, pushes to registry, and deploys to AWS EC2. Configured with custom domain, Nginx, and PM2 for production-ready deployment.",
    imageUrl: "/assets/ci_cd.png",
    techStack: ["GitHub Actions", "Docker", "AWS EC2", "Nginx"],
    articleUrl:
      "https://medium.com/@whoshriyansh/deploying-next-js-application-on-aws-ec2-f0d6a1fdd825",
    githubUrl:
      "https://github.com/whoshriyansh/HourStack/blob/main/.github/workflows/cicd.yml",
  },
  {
    id: 4,
    name: "HourStack",
    tagline: "Real-time Time Tracking Planner",
    description:
      "A full-stack real-time Time Tracking application built with Next.js featuring project, task, and client management. Includes secure auth, CRUD operations, global state management with Zustand, and Shadcn UI — all in TypeScript.",
    imageUrl: "/assets/hourstack.png",
    techStack: ["Next.js", "TypeScript", "Zustand", "Shadcn UI"],
    liveUrl: "http://hourstack.publicvm.com/",
    githubUrl: "https://github.com/whoshriyansh/hourstack",
  },
  {
    id: 5,
    name: "Stockin",
    tagline: "Stock Market Dashboard",
    description:
      "A fully responsive stock market dashboard using core React, fetching real-time data from multiple stock APIs. Features custom-built charts, cards, and filters for clean interactive data visualization.",
    imageUrl: "/assets/stockin.png",
    techStack: ["React", "JavaScript", "REST APIs", "CSS"],
    githubUrl: "https://github.com/whoshriyansh/stock_dashboard",
    liveUrl: "https://stockin-dashboard.netlify.app/",
  },
  {
    id: 6,
    name: "Udhari Bazaar",
    tagline: "Admin Dashboard for Loan Business",
    description:
      "A comprehensive Admin Dashboard for a business generating ₹50 lakh/month, streamlining client onboarding and operations. Integrates third-party APIs for loan processing, sales lead management, and workflow automation.",
    imageUrl:
      "https://cdn.staropstech.com/clients/udharibazaar/assets/extra-images/logo.webp",
    techStack: ["React", "REST APIs", "Admin Panel", "Loan Management"],
    liveUrl: "https://udharibazaar.com/",
  },
];

const ProjectCard = ({ project, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      layoutId={`project-card-${project.id}`}
      onClick={() => onClick(project)}
      className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden cursor-pointer"
      data-cursor-hover
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="p-6 h-full"
      >
        {/* Project image */}
        <div className="relative w-full h-48 mb-5 rounded-xl overflow-hidden bg-surface-light">
          <img
            src={project.imageUrl}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Hover glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Project info */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg text-white group-hover:text-orange transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-soft_gray/60 text-sm mt-1 line-clamp-2">
              {project.tagline}
            </p>
          </div>
          <motion.div
            className="p-2 rounded-full border border-white/10 text-soft_gray/40 group-hover:text-orange group-hover:border-orange/30 transition-all duration-300"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-soft_gray/60 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom hover border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal content */}
        <motion.div
          layoutId={`project-card-${project.id}`}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-surface border border-white/10 rounded-3xl overflow-y-auto scrollbar-hidden"
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface-light border border-white/10 text-soft_gray hover:text-white transition-colors"
            data-cursor-hover
          >
            <X size={18} />
          </motion.button>

          {/* Project image */}
          <div className="relative w-full h-64 md:h-80 bg-surface-light">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-full object-contain p-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 -mt-16 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display font-bold text-3xl md:text-4xl text-white heading-tight"
            >
              {project.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-orange text-sm mt-2 font-medium"
            >
              {project.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-soft_gray/70 text-sm leading-relaxed mt-6"
            >
              {project.description}
            </motion.p>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6"
            >
              <h4 className="text-xs text-soft_gray/40 uppercase tracking-[0.2em] mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-orange/10 text-orange border border-orange/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8 pb-2"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange-light transition-colors duration-300"
                  data-cursor-hover
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium hover:border-orange/30 hover:text-orange transition-all duration-300"
                  data-cursor-hover
                >
                  <GitHub size={14} />
                  View Code
                </a>
              )}
              {project.articleUrl && (
                <a
                  href={project.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-medium hover:border-orange/30 hover:text-orange transition-all duration-300"
                  data-cursor-hover
                >
                  <FileText size={14} />
                  Read Article
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Selected Work"
          title="Projects"
          description="Each project reflects real-world problem-solving with modern tech stacks and production-grade architecture."
        />

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;
