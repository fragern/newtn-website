"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets2D3DPortfolios } from "@/data/portfolio/2d-3d-assets";
import { appDevelopmentPortfolios } from "@/data/portfolio/app-development";
import { brandingPortfolios } from "@/data/portfolio/branding";
import {
  PortfolioCategories,
  WebDevelopment,
} from "@/data/portfolio/portfolio-categories";
import { webDevelopmentPortfolios } from "@/data/portfolio/web-development";
import type { Portfolio } from "@/types/Portfolio";
import type { PortfolioCategory } from "@/types/PortfolioCategory";

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

  return (
    <>
      <div className="relative w-full">
        <div className="absolute -top-36 -z-10 h-[363px] w-screen lg:-top-20">
          <Image
            src={"/assets/images/supergraphics/top-portfolio.svg"}
            fill
            alt="top-portfolio"
            className="top-0 object-contain"
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-start justify-center gap-2 px-4 pt-20 text-[#2F4157] lg:px-8 lg:pt-72">
          <h1 className="mb-4 text-left text-2xl font-semibold sm:text-5xl">
            Where Ideas Come to Life
          </h1>
          <p className="text-left text-base lg:text-2xl">
            Explore our portfolio, showcasing projects our member has
            contributed to. From sleek websites to immersive mobile apps and
            captivating designs, each reflects our passion for innovation and
            excellence. Let our work inspire your next big idea.
          </p>
        </div>

        <div className="flex flex-col items-center py-28">
          {/* Top Category Bar */}
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {PortfolioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`text-base font-medium transition-all duration-300 ease-in-out sm:text-lg ${
                  selectedCategory.id === category.id
                    ? "font-semibold text-primary"
                    : "text-[#AAB9CC] hover:text-[#3B506B]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Horizontal line */}
          <div className="w-full max-w-5xl px-4">
            <div className="h-[1px] w-full bg-secondary" />
          </div>

          {/* Portfolio Cards */}
          <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
            {selectedPortfolios.map((portfolio) => (
              <Link
                href={`/portfolio/${portfolio.category.slug}/${portfolio.id}`}
                key={portfolio.id}
                className="flex flex-col overflow-hidden rounded-xl border border-primary bg-white transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full bg-gray-200">
                  <Image
                    src={portfolio.showcaseImage2}
                    alt={`${portfolio.title}'s image`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-semibold">{portfolio.title}</h1>
                  <p className="mt-1 text-gray-600">
                    {portfolio.short_description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {portfolio.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-primary bg-white px-3 py-1 font-semibold text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
