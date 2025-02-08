import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://whoshriyansh.netlify.app"; // Replace with your domain

// Define the pages you want in the sitemap
const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/experience", changefreq: "weekly", priority: 0.8 },
  { url: "/projects", changefreq: "weekly", priority: 0.8 },
  { url: "/thoughts", changefreq: "weekly", priority: 0.7 },
  { url: "/skills", changefreq: "monthly", priority: 0.6 },
  { url: "/tools", changefreq: "monthly", priority: 0.6 },
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: BASE_URL });

// Add URLs to the sitemap
pages.forEach((page) => sitemap.write(page));
sitemap.end();

// Convert stream to a file
streamToPromise(sitemap)
  .then((data) => {
    fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), data);
    console.log("✅ Sitemap generated successfully!");
  })
  .catch((err) => console.error("❌ Error generating sitemap:", err));
