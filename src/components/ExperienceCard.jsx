import Header from "./shared/Header";

const SingleExperienceCard = ({ experience }) => {
  return (
    <div className="w-full flex justify-between items-start hover:bg-soft_gray/10 duration-300 px-5 py-5 rounded-2xl">
      <div className="flex gap-6 items-start">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-lg font-semibold text-white">
            {experience?.name}
          </h3>
          <p className="text-xs text-soft_gray">{experience?.description}</p>
          <p className="text-sm text-dark_gray font-normal">
            Key Tech: {experience?.keyTech}
          </p>
          <p className="text-xs text-dark_gray font-semibold">
            {experience?.timeline}
          </p>
        </div>
      </div>
      {/* <div className="text-orange">
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
      </div> */}
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
      timeline: "APR 2025 - PRESENT",
      keyTech:
        "React Native, React, Frontend, Backend, Google Analytics, SEO, DevOps",
    },
    {
      id: 5,
      name: "Garg N Garg's Associates",
      description:
        "Independently designed the entire UI/UX for the website in Figma, translating it into a responsive and animated React application. Implemented clean, modular code with performance-focused practices and modern animation techniques for smooth user interactions. Deployed the complete website on AWS EC2, configured with Nginx and PM2 to ensure scalability, uptime, and the ability to handle real-time traffic. Managed end-to-end development from design to deployment.",
      timeline: "Apr 2025 - Jun 2025",
      keyTech: "React, Express.js, Backend, Google Analytics, SEO",
    },
    {
      id: 6,
      name: "Cloud Ingenious",
      description:
        "Designed and developed the complete Cloud Ingenious website using Wix Studio, ensuring seamless responsiveness across devices. Led end-to-end optimization, including SEO, accessibility, and performance for a fully production-ready launch.",
      timeline: "Jul 2024 - Aug 2024",
      keyTech: "WordPress, Wix, CI/CD, Google Analytics, SEO",
    },
    {
      id: 3,
      name: "StarOps Technologies",
      description:
        "I led the frontend architecture for multiple projects, including admin dashboards and user portals. My work improved customer onboarding rates by 30% through intuitive UI and robust workflows. I also built a scalable dashboard for a ₹50 lakh/month loan business, integrating third-party APIs for loan processing, client management, and user access control.",
      liveUrl: "https://staropstech.com/",
      timeline: "NOV 2023 - Mar 2025",
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
      <Header
        firstWord="2+"
        secondWord="YOE"
        description="Over the last 2 Years, I dedicated myself to intense self-learning,
        mastering modern web technologies and working with local businesses as a
        freelance developer. This period sharpened both my technical and
        client-facing skills."
      />
      <div className="flex flex-col mt-10">
        {experiences.map((experience, id) => (
          <SingleExperienceCard key={id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
