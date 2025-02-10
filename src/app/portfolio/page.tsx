"use client";
import * as React from "react";
import Image from "next/image";
import { PortfolioCategory } from "@/data/portfolio";
import { type PortfolioCategoryType } from "@/types/PortfolioCategory";
import CardStack from "./containers/CardStack";
import ContactUs from "../_components/sections/ContactUs";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<PortfolioCategoryType>(
      PortfolioCategory[0] as PortfolioCategoryType,
    );

  const handleScrollEnd = () => {
    const currentIndex = PortfolioCategory.findIndex(
      (cat) => cat.id === selectedCategory.id,
    );
    const nextIndex = (currentIndex + 1) % PortfolioCategory.length;
    setSelectedCategory(PortfolioCategory[nextIndex] as PortfolioCategoryType);
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
            {PortfolioCategory.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`w-[247px] py-5 pl-8 text-left font-medium transition-all duration-500 ease-in-out ${
                  selectedCategory.id === category.id
                    ? "clip-path-trapezoid w-[370px] font-bold text-white"
                    : ""
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="w-full">
            <CardStack items={selectedCategory} onScrollEnd={handleScrollEnd} />
          </div>
        </div>

        <div className="block xl:hidden">
          <div className="flex flex-col gap-10">
            {PortfolioCategory.map((category) => (
              <div key={category.id} className="flex flex-col gap-3">
                <div className="clip-path-trapezoid w-fit px-4 py-1 text-white">
                  <p className="w-[161px]">{category.title}</p>
                </div>

                <div className="no-scrollbar flex items-center gap-4 self-stretch overflow-x-auto px-4 py-2">
                  {category.portfolios.map((portfolio) => (
                    <div
                      key={portfolio.id}
                      className="flex flex-col justify-start gap-1 rounded-xl bg-white shadow-md"
                    >
                      <div className="h-32 w-[189px] rounded-t-xl bg-[#D9D9D9]"></div>
                      <p className="p-1 text-base font-medium">
                        {portfolio.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[50vh]"></div>
        <ContactUs />
      </div>
    </>
  );
}
