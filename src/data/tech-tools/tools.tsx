import { FaFigma } from "react-icons/fa6";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBlender,
  SiDavinciresolve,
} from "react-icons/si";
import type { TechTool } from "@/types/techTool";

export const Figma: TechTool = {
  name: "Figma",
  icon: <FaFigma className="h-full w-full object-contain text-primary" />,
};

export const AdobePhotoshop: TechTool = {
  name: "Adobe Photoshop",
  icon: (
    <SiAdobephotoshop className="h-full w-full object-contain text-primary" />
  ),
};

export const AdobeIllustrator: TechTool = {
  name: "Adobe Illustrator",
  icon: (
    <SiAdobeillustrator className="h-full w-full object-contain text-primary" />
  ),
};

export const AdobeAfterEffects: TechTool = {
  name: "Adobe After Effects",
  icon: (
    <SiAdobeaftereffects className="h-full w-full object-contain text-primary" />
  ),
};

export const Blender: TechTool = {
  name: "Blender",
  icon: <SiBlender className="h-full w-full object-contain text-primary" />,
};

export const DaVinciResolve: TechTool = {
  name: "DaVinci Resolve",
  icon: (
    <SiDavinciresolve className="h-full w-full object-contain text-primary" />
  ),
};
