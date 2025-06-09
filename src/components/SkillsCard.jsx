import React from "react";
import { Icon } from "@iconify/react";

const SingleSkillCard = ({ skillName, skillUsage, Icon }) => {
  return (
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
        {Icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="leading-none text-2xl font-semibold">{skillName}</h3>
        <p className="text-soft_gray text-sm">{skillUsage}</p>
      </div>
    </div>
  );
};

const SkillsCard = () => {
  const skills = [
    {
      name: "JavaScript",
      usage: "Programming Language",
      Icon: <Icon icon="logos:javascript" width={40} height={40} />,
    },
    {
      name: "Java",
      usage: "Programming Language",
      Icon: <Icon icon="logos:java" width={40} height={40} />,
    },
    {
      name: "Python",
      usage: "Programming Language",
      Icon: <Icon icon="logos:python" width={40} height={40} />,
    },
    {
      name: "React",
      usage: "Frontend Library",
      Icon: <Icon icon="logos:react" width={40} height={40} />,
    },
    {
      name: "Next.js",
      usage: "Framework",
      Icon: <Icon icon="logos:nextjs-icon" width={40} height={40} />,
    },
    {
      name: "Node.js",
      usage: "Runtime",
      Icon: <Icon icon="logos:nodejs-icon" width={40} height={40} />,
    },
    {
      name: "Express.js",
      usage: "Backend Framework",
      Icon: <Icon icon="devicon:express" width={40} height={40} />,
    },
    {
      name: "MongoDB",
      usage: "Database",
      Icon: <Icon icon="logos:mongodb-icon" width={40} height={40} />,
    },
    {
      name: "Tailwind CSS",
      usage: "CSS Framework",
      Icon: <Icon icon="devicon:tailwindcss" width={40} height={40} />,
    },
    {
      name: "Docker",
      usage: "Containerization",
      Icon: <Icon icon="devicon:docker" width={40} height={40} />,
    },
    {
      name: "Nginx",
      usage: "Web Server",
      Icon: <Icon icon="logos:nginx" width={40} height={40} />,
    },
    {
      name: "AWS",
      usage: "Cloud Platform",
      Icon: <Icon icon="logos:aws" width={40} height={40} />,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        TOP
        <br />
        <span className="text-soft_gray/20">SKILLS</span>
      </h1>
      <p className="text-gray px-2 text-center  lg:text-left">
        Every skill listed here is backed by real-world experience. While I
        constantly refine my strengths, I’ve intentionally learned a broad set
        of tools to reduce dependencies and move faster as a solo or team
        developer.
      </p>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 px-4">
        {skills.map((skill, index) => (
          <SingleSkillCard
            key={index}
            skillName={skill.name}
            skillUsage={skill.usage}
            Icon={skill.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
