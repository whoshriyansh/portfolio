import React from "react";
import ProfileImg from "../components/ProfileImg";
import IntroCard from "../components/IntroCard";
import CountCard from "../components/CountCard";
import HighlightCard from "../components/HighlightCard";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import ToolsCard from "../components/ToolsCard";
import ThoughtCard from "../components/ThoughtCard";
import SkillsCard from "../components/SkillsCard";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Freelance React Developer | Shriaynsh Lohia</title>
        <meta
          name="description"
          content="I am a freelance React developer specializing in Figma to React, Dashboards, and API Integrations. Hire me to build modern web applications."
        />
        <meta
          name="keywords"
          content="React Developer, Freelance React Developer, Web Developer in India, Figma to React, API Integration, Dashboard Development"
        />
        <meta
          property="og:title"
          content="Freelance React Developer | Shriaynsh Lohia"
        />
        <meta
          property="og:description"
          content="Expert React developer in India specializing in frontend development and API integrations."
        />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta property="og:url" content="https://whoshriyansh.netlify.app/" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://whoshriyansh.netlify.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Your Name",
              "url": "https://whoshriyansh.netlify.app/",
              "sameAs": [
                "https://www.linkedin.com/in/whoshriyansh/",
                "https://x.com/whoshriyansh",
                "https://github.com/whoshriyansh",
                "https://medium.com/@whoshriyansh"
              ],
              "jobTitle": "Freelance React Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              }
            }
          `}
        </script>
      </Helmet>
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
    </>
  );
};

export default Homepage;
