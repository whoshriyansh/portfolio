import React from "react";
import { ArrowUpRight } from "react-feather";

const SingleThoughtCard = ({ article }) => {
  return (
    <div className="w-full flex justify-between items-start hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl">
      <div className="flex gap-5 items-start">
        <div className="flex flex-col gap-3">
          <h3 className="text-white text-[20px] md:text-[26px] font-semibold">
            {article?.name}
          </h3>
          <p className="text-base font-normal text-dark_gray">
            {article?.description}
          </p>
          <p className="text-base font-normal text-dark_gray">
            {article?.readTime}
          </p>
        </div>
      </div>
      <div className="flex text-orange gap-4">
        {article.liveUrl ? (
          <a
            href={article?.liveUrl}
            target="blank"
            className="flex items-center gap-1 cursor-pointer hover:scale-125 duration-300"
          >
            <ArrowUpRight />
          </a>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

const ThoughtCard = () => {
  const articles = [
    {
      name: "Centralized API Service in React with Axios",
      description:
        "In React apps, making API requests is common. Instead of duplicating code and adding tokens manually, we can centralize the process with Axios, simplifying our code and ensuring consistency.",
      readTime: "2 min",
      liveUrl:
        "https://medium.com/@whoshriyansh/how-to-create-a-centralized-api-service-in-react-with-axios-96f80fde0436",
    },
    {
      name: "7 Website Mistakes That Kill Your Sales",
      description:
        "Your website is more than just a digital storefront; it's a critical component of your business's success. However, certain common mistakes can significantly hinder your sales performance. Let's explore these pitfalls and how to avoid them",
      readTime: "2 min",
      liveUrl:
        "https://www.linkedin.com/pulse/7-website-mistakes-kill-your-sales-shriyansh-lohia-kfakc/?trackingId=iw%2BU4Zh%2FQI2h%2BgttPhTLXA%3D%3D",
    },
    {
      name: "Why Every Local Business Needs a Website",
      description:
        "Maybe you were looking for a nearby bakery, a reliable plumber, a new gym, or even a salon. And what did you do? You pulled out your phone, typed a few words into Google, and clicked on one of the first results that looked trustworthy.",
      readTime: "3 min",
      liveUrl:
        "https://www.linkedin.com/pulse/why-every-local-business-needs-website-social-media-isnt-lohia-9fmac/?trackingId=5Cu%2FYs6MRHKBhImQThnT4A%3D%3D",
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
          <SingleThoughtCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ThoughtCard;
