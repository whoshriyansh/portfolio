import React from "react";
import { ArrowUpRight } from "react-feather";

const SingleExperienceCard = ({ experience }) => {
  return (
    <div className="w-full flex justify-between items-start hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl">
      <div className="flex gap-5 items-start">
        <div>
          <h3 className="text-lg font-medium text-white">{experience?.name}</h3>
          <p className="text-sm text-soft_gray">{experience?.description}</p>
          <p className="text-sm text-dark_gray font-semibold">
            {experience?.timeline}
          </p>
        </div>
      </div>
      <div className="text-orange">
        {experience.liveUrl ? (
          <a
            href={experience?.liveUrl}
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

const ExperienceCard = () => {
  const experiences = [
    {
      id: 1,
      name: "Freelancing",
      description:
        "I specialize in developing MVPs for startups and providing DevOps automation to streamline deployments. My expertise in React Native helps small businesses launch scalable, high-performance mobile apps to engage users and drive growth.",
      timeline: "JULY 2024 - PRESENT",
    },
    {
      id: 2,
      name: "Cloud Ingenious",
      description:
        "I led the complete development of custom websites, with a strong emphasis on SEO, accessibility, and user-centric design. One of my key achievements was transforming a basic Wix template into a fully responsive, SEO-optimized site that boosted client visibility and traffic.",
      liveUrl: "https://www.cloudingenious.com/",
      timeline: "MAR 2024 - MAY 2024",
    },
    {
      id: 3,
      name: "StarOps Technologies",
      description:
        "I led frontend development for major finance projects, focusing on user experience and performance. My contributions directly resulted in a 30% increase in client onboarding for loans, thanks to user-friendly interfaces and efficient workflows.",
      liveUrl: "https://staropstech.com/",
      timeline: "NOV 2023 - APR 2024",
    },
    {
      id: 4,
      name: "Gateway Car Rental",
      description:
        "I built the entire frontend for the car rental website, incorporating a booking system, admin dashboard, and advanced features like a price calculator. These improvements streamlined business operations and enhanced the overall user experience, making the process smoother for both customers and staff.",
      liveUrl: "https://gatewaycarrental.com/",
      timeline: "JAN 2023 - AUG 2023",
    },
  ];

  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        +2 YEARS OF
        <br />
        <span className="text-soft_gray/20">EXPERIENCE</span>
      </h1>
      <div className="flex flex-col mt-10">
        {experiences.map((experience, id) => (
          <SingleExperienceCard key={id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
