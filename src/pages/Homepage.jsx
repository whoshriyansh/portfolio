import React from "react";
import ProfileImg from "../components/ProfileImg";
import IntroCard from "../components/IntroCard";
import CountCard from "../components/CountCard";
import HighlightCard from "../components/HighlightCard";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import ToolsCard from "../components/ToolsCard";
import ThoughtCard from "../components/ThoughtCard";
import ContactForm from "../components/ContactForm";
import SkillsCard from "../components/SkillsCard";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row">
      {/* Fixed Profile Section */}
      <div className="w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center lg:px-32  ">
        <ProfileImg />
      </div>

      {/* Scrollable Content Section */}
      <div className="w-full lg:w-7/12 overflow-y-auto scrollbar-hidden mt-40 md:mt-10 lg:mt-28">
        <div className="space-y-20 flex flex-col justify-center items-center lg:items-start">
          <IntroCard />
          <CountCard />
          <HighlightCard />
          <ProjectCard />
          <ExperienceCard />
          <SkillsCard />
          <ToolsCard />
          <ThoughtCard />
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
