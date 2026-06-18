import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import PremiumFooter from "@/components/PremiumFooter";
import {
  DEFAULT_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_URL,
  buildPersonJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shriyansh Kr. Lohia — Full-Stack Developer & Essayist",
  description: DEFAULT_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Shriyansh Kr. Lohia — Full-Stack Developer & Essayist",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    type: "profile",
  },
};

const homeJsonLd = [buildPersonJsonLd(), buildWebSiteJsonLd()];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
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
