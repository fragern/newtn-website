import type { Portfolio } from "@/types/portfolio";
import {
  AdobeAfterEffects,
  AdobeIllustrator,
  AdobePhotoshop,
  Blender,
  Figma,
  Procreate,
} from "../tools";

export const brandingPortfolios: Portfolio[] = [
  {
    id: 1,
    category: "branding",
    title: "Branding #1",
    description: `
      The Menjadi Manusia website serves as the official company profile,
      showcasing its mission to foster empathy, storytelling, and
      meaningful conversations. It provides insights into the
      organization's vision, values, and impact through various
      initiatives, including content creation, community engagement, and
      collaborations. Visitors can explore the company's history,
      team, and services while staying updated on its latest projects and
      partnerships. Designed with a clean and intuitive interface, the
      website reflects Menjadi Manusia's commitment to inspiring
      positive change and human connection through storytelling and
      dialogue.
    `,
    members: "Nafis",
    duration: "Jun 2024 - Aug 2024",
    tags: "Website, Sass, Design",
    link: "https://www.google.com/",
    frontend: [],
    infra: [],
    tools: [
      Figma,
      AdobePhotoshop,
      AdobeAfterEffects,
      AdobeIllustrator,
      Blender,
      Procreate,
    ],
    logo: "/assets/images/portfolio/web-development/yayasan-bumn/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/yayasan-bumn/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-1.webp",
    showcaseImage2:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-2.webp",
  },
];
