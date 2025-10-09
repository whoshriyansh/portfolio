import ProfileImg from "../components/ProfileImg";
import ExperienceCard from "../components/ExperienceCard";
import { Helmet } from "react-helmet-async";

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Shriaynsh Lohia</title>
        <meta
          name="description"
          content="Discover Shriaynsh Lohia's expertise in React development, API integration, and dashboard creation. Available for freelance projects."
        />
        <meta
          name="keywords"
          content="React Developer, API Integration, Dashboard Development, Freelance React Work, Web Developer"
        />
        <meta property="og:title" content="Experience | Shriaynsh Lohia" />
        <meta
          property="og:description"
          content="Explore Shriaynsh Lohia’s professional journey in React development, API integration, and dashboard design."
        />
        <meta property="og:image" content="your-image-url.jpg" />
        <meta
          property="og:url"
          content="https://whoshriyansh.netlify.app/experience"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://whoshriyansh.netlify.app/experience"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shriaynsh Lohia",
              "jobTitle": "React Developer",
              "url": "https://whoshriyansh.netlify.app",
              "sameAs": [
                "https://github.com/whoshriyansh",
                "https://www.linkedin.com/in/whoshriyansh",
                "https://medium.com/@whoshriyansh"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 overflow-y-auto scrollbar-hidden mt-40 md:mt-10 lg:mt-28">
          <ExperienceCard />
        </div>
        <div className="w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center lg:px-32 md:mt-10 lg:mt-0">
          <ProfileImg />
        </div>
      </div>
    </>
  );
};

export default Experience;
