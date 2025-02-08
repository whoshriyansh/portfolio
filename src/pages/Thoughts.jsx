import React from "react";
import ProfileImg from "../components/ProfileImg";
import ContactForm from "../components/ContactForm";
import ThoughtCard from "../components/ThoughtCard";
import { Helmet } from "react-helmet-async";

const Thoughts = () => {
  return (
    <>
      <Helmet>
        <title>Thoughts & Articles | Shriaynsh Lohia</title>
        <meta
          name="description"
          content="Read my thoughts on React, freelancing, and web development. Explore my Medium articles covering Figma to React, dashboards, and API integrations."
        />
        <meta
          name="keywords"
          content="React Articles, Web Development Thoughts, Figma to React Blog, Freelance Developer Insights, API Integrations Guide, JavaScript Trends"
        />
        <meta
          property="og:title"
          content="Thoughts & Articles | Shriaynsh Lohia"
        />
        <meta
          property="og:description"
          content="Explore my latest articles on React development, freelancing, and frontend technologies."
        />
        <meta property="og:image" content="your-article-preview-image.jpg" />
        <meta
          property="og:url"
          content="https://whoshriyansh.netlify.app/thoughts"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://whoshriyansh.netlify.app/thoughts"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Thoughts & Articles by Shriaynsh Lohia",
              "url": "https://whoshriyansh.netlify.app/thoughts",
              "author": {
                "@type": "Person",
                "name": "Shriaynsh Lohia",
                "url": "https://whoshriyansh.netlify.app/"
              },
              "blogPosts": [
                {
                  "@type": "BlogPosting",
                  "headline": "How to Create a Centralized API Service in React with Axios",
                  "datePublished": "2024-10-20",
                  "url": "https://medium.com/@whoshriyansh/how-to-create-a-centralized-api-service-in-react-with-axios-96f80fde0436",
                  "author": "Shriaynsh Lohia"
                },
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-7/12 overflow-y-auto scrollbar-hidden mt-40 md:mt-10 lg:mt-28">
          <div className="space-y-20 flex flex-col justify-center items-center lg:items-start">
            <ThoughtCard />
            {/* <ContactForm /> */}
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center lg:px-32 md:mt-10 lg:mt-0 ">
          <ProfileImg />
        </div>
      </div>
    </>
  );
};

export default Thoughts;
