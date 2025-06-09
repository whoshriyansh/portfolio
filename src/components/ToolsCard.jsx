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
  const tools = [
    {
      name: "Git",
      usage: "Version Control",
      Icon: <Icon icon="devicon:git" width={40} height={40} />,
    },
    {
      name: "GitHub",
      usage: "Repo & CI/CD",
      Icon: <Icon icon="icon-park:github" width={40} height={40} />,
    },
    {
      name: "GitLab",
      usage: "Repo & CI/CD",
      Icon: <Icon icon="devicon:gitlab" width={40} height={40} />,
    },
    {
      name: "VS Code",
      usage: "Code Editor",
      Icon: <Icon icon="logos:visual-studio-code" width={40} height={40} />,
    },
    {
      name: "IntelliJ IDEA",
      usage: "Code Editor - JAVA",
      Icon: <Icon icon="logos:intellij-idea" width={40} height={40} />,
    },
    {
      name: "Postman",
      usage: "API Testing",
      Icon: <Icon icon="devicon:postman" width={40} height={40} />,
    },
    {
      name: "Linux",
      usage: "Operating System",
      Icon: <Icon icon="flat-color-icons:linux" width={40} height={40} />,
    },
    {
      name: "Figma",
      usage: "Design Tool",
      Icon: <Icon icon="devicon:figma" width={40} height={40} />,
    },
    {
      name: "Slack",
      usage: "Communication",
      Icon: <Icon icon="devicon:slack" width={40} height={40} />,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        TOP
        <br />
        <span className="text-soft_gray/20">TOOLS</span>
      </h1>
      <p className="text-gray px-2 text-center  lg:text-left">
        These are the core tools and technologies I use regularly, from frontend
        frameworks and backend services to deployment, testing, and debugging
        utilities that support scalable, maintainable development.
      </p>
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
