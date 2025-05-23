import type { PortfolioCategory } from "./PortfolioCategory";
import type { TechTool } from "./TechTool";

export type Portfolio = {
  id: number;
  category: PortfolioCategory;
  title: string;
  description: string;
  short_description: string;
  members: string;
  duration: string;
  tags: string[];
  link: string;
  techStacksOrTools: string;
  frontend: TechTool[];
  infra: TechTool[];
  tools: TechTool[];
  logo: string;
  coverImage: string;
  showcaseImage1: string;
  showcaseImage2: string;
};
