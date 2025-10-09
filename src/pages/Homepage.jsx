import ProfileImg from "../components/ProfileImg";
import IntroCard from "../components/IntroCard";
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
        <title>whoshriyansh</title>
        <meta
          name="description"
          content="I'm a full-stack developer specializing in the MERN stack, with deep experience in building and deploying scalable applications using the latest Next.js 15. I implement CI/CD pipelines and integrate DevOps tools to ensure production-grade delivery."
        />
        <meta
          name="keywords"
          content="React Developer, FullStack Developer, Web Developer in India, Figma to React, API Integration, Dashboard Development"
        />
        <meta
          property="og:title"
          content="Freelance Developer | Shriaynsh Lohia"
        />
        <meta
          property="og:description"
          content="Expert Full-STack Developer specializing in CReating Full Applications"
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
              "jobTitle": "Full-Stack Developer",
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
        <div className="w-full lg:w-6/12 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center lg:px-16  ">
          <ProfileImg />
        </div>

        {/* Scrollable Content Section */}
        <div className="w-full lg:w-8/12 overflow-y-auto scrollbar-hidden mt-40 md:mt-10 lg:mt-28">
          <div className="space-y-20 flex flex-col justify-center items-center lg:items-start">
            <IntroCard />
            {/* <CountCard /> */}
            <HighlightCard />
            <ProjectCard />
            <ExperienceCard />
            <SkillsCard />
            <ToolsCard />
            {/* <ReviewCard /> */}
            <ThoughtCard />
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
