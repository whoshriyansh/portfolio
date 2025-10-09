import { ArrowUpRight } from "react-feather";
import Header from "./shared/Header";

const SingleProjectCard = ({ project }) => {
  return (
    <div className="w-full flex flex-col items-end gap-2 hover:bg-soft_gray/10 duration-300 px-2 py-2 rounded-2xl cursor-pointer">
      {/* Project Description */}
      <div className="flex flex-col md:flex-row gap-2 items-start justify-start">
        {/* Image with Lazy Loading */}
        <div className="flex items-center justify-center my-auto w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
          <img
            src={project?.imageUrl}
            alt={project?.name || "Project Image"}
            loading="lazy"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Project Details */}
        <div>
          <h2 className="text-lg font-semibold text-white">{project?.name}</h2>
          <p className="text-xs text-soft_gray">{project?.description}</p>
        </div>
      </div>

      {/* ✅ Links Section */}
      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project?.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange hover:scale-110 duration-300"
            aria-label={`Live demo of ${project.name}`}
          >
            <p className="text-xs">Live Demo</p>
            <ArrowUpRight />
          </a>
        )}
        {project.articleUrl && (
          <a
            href={project?.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange hover:scale-110 duration-300"
            aria-label={`Article for ${project.name}`}
          >
            <p className="text-xs">Article</p>
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
            <p className="text-xs">Code</p>
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
      id: 6,
      name: "Code Sail: VS Code Extenion for Planning and Analysing",
      description:
        "I built a complete CI/CD pipeline using GitHub Actions that triggers on every push to the main branch. ",
      imageUrl: "/assets/codesail.svg",
      // articleUrl:
      //   "https://medium.com/@whoshriyansh/deploying-next-js-application-on-aws-ec2-f0d6a1fdd825",
      // liveUrl: "http://hourstack.publicvm.com/",
      githubUrl: "https://github.com/whoshriyansh/CodeSail",
    },
    {
      id: 6,
      name: "Genbloc: An Application that lets you finish your task",
      description:
        "I built a complete CI/CD pipeline using GitHub Actions that triggers on every push to the main branch. It automatically builds a Docker image of the app, pushes it to the container registry, and deploys it to an AWS EC2 instance by pulling the latest image and restarting the container. The setup ensures seamless and consistent deployment without manual steps. I also configured a custom domain to point to the EC2 instance, so the app is accessible via a proper URL. The entire flow is automated, reliable, and production-ready.",
      imageUrl: "/assets/genbloc.png",
      // articleUrl:
      //   "https://medium.com/@whoshriyansh/deploying-next-js-application-on-aws-ec2-f0d6a1fdd825",
      // liveUrl: "http://hourstack.publicvm.com/",
      githubUrl: "https://github.com/whoshriyansh/genbloc",
    },
    {
      id: 5,
      name: "Github Actions CI/CD Pipeline with AWS EC2",
      description:
        "I built a complete CI/CD pipeline using GitHub Actions that triggers on every push to the main branch. It automatically builds a Docker image of the app, pushes it to the container registry, and deploys it to an AWS EC2 instance by pulling the latest image and restarting the container. The setup ensures seamless and consistent deployment without manual steps. I also configured a custom domain to point to the EC2 instance, so the app is accessible via a proper URL. The entire flow is automated, reliable, and production-ready.",
      imageUrl: "/assets/ci_cd.png",
      articleUrl:
        "https://medium.com/@whoshriyansh/deploying-next-js-application-on-aws-ec2-f0d6a1fdd825",
      // liveUrl: "http://hourstack.publicvm.com/",
      githubUrl:
        "https://github.com/whoshriyansh/HourStack/blob/main/.github/workflows/cicd.yml",
    },
    {
      id: 1,
      name: "HourStack: A Planner for Real-time Time Tracking",
      description:
        "Developed a full-stack, real-time Time Tracking Application using Next.js, featuring comprehensive project, task, and client management modules. The application includes both frontend and backend implementations following industry best practices. Key features include a secure authentication system, complete CRUD operations, global state management (via Zustand/Redux/etc.), and using of Shadcn Library and whole project is made in Typescript.",
      imageUrl: "/assets/hourstack.png",
      liveUrl: "http://hourstack.publicvm.com/",
      githubUrl: "https://github.com/whoshriyansh/hourstack",
    },
    {
      id: 3,
      name: "Stockin: A Simple UI Dashboard",
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
      liveUrl: "https://udharibazaar.com/",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <Header
        firstWord={"RECENT"}
        secondWord={"PROJECTS"}
        description={
          "My recent projects demonstrate hands-on experience with both classic React and modern Next.js, as well as CMS platforms like Wix and WordPress. These projects reflect the depth of my skillset and my ability to deliver across diverse tech stacks."
        }
      />

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <SingleProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
