import type { TechStack } from "./techStack";

export type Portfolio = {
  category: string;
  title: string;
  description: string;
  members: string;
  duration: string;
  tags: string;
  link: string;
  frontend: TechStack[];
  infra: TechStack[];
  tools: TechStack[];
  coverImage: string;
  showcaseImage1: string;
  showcaseImage2: string;
};
