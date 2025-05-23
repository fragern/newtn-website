import { AdobeIllustrator, AdobePhotoshop } from "../tech-tools/tools";
import { Branding } from "./portfolio-categories";
import type { Portfolio } from "@/types/Portfolio";

export const brandingPortfolios: Portfolio[] = [
  {
    id: 1,
    category: Branding,
    title: "JiwaJiwa",
    description: `Management service by Menjadi Manusia`,
    short_description: "Management service by Menjadi Manusia",
    members: "Bintang",
    duration: "1 Month",
    tags: ["Branding", "2D Asset"],
    link: "",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [AdobeIllustrator, AdobePhotoshop],
    logo: "/assets/images/portfolio/branding/jiwajiwa/logo.webp",
    coverImage: "/assets/images/portfolio/branding/jiwajiwa/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/branding/jiwajiwa/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/branding/jiwajiwa/showcase-image-2.svg",
  },
  {
    id: 2,
    category: Branding,
    title: "Memilih Masa Depan",
    description: `Youth community empowering young people to create a better future through education and collaboration.`,
    short_description:
      "Youth community empowering young people to create a better future through education and collaboration.",
    members: "Bintang",
    duration: "1 Month",
    tags: ["Branding", "2D Asset"],
    link: "",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [AdobeIllustrator, AdobePhotoshop],
    logo: "/assets/images/portfolio/branding/memilih-masa-depan/logo.webp",
    coverImage:
      "/assets/images/portfolio/branding/memilih-masa-depan/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/branding/memilih-masa-depan/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/branding/memilih-masa-depan/showcase-image-2.svg",
  },
  {
    id: 3,
    category: Branding,
    title: "Trans Makmur Bersama",
    description: `TMB, a tugboat and barge company, required a fresh rebrand to better reflect its core values of dependability and resilience. The redesigned identity incorporates a modern, minimalist aesthetic, reinforcing the company's strength and reliability.`,
    short_description:
      "A tugboat and barge company rebranded with a modern, minimalist identity to highlight its dependability and resilience.",
    members: "Bryan",
    duration: "1 Month",
    tags: ["Branding", "2D Asset"],
    link: "",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [AdobeIllustrator, AdobePhotoshop],
    logo: "/assets/images/portfolio/branding/trans-makmur-bersama/logo.webp",
    coverImage:
      "/assets/images/portfolio/branding/trans-makmur-bersama/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/branding/trans-makmur-bersama/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/branding/trans-makmur-bersama/showcase-image-2.svg",
  },
];
