import React from "react";

const IntroCard = () => {
  return (
    <div className="w-full flex flex-col gap-0 text-center lg:text-start">
      <h1 className="text-[52px] md:text-[86px] lg:text-[110px] font-bold text-white leading-none">
        SOFTWARE
        <br />
        <span className="text-[52px] md:text-[86px] lg:text-[110px] font-bold text-soft_gray/20">
          ENGINEER
        </span>
      </h1>
      <p className="text-gray px-2 text-center">
        Passionate Full STack Developer specialized in creating intuitive and
        engaging user Experience.
      </p>
    </div>
  );
};

export default IntroCard;
