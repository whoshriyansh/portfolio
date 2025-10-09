import { Helmet } from "react-helmet-async";
import ProfileImg from "../components/ProfileImg";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags for Projects Page */}
      <Helmet>
        <title>React Projects | Shriaynsh Lohia</title>
        <meta
          name="description"
          content="Explore my React projects, including Figma to React conversions, Dashboard development, and API integrations. Available for freelance work."
        />
        <meta
          name="keywords"
          content="React Projects, Freelance Developer, Web Development, Figma to React, API Integration, Dashboard Development"
        />
        <meta property="og:title" content="React Projects | Shriaynsh Lohia" />
        <meta
          property="og:description"
          content="Explore my work in React development, including dashboards, Figma to React conversions, and API integrations."
        />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta
          property="og:url"
          content="https://whoshriyansh.netlify.app/projects"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://whoshriyansh.netlify.app/projects"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "React Projects by Shriaynsh Lohia",
              "url": "https://whoshriyansh.netlify.app/projects",
              "itemListElement": [
                {
                  "@type": "CreativeWork",
                  "name": "Dashboard UI",
                  "description": "A modern React dashboard with interactive charts and data visualization.",
                  "url": "https://yourprojectlink.com"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Figma to React Conversion",
                  "description": "Pixel-perfect conversion from Figma design to fully responsive React application.",
                  "url": "https://yourprojectlink.com"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* ✅ Page Layout */}
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* ✅ Projects Section */}
        <div className="w-full lg:w-7/12 overflow-y-auto scrollbar-hidden mt-40 md:mt-10 lg:mt-28">
          <ProjectCard />
        </div>

        {/* ✅ Profile Section */}
        <div className="w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center lg:px-32 md:mt-10 lg:mt-0">
          <ProfileImg />
        </div>
      </div>
    </>
  );
};

export default Projects;
