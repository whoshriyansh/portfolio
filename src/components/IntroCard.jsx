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
      <p className="text-gray">
        Passionate about creating intuitive and engaging user <br />
        experiences. Specialize in transforming ideas into <br /> beautifully
        crafted products.
      </p>
    </div>
  );
};

export default IntroCard;
