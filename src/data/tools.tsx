import AdobeAfterEffectsIcon from "@/assets/icons/tools/AdobeAfterEffectsIcon";
import AdobeIllustratorIcon from "@/assets/icons/tools/AdobeIllustratorIcon";
import AdobePhotoshopIcon from "@/assets/icons/tools/AdobePhotoshopIcon";
import BlenderIcon from "@/assets/icons/tools/BlenderIcon";
import FigmaIcon from "@/assets/icons/tools/FigmaIcon";
import ProcreateIcon from "@/assets/icons/tools/ProcreateIcon";
import type { TechTool } from "@/types/TechTool";

export const Figma: TechTool = {
  name: "Figma",
  icon: <FigmaIcon className="h-full w-full object-contain" />,
};

export const AdobePhotoshop: TechTool = {
  name: "Adobe Photoshop",
  icon: <AdobePhotoshopIcon className="h-full w-full object-contain" />,
};

export const AdobeIllustrator: TechTool = {
  name: "Adobe Illustrator",
  icon: <AdobeIllustratorIcon className="h-full w-full object-contain" />,
};

export const AdobeAfterEffects: TechTool = {
  name: "Adobe After Effects",
  icon: <AdobeAfterEffectsIcon className="h-full w-full object-contain" />,
};

export const Procreate: TechTool = {
  name: "Procreate",
  icon: <ProcreateIcon className="h-full w-full object-contain" />,
};

export const Blender: TechTool = {
  name: "Blender",
  icon: <BlenderIcon className="h-full w-full object-contain" />,
};
