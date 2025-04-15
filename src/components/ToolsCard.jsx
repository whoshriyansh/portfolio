import React from "react";

import { Icon } from "@iconify/react";

// SingleToolCard Component (Now receives dynamic data as props)
const SingleToolCard = ({ toolName, toolUsage, Icon }) => {
  return (
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
        {Icon}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="leading-none text-2xl font-semibold">{toolName}</h3>
        <p className="text-soft_gray">{toolUsage}</p>
      </div>
    </div>
  );
};

// ToolsCard Component (Updated to dynamically pass props)
const ToolsCard = () => {
  // Data for the tools
  const tools = [
    {
      name: "Linux",
      usage: "Operating System",
      Icon: <Icon icon="flat-color-icons:linux" width={40} height={40} />,
    },
    {
      name: "Github",
      usage: "Git Repository Management ",
      Icon: <Icon icon="icon-park:github" width={40} height={40} />,
    },
    {
      name: "Gitlab",
      usage: "Git Repository Management",
      Icon: <Icon icon="devicon:gitlab" width={40} height={40} />,
    },
    {
      name: "VS Code",
      usage: "Code Editor",
      Icon: <Icon icon="logos:visual-studio-code" width={40} height={40} />,
    },
    {
      name: "Postman",
      usage: "API Testing Tool",
      Icon: <Icon icon="devicon:postman" width={40} height={40} />,
    },
    {
      name: "Insomnia",
      usage: "API Testing Tool",
      Icon: <Icon icon="devicon:insomnia" width={40} height={40} />,
    },
    {
      name: "Figma",
      usage: "Design Tool",
      Icon: <Icon icon="devicon:figma" width={40} height={40} />,
    },
    {
      name: "Slack",
      usage: "Communication Tool",
      Icon: <Icon icon="devicon:slack" width={40} height={40} />,
    },
    {
      name: "Jira",
      usage: "Project Management Tool",
      Icon: <Icon icon="devicon:jira" width={40} height={40} />,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        TOP
        <br />
        <span className="text-soft_gray/20">TOOLS</span>
      </h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 px-4">
        {tools.map((tool, index) => (
          <SingleToolCard
            key={index}
            toolName={tool.name}
            toolUsage={tool.usage}
            Icon={tool.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsCard;
