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
            className="rounded-lg shadow-md"
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
      id: 5,
      name: "Garg N Garg's Associates",
      description:
        "Made the full wesbite using most popular wesbite creation tool wordpress and with custom design made from figma by me. Added google analytics and SEO fro better performance and ranking.",
      imageUrl:
        "https://gargngargsassociates.com/wp-content/uploads/2025/04/Frame-33.png",
      liveUrl: "https://gargngargsassociates.com/",
    },
    {
      id: 1,
      name: "Stockin",
      description:
        "A Dashboard which shows pure UI skills as well as it works with different API from different disributors for Stock Data. It contains some UI components to showcase my skillset.",
      imageUrl: "/assets/stockin.png",
      githubUrl: "https://github.com/whoshriyansh/stock_dashboard",
      liveUrl: "https://stockin-dashboard.netlify.app/",
    },
    {
      id: 2,
      name: "Cloud Ingenious",
      description:
        "Transformed a Wix template into a fully responsive site, improving traffic by 30% and accessibility by 60%.",
      imageUrl:
        "https://static.wixstatic.com/media/3fd7ef_9532f097ed1c465388fb13ffcaaddb47~mv2.png",
      liveUrl: "https://www.cloudingenious.com/",
    },
    {
      id: 3,
      name: "Udhari Bazaar",
      description:
        "Built an Admin Dashboard for a ₹50 lakh/month business, optimizing client onboarding and business efficiency.",
      imageUrl:
        "https://cdn.staropstech.com/clients/udharibazaar/assets/extra-images/logo.webp",
      liveUrl: "https://udharibazaar.com/",
    },
    {
      id: 4,
      name: "StarOps Technologies",
      description:
        "Led the design & development of the StarOps website, ensuring pixel-perfect, responsive design and smooth user experience.",
      imageUrl:
        "https://staropstech.com/static/media/logo.a887159a323387e8f277.png",
      liveUrl: "https://staropstech.com/",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        RECENT <br />
        <span className="text-soft_gray/20">PROJECTS</span>
      </h1>

      <div className="flex flex-col mt-10">
        {projects.map((project) => (
          <SingleProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
