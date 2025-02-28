import { FaPhp, FaReact, FaVuejs } from "react-icons/fa6";
import { SiNextdotjs, SiNuxtdotjs } from "react-icons/si";
import type { TechTool } from "@/types/techTool";

export const React: TechTool = {
  name: "React",
  icon: <FaReact className="h-full w-full object-contain text-primary" />,
};

export const NextJS: TechTool = {
  name: "Next.js",
  icon: <SiNextdotjs className="h-full w-full object-contain text-primary" />,
};

export const VueJS: TechTool = {
  name: "Vue.js",
  icon: <FaVuejs className="h-full w-full object-contain text-primary" />,
};

export const Nuxt: TechTool = {
  name: "Nuxt",
  icon: <SiNuxtdotjs className="h-full w-full object-contain text-primary" />,
};

export const PHP: TechTool = {
  name: "PHP",
  icon: <FaPhp className="h-full w-full object-contain text-primary" />,
};
