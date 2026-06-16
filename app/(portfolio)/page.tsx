import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import PremiumFooter from "@/components/PremiumFooter";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://whoshriyansh.netlify.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shriyansh Kr. Lohia",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/whoshriyansh/",
    "https://x.com/whoshriyansh",
    "https://github.com/whoshriyansh",
    "https://medium.com/@whoshriyansh",
  ],
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PageTransition>
        <main className="relative">
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
}
