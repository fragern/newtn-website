"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets2D3DPortfolios } from "@/data/portfolio/2d-3d-assets";
import { allPortfolios } from "@/data/portfolio/all-portfolios";
import { appDevelopmentPortfolios } from "@/data/portfolio/app-development";
import { brandingPortfolios } from "@/data/portfolio/branding";
import {
  PortfolioCategories,
  WebDevelopment,
} from "@/data/portfolio/portfolio-categories";
import { webDevelopmentPortfolios } from "@/data/portfolio/web-development";
import type { Portfolio } from "@/types/Portfolio";
import type { PortfolioCategory } from "@/types/PortfolioCategory";
import CardStack from "./containers/CardStack";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>(WebDevelopment);

  const categoryMap: Record<string, Portfolio[]> = {
    "web-development": webDevelopmentPortfolios,
    "app-development": appDevelopmentPortfolios,
    "2d-3d-assets": assets2D3DPortfolios,
    branding: brandingPortfolios,
  };

  const selectedPortfolios = categoryMap[selectedCategory.slug] ?? [];

  const handleScrollEnd = () => {
    const currentIndex = PortfolioCategories.findIndex(
      (cat) => cat.id === selectedCategory.id,
    );
    const nextIndex = (currentIndex + 1) % PortfolioCategories.length;
    setSelectedCategory(PortfolioCategories[nextIndex] as PortfolioCategory);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="absolute -top-36 -z-10 h-[363px] w-screen lg:-top-20">
          <Image
            src={"/assets/images/portfolio/top-portfolio.webp"}
            fill
            alt="top-portfolio"
            className="top-0 object-contain"
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 flex flex-col justify-center gap-2 px-4 py-20 text-[#2F4157] lg:px-8 lg:pb-[180px] lg:pt-[126px]">
          <h1 className="text-center text-2xl font-medium lg:text-4xl">
            Where ideas come to life
          </h1>
          <p className="text-center text-sm lg:text-xl">
            Explore our portfolio, showcasing projects our member has
            contributed to. From sleek websites to immersive mobile apps and
            captivating designs, each reflects our passion for innovation and
            excellence. Let our work inspire your next big idea.
          </p>
        </div>

        <div className="hidden w-screen justify-between pr-8 xl:flex">
          <div className="flex w-[370px] flex-col gap-4">
            {PortfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`w-[247px] py-5 pl-8 text-left font-medium transition-all duration-500 ease-in-out ${
                  selectedCategory.id === category.id
                    ? "clip-path-trapezoid w-[370px] font-bold text-white"
                    : ""
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mb-12 w-full">
            <CardStack
              portfolios={selectedPortfolios}
              onScrollEnd={handleScrollEnd}
            />
          </div>
        </div>

        <div className="mb-12 block xl:hidden">
          <div className="flex flex-col gap-10">
            {PortfolioCategories.map((category) => (
              <div key={category.id} className="flex flex-col gap-3">
                <div className="clip-path-trapezoid w-fit px-4 py-1 text-white">
                  <p className="w-[161px]">{category.name}</p>
                </div>

                <div className="no-scrollbar flex items-center gap-4 self-stretch overflow-x-auto px-4 py-2">
                  {allPortfolios
                    .filter((portfolio) => portfolio.category === category)
                    .map((portfolio) => (
                      <Link
                        href={`/portfolio/${portfolio.category.slug}/${portfolio.id}`}
                        key={portfolio.id}
                        className="flex flex-col justify-start gap-1 rounded-xl bg-white shadow-md"
                      >
                        <div className="relative h-32 w-[189px] rounded-t-xl bg-[#D9D9D9]">
                          <Image
                            src={portfolio.coverImage}
                            alt={`${portfolio.title}'s image`}
                            fill
                            className="h-full w-full rounded-t-xl object-cover"
                          />
                        </div>
                        <p className="p-1 text-base font-medium">
                          {portfolio.title}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
