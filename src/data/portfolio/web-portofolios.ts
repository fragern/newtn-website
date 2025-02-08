import type { Portfolio } from "@/types/portfolio";
import { React } from "../tech-stack/frontend";
import { PHP } from "../tech-stack/infra";

export const webPortfolios: Portfolio[] = [
  {
    category: "Web Development",
    title: "Yayasan BUMN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit quibusdam numquam veritatis quos corporis molestiae similique ex sapiente maxime perferendis rerum alias obcaecati, amet sit velit architecto sint fugit.",
    members: "Nafis",
    duration: "Jun 2024 - Aug 2024",
    tags: "Website, Sass, Design",
    link: "https://www.google.com/",
    frontend: [React],
    infra: [PHP],
    tools: [],
    coverImage: "/assets/logos/newtn/text/navy.svg",
    showcaseImage1: "/assets/logos/newtn/text/navy.svg",
    showcaseImage2: "/assets/logos/newtn/text/navy.svg",
  },
];
