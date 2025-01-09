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
        <p className="text-soft_gray">{skillUsage}</p>
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
      name: "Python",
      usage: "Programming Language",
      Icon: <Icon icon="logos:python" width={40} height={40} />,
    },
    {
      name: "Wix",
      usage: "Website Maker",
      Icon: <Icon icon="logos:wix" width={40} height={40} />,
    },
    {
      name: "React",
      usage: "JavaScript Library",
      Icon: <Icon icon="logos:react" width={40} height={40} />,
    },
    {
      name: "Node.js",
      usage: "JavaScript Runtime",
      Icon: <Icon icon="logos:nodejs-icon" width={40} height={40} />,
    },
    {
      name: "ExpressJS",
      usage: "JavaScript Framework",
      Icon: <Icon icon="devicon:express" width={40} height={40} />,
    },
    {
      name: "React Native",
      usage: "JavaScript Framework",
      Icon: <Icon icon="devicon:reactnative" width={40} height={40} />,
    },
    {
      name: "Tailwind CSS",
      usage: "CSS Framework",
      Icon: <Icon icon="devicon:tailwindcss" width={40} height={40} />,
    },
    {
      name: "MongoDB",
      usage: "NoSQL Database",
      Icon: <Icon icon="logos:mongodb-icon" width={40} height={40} />,
    },
    {
      name: "Git",
      usage: "Version Control System",
      Icon: <Icon icon="devicon:git" width={40} height={40} />,
    },
    {
      name: "AWS",
      usage: "Cloud Services Platform",
      Icon: <Icon icon="logos:aws" width={40} height={40} />,
    },
    {
      name: "Nginx",
      usage: "Web Server / Reverse Proxy",
      Icon: <Icon icon="logos:nginx" width={40} height={40} />,
    },
    {
      name: "Docker",
      usage: "Containerization Tool",
      Icon: <Icon icon="devicon:docker" width={40} height={40} />,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        TOP
        <br />
        <span className="text-soft_gray/20">SKILLS</span>
      </h1>
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
