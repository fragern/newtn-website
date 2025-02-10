import { type PortfolioType } from "./Portfolio";

export type PortfolioCategoryType = {
  id: number;
  title: string;
  portfolios: PortfolioType[];
};
