import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  FaGolang,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSwift,
} from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import type { TechTool } from "@/types/TechTool";

export const TailwindCSS: TechTool = {
  name: "Tailwind Css",
  icon: <SiTailwindcss className="h-full w-full object-contain text-primary" />,
};

export const NextJS: TechTool = {
  name: "Next.js",
  icon: <SiNextdotjs className="h-full w-full object-contain text-primary" />,
};

export const PHP: TechTool = {
  name: "PHP",
  icon: <FaPhp className="h-full w-full object-contain text-primary" />,
};

export const Swift: TechTool = {
  name: "Swift",
  icon: <FaSwift className="h-full w-full object-contain text-primary" />,
};

export const Golang: TechTool = {
  name: "Golang",
  icon: <FaGolang className="h-full w-full object-contain text-primary" />,
};

export const GCP: TechTool = {
  name: "Google Cloud Platform",
  icon: (
    <DiGoogleCloudPlatform className="h-full w-full object-contain text-primary" />
  ),
};

export const ReactJS: TechTool = {
  name: "React JS",
  icon: <FaReact className="h-full w-full object-contain text-primary" />,
};

export const ReactNative: TechTool = {
  name: "React Native",
  icon: <FaReact className="h-full w-full object-contain text-primary" />,
};

export const NodeJS: TechTool = {
  name: "Node JS",
  icon: <FaNodeJs className="h-full w-full object-contain text-primary" />,
};

export const Laravel: TechTool = {
  name: "Laravel",
  icon: <FaLaravel className="h-full w-full object-contain text-primary" />,
};
