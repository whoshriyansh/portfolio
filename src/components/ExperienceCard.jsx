import React from "react";
import { ArrowUpRight } from "react-feather";

const SingleExperienceCard = ({ experience }) => {
  return (
    <div className="w-full flex justify-between items-start hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl">
      <div className="flex gap-5 items-start">
        <div>
          <h3 className="text-lg font-medium text-white">{experience?.name}</h3>
          <p className="text-sm text-soft_gray">{experience?.description}</p>
          <p className="text-sm text-dark_gray font-medium">
            Key Tech: {experience?.keyTech}
          </p>
          <p className="text-xs text-dark_gray font-semibold">
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
        "I specialize in building MVPs for startups and automating deployment pipelines using modern DevOps practices. I’ve developed scalable cross-platform apps with React Native, set up CI/CD workflows for efficient delivery, and built SEO-optimized websites using WordPress, Wix, and custom code. I also help clients track performance and boost visibility through Google Analytics, search indexing, and SEO management. My focus is always on delivering maintainable code, fast launches, and real business value.",
      timeline: "JULY 2024 - PRESENT",
      keyTech:
        "React Native, WordPress, Wix, CI/CD, Google Analytics, SEO, DevOps",
    },
    {
      id: 2,
      name: "Cloud Ingenious",
      description:
        "At Cloud Ingenious, I led the frontend development of responsive, SEO-optimized websites from scratch. One key project involved converting a basic Wix site into a high-performing, accessible web experience. I improved SEO traffic by 30% and achieved a 70% boost in accessibility scores by adhering to WCAG standards. I collaborated with designers to bring Figma designs to life with pixel-perfect precision.",
      liveUrl: "https://www.cloudingenious.com/",
      timeline: "MAR 2024 - MAY 2024",
      keyTech: "React, Figma, SEO, Accessibility, Wix",
    },
    {
      id: 3,
      name: "StarOps Technologies",
      description:
        "I led the frontend architecture for multiple projects, including admin dashboards and user portals. My work improved customer onboarding rates by 30% through intuitive UI and robust workflows. I also built a scalable dashboard for a ₹50 lakh/month loan business, integrating third-party APIs for loan processing, client management, and user access control.",
      liveUrl: "https://staropstech.com/",
      timeline: "NOV 2023 - APR 2024",
      keyTech: "React, REST APIs, Dashboard Development, Loan Management",
    },
    {
      id: 4,
      name: "Gateway Car Rental",
      description:
        "I developed the entire frontend of Gateway Car Rental's web platform, including the booking flow, contact system, and admin dashboard. I added advanced features like dynamic price calculators and mobile responsiveness, resulting in a 32% increase in web traffic and a 25% performance boost. This project sharpened my skills in component-based architecture, UI optimization, and performance tuning.",
      liveUrl: "https://gatewaycarrental.com/",
      timeline: "JAN 2023 - AUG 2023",
      keyTech:
        "React, JavaScript, UI/UX, Responsive Design, Performance Optimization",
    },
  ];

  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        +2 YEARS OF
        <br />
        <span className="text-soft_gray/20">EXPERIENCE</span>
      </h1>
      <p className="text-gray px-2 text-center  lg:text-left">
        Over the past 15 months, I dedicated myself to intense self-learning,
        mastering modern web technologies and working with local businesses as a
        freelance developer. This period sharpened both my technical and
        client-facing skills.
      </p>
      <div className="flex flex-col mt-10">
        {experiences.map((experience, id) => (
          <SingleExperienceCard key={id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
