import type { PortfolioCategory } from "@/types/PortfolioCategory";

export const WebDevelopment: PortfolioCategory = {
  id: 1,
  slug: "web-development",
  name: "Web Development",
};

export const AppDevelopment: PortfolioCategory = {
  id: 2,
  slug: "app-development",
  name: "App Development",
};

export const Assets2D3D: PortfolioCategory = {
  id: 3,
  slug: "2d-3d-assets",
  name: "2D & 3D Assets",
};

export const Branding: PortfolioCategory = {
  id: 4,
  slug: "branding",
  name: "Branding",
};

export const PortfolioCategories: PortfolioCategory[] = [
  WebDevelopment,
  AppDevelopment,
  Assets2D3D,
  Branding,
];
