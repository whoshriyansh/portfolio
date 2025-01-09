import React from "react";
import { ArrowUpRight } from "react-feather";

const SingleProjectCard = ({ project }) => {
  return (
    <div className="w-full flex flex-col items-end gap-2 md:gap-0 hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl cursor-pointer">
      {/* Project Description  */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-4 items-start md:items-start">
        <div className="h-16 w-16 md:h-36 md:w-1/2  bg-transparent rounded-xl flex items-center justify-center">
          <img src={project?.imageUrl} alt={project?.name} />
        </div>
        <div className="">
          <h3 className="text-lg font-medium text-white">{project?.name}</h3>
          <p className="text-sm text-soft_gray">{project?.description}</p>
        </div>
      </div>

      {/* Links Description  */}
      <div className="flex text-orange gap-4">
        {project.liveUrl ? (
          <a
            href={project?.liveUrl}
            target="blank"
            className="flex items-center gap-1 cursor-pointer hover:scale-110 duration-300"
          >
            <p>Live Demo</p>
            <ArrowUpRight />
          </a>
        ) : (
          " "
        )}
        {project.githubUrl ? (
          <a
            href={project?.githubUrl}
            target="blank"
            className="flex items-center gap-1 cursor-pointer hover:scale-110 duration-300"
          >
            <p>Code</p>
            <ArrowUpRight />
          </a>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      name: "Selz Frontend",
      description:
        "Building the frontend of a complete e-commerce platform with React.js. The project includes a responsive, user-friendly design with features like product listings, cart management, and order flow Admin dashboard. Currently integrating different piece of puzzle and ensuring pixel-perfect UI based on Figma designs.",
      imageUrl: "/assets/selz.png",
      githubUrl: "https://github.com/whoshriyansh/e-commerce-client",
      // liveUrl: "https://najma-ai.example.com",
    },
    {
      id: 2,
      name: "Selz Backend",
      description:
        "Developing the backend of the e-commerce platform with Node.js/Express and MongoDB. Features include user authentication, order management, and payment gateway integration, Admin controllers for overview and lookup all optimized for performance and scalability. ",
      imageUrl: "/assets/selz.png",
      githubUrl: "https://github.com/whoshriyansh/e-commerce-server",
    },
    {
      id: 3,
      name: "Cloud Ingenious",
      description:
        "This project involved transforming a basic Wix template into a fully responsive, user-centric site, boosting traffic by 30% and improving accessibility by 60%. I collaborate with designers to ensure seamless design-to-development transitions, always prioritizing performance and user experience.",
      imageUrl:
        "https://static.wixstatic.com/media/3fd7ef_9532f097ed1c465388fb13ffcaaddb47~mv2.png/v1/fill/w_980,h_521,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/3fd7ef_9532f097ed1c465388fb13ffcaaddb47~mv2.png",
      liveUrl: "https://www.cloudingenious.com/",
    },
    {
      id: 4,
      name: "Udhari Bazaar",
      description:
        "At Udharibazaar, I developed a comprehensive Admin Dashboard to manage users and partners for a ₹50 lakh/month business. I also helped redesign the entire website and created a Partner Dashboard, improving efficiency and user experience. These efforts led to a 30% increase in client onboarding and optimized business operations.",
      imageUrl:
        "https://cdn.staropstech.com/clients/udharibazaar/assets/extra-images/logo.webp",
      liveUrl: "https://udharibazaar.com/",
    },
    {
      id: 5,
      name: "StarOps Technologies",
      description:
        "At StarOps, I led the design and development of the main website, focusing on creating a user-friendly and seamless user experience. I ensured the final site was pixel-perfect, translating Figma designs into clean, responsive code that matched the vision exactly. My work improved usability and visual consistency, contributing to a more engaging and professional online presence for the company.",
      imageUrl:
        "https://staropstech.com/static/media/logo.a887159a323387e8f277.png",
      liveUrl: "https://staropstech.com/",
    },
  ];
  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        RECENT
        <br />
        <span className="text-soft_gray/20">PROJECTS</span>
      </h1>
      <div className="flex flex-col mt-10">
        {projects.map((project, id) => (
          <SingleProjectCard key={id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
