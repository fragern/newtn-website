import type { Portfolio } from "@/types/Portfolio";
import { WebDevelopment } from "./portfolio-categories";
import { NextJS, PHP, Solana, TailwindCSS } from "../tech-tools/tech-stack";

export const webDevelopmentPortfolios: Portfolio[] = [
  {
    id: 1,
    category: WebDevelopment,
    title: "Nusatix",
    description: `Nusatix is a Web3 ticketing platform that lets you explore Indonesia's cultural and local experiences while earning unique digital rewards. Each event you attend becomes part of your on-chain identity, with secure, scalper-free access and collectible NFTs tied to real-world moments. With Nusatix, you don't just visit — you belong..`,
    short_description:
      "A Web3 ticketing run on Solana blockchain promoting Indonesia culture and tourism.",
    members: "Nafis, Elian, Eric, Bryan, Arief",
    duration: "1 Month",
    tags: ["Web3 Development", "Web Development", "Web Design"],
    link: "https://nusatix.vercel.app/",
    techStacksOrTools: "techstacks",
    frontend: [NextJS, TailwindCSS],
    infra: [Solana],
    tools: [],
    logo: "/assets/images/portfolio/web-development/nusatix/logo.png",
    coverImage:
      "/assets/images/portfolio/web-development/nusatix/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/nusatix/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/web-development/nusatix/showcase-image-2.svg",
  },
  {
    id: 2,
    category: WebDevelopment,
    title: "Yayasan BUMN",
    description: `The Yayasan BUMN website serves as the official information hub for the foundation, showcasing its commitment to social responsibility through initiatives in education, health, environment, and community empowerment. Designed for transparency and engagement, the website provides updates on programs, events, and impact reports while offering opportunities for collaboration and contributions. With an intuitive interface, it connects stakeholders, corporate partners, and the public to Yayasan BUMN's efforts in fostering sustainable development across Indonesia.`,
    short_description:
      "The official site connecting stakeholders to Yayasan BUMN’s social initiatives in education, health, environment, and empowerment.",
    members: "Nafis",
    duration: "2 Months",
    tags: ["Website Development", "Web Design"],
    link: "http://yayasanbumn.org/",
    techStacksOrTools: "techstacks",
    frontend: [PHP],
    infra: [PHP],
    tools: [],
    logo: "/assets/images/portfolio/web-development/yayasan-bumn/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/yayasan-bumn/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-2.svg",
  },
  {
    id: 3,
    category: WebDevelopment,
    title: "Menjadi Manusia",
    description: `The Menjadi Manusia website serves as the official company profile, showcasing its mission to foster empathy, storytelling, and meaningful conversations. It provides insights into the organization's vision, values, and impact through various initiatives, including content creation, community engagement, and collaborations. Visitors can explore the company's history, team, and services while staying updated on its latest projects and partnerships. Designed with a clean and intuitive interface, the website reflects Menjadi Manusia's commitment to inspiring positive change and human connection through storytelling and dialogue.`,
    short_description:
      "A company profile site promoting empathy, storytelling, and community engagement through meaningful content and collaborations.",
    members: "Nafis",
    duration: "1 Month",
    tags: ["Web Development", "Web Design"],
    link: "http://business.menjadimanusia.id/",
    techStacksOrTools: "techstacks",
    frontend: [PHP],
    infra: [PHP],
    tools: [],
    logo: "/assets/images/portfolio/web-development/menjadi-manusia/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/menjadi-manusia/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/menjadi-manusia/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/web-development/menjadi-manusia/showcase-image-2.svg",
  },
  {
    id: 4,
    category: WebDevelopment,
    title: "Astrogang",
    description: `AstroGang is an AI-driven platform that merges advanced technology with street culture to create hyper-realistic, interactive digital experiences. Utilizing cutting-edge 3D avatars, motion-capture technology, and real-time AI adaptation, AstroGang autonomously engages with audiences across platforms like Twitch, Kick, and YouTube. Powered by deep learning models, the platform learns and evolves, delivering dynamic, street-smart interactions. By seamlessly integrating AI with cultural elements, AstroGang redefines virtual engagement, offering a unique blend of entertainment, technology, and real-time interaction.`,
    short_description:
      "An AI-powered platform blending street culture and technology through hyper-realistic avatars and dynamic, real-time interactions.",
    members: "Nafis",
    duration: "1 Month",
    tags: ["Web Development", "Web Design"],
    link: "https://astrogang.com",
    techStacksOrTools: "techstacks",
    frontend: [NextJS],
    infra: [],
    tools: [],
    logo: "/assets/images/portfolio/web-development/astrogang/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/astrogang/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/astrogang/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/web-development/astrogang/showcase-image-2.svg",
  },
  {
    id: 5,
    category: WebDevelopment,
    title: "ECOPLEASE",
    description: `The EcoPlease website is the official platform for promoting sustainable and eco-friendly solutions, offering a range of products and services aimed at reducing environmental impact. The website showcases the company’s commitment to green practices, providing users with access to eco-conscious products, educational resources, and tips for sustainable living. With a focus on innovation and environmental responsibility, EcoPlease empowers individuals and businesses to make environmentally-friendly choices. Featuring an intuitive design, the website offers a seamless shopping experience while highlighting the brand’s dedication to building a cleaner, greener future for all.`,
    short_description:
      "A platform promoting eco-friendly living with sustainable products, educational resources, and a commitment to a greener future.",
    members: "Agfi",
    duration: "2 Months",
    tags: ["Web Development"],
    link: "https://www.ecoplease.id/",
    techStacksOrTools: "techstacks",
    frontend: [NextJS, TailwindCSS],
    infra: [],
    tools: [],
    logo: "/assets/images/portfolio/web-development/ecoplease/logo.svg",
    coverImage:
      "/assets/images/portfolio/web-development/ecoplease/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/ecoplease/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/web-development/ecoplease/showcase-image-2.svg",
  },
  {
    id: 6,
    category: WebDevelopment,
    title: "Ini Lho ITS 2023",
    description: `Ini Lho ITS 2023 is an annual event organized by the Student Association of Information Technology (HIMTI) at ITS Surabaya. This event aims to introduce high school students to various academic programs at ITS that align with their interests. The website serves as a platform for information dissemination, event registration, and engagement with prospective students. With a user-friendly interface and engaging content, Ini Lho ITS 2023 fosters curiosity and encourages high school students to explore their academic options at ITS.`,
    short_description:
      "An annual event helps high school students explore academic programs aligned with their interests.",
    members: "Agfi",
    duration: "4 Months",
    tags: ["Web Development"],
    link: "https://ilits-2023-frontend.vercel.app/",
    techStacksOrTools: "techstacks",
    frontend: [NextJS, TailwindCSS],
    infra: [],
    tools: [],
    logo: "/assets/images/portfolio/web-development/ini-lho-its-2023/logo.svg",
    coverImage:
      "/assets/images/portfolio/web-development/ini-lho-its-2023/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/ini-lho-its-2023/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/web-development/ini-lho-its-2023/showcase-image-2.svg",
  },
];
