import {
  AdobeAfterEffects,
  AdobeIllustrator,
  Blender,
  DaVinciResolve,
  Figma,
  Rive,
} from "../tech-tools/tools";
import { Assets2D3D } from "./portfolio-categories";
import type { Portfolio } from "@/types/Portfolio";

export const assets2D3DPortfolios: Portfolio[] = [
  {
    id: 1,
    category: Assets2D3D,
    title: "Kreate",
    description: `The Kreate app is the ultimate toolkit for creator-fan engagement, providing a platform where creators can share their content and fans can interact directly with them. With Kreate, genuine connections thrive as creators build their communities, share exclusive content, and engage with their audience in meaningful ways. It's a space designed to strengthen bonds and foster deeper relationships between creators and their fans.`,
    short_description:
      "An app empowering creators to share content and build stronger, more genuine connections with their fans.",
    members: "Hose",
    duration: "Oct 2024",
    tags: ["2D Asset"],
    link: "",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [AdobeIllustrator],
    logo: "/assets/images/portfolio/asset-design/kreate/logo.svg",
    coverImage: "/assets/images/portfolio/asset-design/kreate/cover-image.svg",
    showcaseImage1:
      "/assets/images/portfolio/asset-design/kreate/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/asset-design/kreate/showcase-image-2.svg",
  },
  {
    id: 2,
    category: Assets2D3D,
    title: "Keepingg",
    description: `Keepingg is an all-in-one Indonesian digital wallet that simplifies payments, rewards, and entertainment. With keepingg, users can easily manage transactions, earn rewards, and access a wide range of entertainment options, all from one convenient platform. It's designed to enhance daily experiences while offering seamless integration with local services, making digital finance more accessible and enjoyable for everyone.`,
    short_description:
      "An Indonesian digital wallet that simplifies payments, rewards, and entertainment in one seamless platform.",
    members: "Felicia",
    duration: "1 Week",
    tags: ["2D Asset"],
    link: "",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [Figma],
    logo: "/assets/images/portfolio/asset-design/keepingg/logo.svg",
    coverImage:
      "/assets/images/portfolio/asset-design/keepingg/cover-image.svg",
    showcaseImage1:
      "/assets/images/portfolio/asset-design/keepingg/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/asset-design/keepingg/showcase-image-2.svg",
  },
  {
    id: 3,
    category: Assets2D3D,
    title: "Manta",
    description: `Manta is your perfect diving companion app, designed to connect divers with compatible buddies and dive centers based on preferences, certifications, and dive history. Join a global community of explorers who share your passion for underwater adventure.`,
    short_description:
      "A diving companion app connecting divers with buddies and dive centers based on preferences and certifications.",
    members: "Arief",
    duration: "Nov 2024",
    tags: ["2D Motion"],
    link: "https://drive.google.com/file/d/1rYaAHn0tJ24QOLKlqUNCbJKe1gr35gMb/view",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [Rive, DaVinciResolve],
    logo: "/assets/images/portfolio/asset-design/manta/logo.png",
    coverImage: "/assets/images/portfolio/asset-design/manta/cover-image.svg",
    showcaseImage1:
      "/assets/images/portfolio/asset-design/manta/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/asset-design/manta/showcase-image-2.svg",
  },
  {
    id: 4,
    category: Assets2D3D,
    title: "Retro Buddies",
    description: `Basic cute 3D modelling, for fictional character`,
    short_description: "Basic cute 3D modelling, for fictional character",
    members: "Nabil",
    duration: "1 Week",
    tags: ["3D Asset"],
    link: "",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [Blender, AdobeAfterEffects],
    logo: "/assets/images/portfolio/asset-design/retro-buddies/logo.svg",
    coverImage:
      "/assets/images/portfolio/asset-design/retro-buddies/cover-image.svg",
    showcaseImage1:
      "/assets/images/portfolio/asset-design/retro-buddies/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/asset-design/retro-buddies/showcase-image-2.svg",
  },
  {
    id: 5,
    category: Assets2D3D,
    title: "Introductory 3D Basic Motion ",
    description: `Creates a basic 3D Motion Graphics for branding purposes.`,
    short_description:
      "Creates a basic 3D Motion Graphics for branding purposes.",
    members: "Nabil",
    duration: "1 Week",
    tags: ["3D Asset"],
    link: "https://drive.google.com/file/d/1vdlzhZK9xSojXN9X0cUnv4jXT7Yv69fQ/view",
    techStacksOrTools: "tools",
    frontend: [],
    infra: [],
    tools: [Blender, AdobeAfterEffects],
    logo: "/assets/images/portfolio/asset-design/basic-3d/logo.svg",
    coverImage:
      "/assets/images/portfolio/asset-design/basic-3d/cover-image.svg",
    showcaseImage1:
      "/assets/images/portfolio/asset-design/basic-3d/showcase-image-1.svg",
    showcaseImage2:
      "/assets/images/portfolio/asset-design/basic-3d/showcase-image-2.svg",
  },
];
