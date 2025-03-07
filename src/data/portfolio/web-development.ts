import type { Portfolio } from "@/types/Portfolio";
import { WebDevelopment } from "./portfolio-categories";
import { NextJS, PHP, TailwindCSS } from "../tech-tools/tech-stack";

export const webDevelopmentPortfolios: Portfolio[] = [
  {
    id: 1,
    category: WebDevelopment,
    title: "Yayasan BUMN",
    description: `The Yayasan BUMN website serves as the official information hub for the foundation, showcasing its commitment to social responsibility through initiatives in education, health, environment, and community empowerment. Designed for transparency and engagement, the website provides updates on programs, events, and impact reports while offering opportunities for collaboration and contributions. With an intuitive interface, it connects stakeholders, corporate partners, and the public to Yayasan BUMN's efforts in fostering sustainable development across Indonesia.`,
    members: "Nafis",
    duration: "Jun 2024 - Aug 2024",
    tags: "Website Design, Web Dev",
    link: "http://yayasanbumn.org/",
    techStacksOrTools: "techstacks",
    frontend: [PHP],
    infra: [PHP],
    tools: [],
    logo: "/assets/images/portfolio/web-development/yayasan-bumn/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/yayasan-bumn/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-1.webp",
    showcaseImage2:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-2.webp",
  },
  {
    id: 2,
    category: WebDevelopment,
    title: "Menjadi Manusia",
    description: `The Menjadi Manusia website serves as the official company profile, showcasing its mission to foster empathy, storytelling, and meaningful conversations. It provides insights into the organization's vision, values, and impact through various initiatives, including content creation, community engagement, and collaborations. Visitors can explore the company's history, team, and services while staying updated on its latest projects and partnerships. Designed with a clean and intuitive interface, the website reflects Menjadi Manusia's commitment to inspiring positive change and human connection through storytelling and dialogue.`,
    members: "Nafis",
    duration: "Jun 2024",
    tags: "Web Design, Web Dev",
    link: "http://business.menjadimanusia.id/",
    techStacksOrTools: "techstacks",
    frontend: [PHP],
    infra: [PHP],
    tools: [],
    logo: "/assets/images/portfolio/web-development/menjadi-manusia/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/menjadi-manusia/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/menjadi-manusia/showcase-image-1.webp",
    showcaseImage2:
      "/assets/images/portfolio/web-development/menjadi-manusia/showcase-image-2.webp",
  },
  {
    id: 3,
    category: WebDevelopment,
    title: "Astrogang",
    description: `AstroGang is an AI-driven platform that merges advanced technology with street culture to create hyper-realistic, interactive digital experiences. Utilizing cutting-edge 3D avatars, motion-capture technology, and real-time AI adaptation, AstroGang autonomously engages with audiences across platforms like Twitch, Kick, and YouTube. Powered by deep learning models, the platform learns and evolves, delivering dynamic, street-smart interactions. By seamlessly integrating AI with cultural elements, AstroGang redefines virtual engagement, offering a unique blend of entertainment, technology, and real-time interaction.`,
    members: "Nafis",
    duration: "1 Month",
    tags: "Web Design, Web Dev",
    link: "https://astrogang.com",
    techStacksOrTools: "techstacks",
    frontend: [NextJS],
    infra: [],
    tools: [],
    logo: "/assets/images/portfolio/web-development/astrogang/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/astrogang/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/astrogang/showcase-image-1.webp",
    showcaseImage2:
      "/assets/images/portfolio/web-development/astrogang/showcase-image-2.webp",
  },
  {
    id: 4,
    category: WebDevelopment,
    title: "ECOPLEASE",
    description: `The EcoPlease website is the official platform for promoting sustainable and eco-friendly solutions, offering a range of products and services aimed at reducing environmental impact. The website showcases the company’s commitment to green practices, providing users with access to eco-conscious products, educational resources, and tips for sustainable living. With a focus on innovation and environmental responsibility, EcoPlease empowers individuals and businesses to make environmentally-friendly choices. Featuring an intuitive design, the website offers a seamless shopping experience while highlighting the brand’s dedication to building a cleaner, greener future for all.`,
    members: "Elian",
    duration: "Aug - Dec 2023",
    tags: "Web Design, Web Dev",
    link: "https://www.ecoplease.id/",
    techStacksOrTools: "techstacks",
    frontend: [NextJS, TailwindCSS],
    infra: [],
    tools: [],
    logo: "/assets/images/portfolio/web-development/yayasan-bumn/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/yayasan-bumn/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-1.webp",
    showcaseImage2:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-2.webp",
  },
];
