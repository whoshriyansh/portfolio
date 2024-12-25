import React from "react";
import { ArrowUpRight } from "react-feather";

const SingleExperienceCard = () => {
  return (
    <div className="w-full flex justify-between items-start hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl">
      <div className="flex gap-5 items-start">
        <div>
          <h3>Pixel Forge Company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse
            cum odio soluta omnis, minima deleniti! Animi neque beatae suscipit
            itaque praesentium iste. Natus culpa minima quibusdam magnam sunt
            pariatur!
          </p>
          <p>Jan 2020 - Present</p>
        </div>
      </div>
      <div className="text-orange">
        <ArrowUpRight />
      </div>
    </div>
  );
};

const ExperienceCard = () => {
  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        +2 YEARS OF
        <br />
        <span className="text-soft_gray/20">EXPERIENCE</span>
      </h1>
      <div className="flex flex-col mt-10">
        <SingleExperienceCard />
        <SingleExperienceCard />
        <SingleExperienceCard />
      </div>
    </div>
  );
};

export default ExperienceCard;
