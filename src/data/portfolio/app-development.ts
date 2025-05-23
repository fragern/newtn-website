import { GCP } from "../tech-tools/tech-stack";
import { Figma } from "../tech-tools/tools";
import {
  Golang,
  Laravel,
  NodeJS,
  ReactJS,
  ReactNative,
  Swift,
} from "./../tech-tools/tech-stack";
import { AppDevelopment } from "./portfolio-categories";
import type { Portfolio } from "@/types/Portfolio";

export const appDevelopmentPortfolios: Portfolio[] = [
  {
    id: 1,
    category: AppDevelopment,
    title: "Apical",
    description: `The Apical app is designed to empower individuals in managing their health, particularly in the context of HIV care. Through its innovative features, the app allows users to track their medication, visualize viral load progress, and access essential educational resources. Apical fosters a sense of community by providing a platform for support, encouragement, and knowledge sharing. With its intuitive design and holistic approach, the app aims to improve both physical health and mental well-being, offering a comprehensive tool for users to stay informed and connected on their health journey.`,
    short_description:
      "A holistic app helping individuals manage HIV care through medication tracking, viral load visualization, education, and community support.",
    members: "Nuel, Nafis, Eric, Rian, Dani",
    duration: "3 Months",
    tags: ["Apps Design", "Apps Dev"],
    link: "https://apps.apple.com/app/apical/id6737177998",
    techStacksOrTools: "techstacks",
    frontend: [Swift],
    infra: [Golang, GCP],
    tools: [],
    logo: "/assets/images/portfolio/app-development/apical/logo.webp",
    coverImage:
      "/assets/images/portfolio/app-development/apical/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/app-development/apical/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/app-development/apical/showcase-image-2.svg",
  },
  {
    id: 2,
    category: AppDevelopment,
    title: "Hikewise",
    description: `Hikewise`,
    short_description:
      "An app that helps users track their journey in mountain.",
    members: "Bryan, Aldrich",
    duration: "3 Months",
    tags: ["Apps Design", "Apps Dev"],
    link: "",
    techStacksOrTools: "techstacks",
    frontend: [Swift],
    infra: [Golang, GCP],
    tools: [],
    logo: "/assets/images/portfolio/app-development/hikewise/logo.webp",
    coverImage:
      "/assets/images/portfolio/app-development/hikewise/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/app-development/hikewise/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/app-development/hikewise/showcase-image-2.svg",
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
    logo: "/assets/images/portfolio/app-development/dealdulu/logo.webp",
    coverImage:
      "/assets/images/portfolio/app-development/dealdulu/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/app-development/dealdulu/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/app-development/dealdulu/showcase-image-2.svg",
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
    logo: "/assets/images/portfolio/app-development/evoria/logo.webp",
    coverImage:
      "/assets/images/portfolio/app-development/evoria/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/app-development/evoria/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/app-development/evoria/showcase-image-2.svg",
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
    logo: "/assets/images/portfolio/app-development/cupk-mobile/logo.webp",
    coverImage:
      "/assets/images/portfolio/app-development/cupk-mobile/cover-image.webp",
    showcaseImage1:
      "/assets/images/portfolio/app-development/cupk-mobile/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/app-development/cupk-mobile/showcase-image-2.svg",
  },
];
