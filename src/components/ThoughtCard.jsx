import React from "react";
import { ArrowUpRight } from "react-feather";

const SingleThoughtCard = ({ name, description, readTime }) => {
  return (
    <div className="w-full flex justify-between items-start hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl">
      <div className="flex gap-5 items-start">
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-[20px] md:text-[26px] font-semibold">
            {name}
          </h3>
          <p className="text-base font-normal text-dark_gray">{description}</p>
          <p className="text-base font-normal text-dark_gray">{readTime}</p>
        </div>
      </div>
      <div className="text-orange">
        <ArrowUpRight />
      </div>
    </div>
  );
};

const ThoughtCard = () => {
  const articles = [
    {
      name: "Hello this is my Article",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse cum odio soluta omnis, minima deleniti! Animi neque beatae suscipit itaque praesentium iste. Natus culpa minima quibusdam magnam sunt pariatur",
      readTime: "2 min",
    },
  ];

  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        SOME
        <br />
        <span className="text-soft_gray/20">THOUGHTS</span>
      </h1>
      <div className="flex flex-col mt-10">
        {articles.map((article, index) => (
          <SingleThoughtCard
            key={index}
            name={article.name}
            description={article.description}
            readTime={article.readTime}
          />
        ))}
      </div>
    </div>
  );
};

export default ThoughtCard;
