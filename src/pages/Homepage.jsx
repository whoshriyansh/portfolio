import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import PremiumFooter from "../components/PremiumFooter";
import PageTransition from "../components/PageTransition";
import ToolsSection from "../components/ToolsSection";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Shriyansh Kr. Lohia — Full-Stack Developer</title>
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
          content="Shriyansh Kr. Lohia | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Expert Full-Stack Developer specializing in creating production-grade applications."
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
              "name": "Shriyansh Kr. Lohia",
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

      <PageTransition>
        <main className="relative">
          {/* Section separators are built into each section */}
          <HeroSection />

          <div className="separator-line max-w-4xl mx-auto" />
          <WorkSection />

          <div className="separator-line max-w-4xl mx-auto" />
          <ExperienceSection />

          <div className="separator-line max-w-4xl mx-auto" />
          <SkillsSection />

           <div className="separator-line max-w-4xl mx-auto" />
          <ToolsSection />

          <div className="separator-line max-w-4xl mx-auto" />
          <ContactSection />

          <PremiumFooter />
        </main>
      </PageTransition>
    </>
  );
};

export default Homepage;
