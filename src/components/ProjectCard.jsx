import React from "react";
import { ArrowUpRight } from "react-feather";

const SingleProjectCard = () => {
  return (
    <div className="w-full flex justify-between items-start hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl">
      <div className="flex gap-5 items-center">
        <div className="h-36 w-32 bg-orange rounded-xl">
          <img src="" alt="Box" />
        </div>
        <div>
          <h3>Najma Ai</h3>
          <p>Saas Framer Template</p>
        </div>
      </div>
      <div className="text-orange">
        <ArrowUpRight />
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        RECENT
        <br />
        <span className="text-soft_gray/20">PROJECTS</span>
      </h1>
      <div className="flex flex-col mt-10">
        <SingleProjectCard />
        <SingleProjectCard />
        <SingleProjectCard />
        <SingleProjectCard />
      </div>
    </div>
  );
};

export default ProjectCard;
