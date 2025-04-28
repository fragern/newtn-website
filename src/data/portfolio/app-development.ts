import type { Portfolio } from "@/types/Portfolio";
import {
  Golang,
  Laravel,
  NodeJS,
  ReactJS,
  ReactNative,
  Swift,
} from "./../tech-tools/tech-stack";
import { AppDevelopment } from "./portfolio-categories";
import { GCP } from "../tech-tools/tech-stack";
import { Figma } from "../tech-tools/tools";

export const appDevelopmentPortfolios: Portfolio[] = [
  {
    id: 1,
    category: AppDevelopment,
    title: "Apical",
    description: `The Apical app is designed to empower individuals in managing their health, particularly in the context of HIV care. Through its innovative features, the app allows users to track their medication, visualize viral load progress, and access essential educational resources. Apical fosters a sense of community by providing a platform for support, encouragement, and knowledge sharing. With its intuitive design and holistic approach, the app aims to improve both physical health and mental well-being, offering a comprehensive tool for users to stay informed and connected on their health journey.`,
    short_description:
      "A holistic app helping individuals manage HIV care through medication tracking, viral load visualization, education, and community support.",
    members: "Nuel, Nafis, Eric, Rian, Dani",
    duration: "Aug - Nov 2024",
    tags: ["Apps Design", "Apps Dev"],
    link: "https://apps.apple.com/app/apical/id6737177998",
    techStacksOrTools: "techstacks",
    frontend: [Swift],
    infra: [Golang, GCP],
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
    category: AppDevelopment,
    title: "Vocapy",
    description: `Vocapy is a vocabulary-building app designed to help users expand their word bank with curated content using the proven Leitner system. Tackling a critical challenge faced by language learners—limited vocabulary that hinders engagement with English academic texts and conversations—Vocapy combines essential vocabulary with spaced repetition to empower users to master and memorize words at their own pace. By providing a strong foundation for confident, independent communication, the app enables learners to enhance their language skills effectively and efficiently.`,
    short_description:
      "A vocabulary-building app that uses spaced repetition to help learners master essential English words for confident communication.",
    members: "Agfi",
    duration: "Aug - Nov 2024",
    tags: ["Apps Design", "Apps Dev"],
    link: "https://apps.apple.com/id/app/vocapy/id6736434457",
    techStacksOrTools: "techstacks",
    frontend: [Swift],
    infra: [Golang, GCP],
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
    id: 3,
    category: AppDevelopment,
    title: "DEALDULU",
    description: `DEALDULU is an app that allows you to interact live with other users, enabling you to buy and sell a wide range of products. Through its user-friendly interface, DEALDULU creates a dynamic platform for real-time transactions, where users can engage in seamless buying and selling experiences. Whether you're looking to purchase or sell various items, the app provides a convenient and interactive space for connecting with others and facilitating secure transactions.`,
    short_description:
      "A live marketplace app where users can buy and sell products in real-time through seamless, interactive transactions.",
    members: "Eric",
    duration: "2 years and still ongoing",
    tags: ["Apps Dev"],
    link: "https://apps.apple.com/id/app/dealdulu/id1672356837",
    techStacksOrTools: "techstacks",
    frontend: [ReactJS, ReactNative],
    infra: [NodeJS, Laravel],
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
    id: 4,
    category: AppDevelopment,
    title: "Evoria",
    description: `Evoria is a musician incubator app designed to empower emerging artists by providing the tools they need to enter the industry, grow their fanbase, and monetize their talent. The app offers features for music marketing, concert promotion, and ticket sales, helping new musicians build a presence in the competitive music world. Through Evoria, artists can engage with their audience, manage events, and increase their visibility, all while focusing on their creative journey.`,
    short_description:
      "A musician incubator app that helps emerging artists grow their fanbase, promote music, and monetize their talent.",
    members: "Eric",
    duration: "6 Months",
    tags: ["Apps Dev"],
    link: "https://apps.apple.com/id/app/evoria/id6443814266",
    techStacksOrTools: "techstacks",
    frontend: [],
    infra: [NodeJS, Laravel],
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
    id: 5,
    category: AppDevelopment,
    title: "CUPK Mobile",
    description: `CUPK is a mobile digital banking app designed for CU Pancur Kasih customers in Indonesia. It offers a comprehensive range of financial services, including easy loans, savings management, payments, donations, and transfers, all accessible through a user-friendly interface. CUPK empowers users to manage their finances efficiently, providing convenient solutions to everyday banking needs, while promoting financial inclusion for its members.`,
    short_description:
      "A digital banking app for CU Pancur Kasih customers, offering easy financial services like loans, savings, payments, and transfers.",
    members: "Feli",
    duration: "2 Weeks",
    tags: ["Apps Design"],
    link: "",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [Figma],
    logo: "/assets/images/portfolio/web-development/yayasan-bumn/logo.webp",
    coverImage:
      "/assets/images/portfolio/web-development/yayasan-bumn/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-1.webp",
    showcaseImage2:
      "/assets/images/portfolio/web-development/yayasan-bumn/showcase-image-2.webp",
  },
];
