import { type PortfolioType } from "./PortfolioType";

export type PortfolioCategoryType = {
  id: number;
  title: string;
  portfolios: PortfolioType[];
};
