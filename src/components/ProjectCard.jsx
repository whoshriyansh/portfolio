import React from "react";
import { ArrowUpRight } from "react-feather";

const SingleProjectCard = ({ project }) => {
  return (
    <div className="w-full flex flex-col items-end gap-4 hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl cursor-pointer">
      {/* ✅ Project Description */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* ✅ Image with Lazy Loading */}
        <div className="h-16 w-16 md:h-36 md:w-1/2 flex items-center justify-center">
          <img
            src={project?.imageUrl}
            alt={project?.name || "Project Image"}
            loading="lazy"
            className="rounded-lg"
          />
        </div>

        {/* ✅ Project Details */}
        <div>
          <h2 className="text-xl font-semibold text-white">{project?.name}</h2>
          <p className="text-sm text-soft_gray">{project?.description}</p>
        </div>
      </div>

      {/* ✅ Links Section */}
      <div className="flex gap-4 mt-2">
        {project.liveUrl && (
          <a
            href={project?.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange hover:scale-110 duration-300"
            aria-label={`Live demo of ${project.name}`}
          >
            <p>Live Demo</p>
            <ArrowUpRight />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project?.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange hover:scale-110 duration-300"
            aria-label={`View code of ${project.name}`}
          >
            <p>Code</p>
            <ArrowUpRight />
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      name: "HourStack",
      description:
        "Developed a full-stack, real-time Time Tracking Application using Next.js, featuring comprehensive project, task, and client management modules. The application includes both frontend and backend implementations following industry best practices. Key features include a secure authentication system, complete CRUD operations, global state management (via Zustand/Redux/etc.), and using of Shadcn Library and whole project is made in Typescript.",
      imageUrl: "/assets/hourstack.png",
      // liveUrl: "https://gargngargsassociates.com/",
      githubUrl: "https://github.com/whoshriyansh/hourstack",
    },
    {
      id: 2,
      name: "Garg N Garg's Associates",
      description:
        "Designed a custom UI in Figma and developed the complete website using WordPress, leveraging its flexibility for scalable content management. Implemented Google Analytics for traffic insights and followed SEO best practices to enhance visibility and search engine ranking.",
      imageUrl:
        "https://gargngargsassociates.com/wp-content/uploads/2025/04/Frame-33.png",
      liveUrl: "https://gargngargsassociates.com/",
    },
    {
      id: 3,
      name: "Stockin",
      description:
        "Developed a fully responsive stock market dashboard using core React and JavaScript, designed to showcase advanced UI/UX skills and component architecture. The dashboard fetches real-time data from multiple stock APIs provided by different distributors and includes custom-built UI components such as charts, cards, and filters to display complex data cleanly and interactively.",
      imageUrl: "/assets/stockin.png",
      githubUrl: "https://github.com/whoshriyansh/stock_dashboard",
      liveUrl: "https://stockin-dashboard.netlify.app/",
    },
    {
      id: 4,
      name: "Udhari Bazaar Admin Pannel",
      description:
        "Developed a comprehensive Admin Dashboard for a business generating over ₹50 lakh/month in revenue, aimed at streamlining client onboarding and internal operations. Built entirely with React, the dashboard integrates with third-party APIs to process loan applications, assist the sales team in managing leads, and automate critical workflows.",
      imageUrl:
        "https://cdn.staropstech.com/clients/udharibazaar/assets/extra-images/logo.webp",
      // liveUrl: "https://udharibazaar.com/",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        RECENT <br />
        <span className="text-soft_gray/20">PROJECTS</span>
      </h1>
      <p className="text-gray px-2 text-center  lg:text-left">
        My recent projects demonstrate hands-on experience with both classic
        React and modern Next.js, as well as CMS platforms like Wix and
        WordPress. These projects reflect the depth of my skillset and my
        ability to deliver across diverse tech stacks.
      </p>

      <div className="flex flex-col mt-10">
        {projects.map((project) => (
          <SingleProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
