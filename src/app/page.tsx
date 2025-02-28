"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { NewtnService } from "@/data/newtn-service";
import { assets2D3DPortfolios } from "@/data/portfolio/2d-3d-assets";
import { appDevelopmentPortfolios } from "@/data/portfolio/app-development";
import { brandingPortfolios } from "@/data/portfolio/branding";
import {
  PortfolioCategories,
  WebDevelopment,
} from "@/data/portfolio/portfolio-categories";
import { webDevelopmentPortfolios } from "@/data/portfolio/web-development";
import { type Portfolio } from "@/types/Portfolio";
import { type PortfolioCategory } from "@/types/PortfolioCategory";
import CardStack from "./portfolio/containers/CardStack";

const text = "we turn ideas into reality.";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<PortfolioCategory>(WebDevelopment);

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

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [inView, controls, hasAnimated]);

  return (
    <>
      <main className="lg:pt-10">
        <div className="min-h-full">
          <div className="flex justify-center px-12 md:justify-between">
            <div className="z-10 flex flex-col gap-y-20 pt-16">
              <div className="relative h-[56px] md:h-[138px] md:w-[692px]">
                <Image
                  alt="newtn-text"
                  src={"/assets/logos/newtn/text/text-logo.webp"}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <div className="flex flex-col gap-0 text-center text-2xl font-bold text-[#2F4157] text-stroke-1 text-stroke-white md:gap-2 md:text-left md:text-5xl">
                <p>Versatility.</p>
                <p>Innovation.</p>
                <p>Fresh Perspective.</p>
              </div>
            </div>

            <div className="absolute right-0 z-0 pt-20 md:relative md:pt-0">
              <div className="flex flex-col items-end gap-4">
                <div className="clip-path-triangle h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                <div className="flex gap-4">
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                  <div className="h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                </div>
                <div className="flex gap-4">
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                  <div className="h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                </div>
                <div className="flex gap-4">
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                  <div className="h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                  <div className="h-[67px] w-[67px] bg-primary transition-all duration-300 hover:border hover:border-primary hover:bg-white md:h-[156px] md:w-[156px]"></div>
                </div>
              </div>
            </div>
          </div>

          <div ref={ref} className="px-2 pb-14 pt-[150px] md:px-8 md:pt-24">
            <h1 className="text-center text-base font-normal text-[#2F4157] md:text-5xl">
              <b>Newtn</b> is a software studio uniting digital talent. <br />
              Rooted in curiosity and innovation,{" "}
              <motion.span>
                {text.split(" ").map((word, i) => (
                  <span key={i} className="mr-2 underline">
                    {word.split("").map((letter, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0 }}
                        animate={controls}
                        variants={{ visible: { opacity: 1 } }}
                        transition={{ delay: i * 0.5 + j * 0.1 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.span>
            </h1>
          </div>
        </div>

        <div className="relative flex flex-col gap-10 bg-[#C7D9E5] px-8 py-10 text-[#2F4157] md:mt-[120px] md:gap-20 md:py-20">
          <div className="flex flex-col justify-center gap-[10px]">
            <h1 className="text-center text-2xl font-semibold md:text-[30px]">
              End-to-End Services, Delivered Effortlessly
            </h1>
            <p className="text-center text-sm md:text-lg">
              We specialize in comprehensive digital solutions, delivering
              end-to-end services that encompass asset creation, UI/UX design,
              development, and seamless deployment. Our expertise ensures a
              streamlined journey from concept to launch, empowering your
              digital presence.
            </p>
          </div>

          <div className="relative flex flex-col gap-8 md:flex-row">
            {NewtnService.map((service, index) => (
              <div
                className="relative z-10 rounded-[20px] bg-white shadow-lg"
                key={index}
              >
                <div className="relative h-auto w-full">
                  <Image
                    src={service.image}
                    width={500}
                    height={0}
                    alt={service.image}
                    className="h-auto w-full object-contain object-top"
                  />
                </div>
                <div className="px-6 pt-5">
                  <h2 className="text-center text-2xl font-semibold text-black md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="px-0 pt-2 text-center text-sm text-[#515151] md:px-6 md:text-base">
                    {service.description}
                  </p>
                  <div className="mb-8 mt-10 flex flex-wrap justify-center gap-2 px-0 md:gap-5 md:px-9">
                    {service.tools.map((tools, index) => (
                      <div
                        className="rounded-full bg-teal px-3 py-1 text-sm font-semibold text-white md:px-5 md:py-2"
                        key={index}
                      >
                        {tools}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Image
              alt="bottom-left"
              src={"/assets/images/home/bottom-left.svg"}
              width={300}
              height={300}
              className="absolute -left-8 bottom-[-40px] z-0 hidden md:block lg:w-[300px]"
            />
            <Image
              alt="bottom-right"
              src={"/assets/images/home/bottom-right.svg"}
              width={300}
              height={300}
              className="absolute -right-8 bottom-[-40px] z-0 hidden md:block lg:w-[300px]"
            />
          </div>
        </div>

        <div className="relative pt-8">
          <Image
            alt="top-left"
            src={"/assets/images/home/top-left.svg"}
            width={300}
            height={300}
            className="absolute left-0 top-0 -z-10 hidden md:block lg:w-[300px]"
          />

          <h1 className="relative z-10 flex justify-center text-center text-xl font-semibold text-[#2F4157] md:text-3xl">
            Selected Projects
          </h1>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 px-3 pt-6">
            {PortfolioCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 text-sm text-[#2F4157] transition-all duration-500 ease-in-out md:text-base ${
                  selectedCategory.id === category.id
                    ? "font-semibold text-[#2F4157]"
                    : "opacity-50"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-primary ${
                    selectedCategory.id === category.id
                      ? "bg-primary"
                      : "opacity-50"
                  }`}
                ></div>
                {category.name}
              </button>
            ))}
          </div>

          <div className="relative z-10 w-full pt-10">
            <CardStack
              portfolios={selectedPortfolios}
              onScrollEnd={handleScrollEnd}
            />
          </div>

          <Link
            href={"/portfolio"}
            className="relative z-10 mx-4 mb-20 mt-5 flex w-[205px] justify-center rounded-full bg-primary px-6 py-3.5 text-center text-white opacity-60 lg:mx-auto"
          >
            Load more project
          </Link>

          <Image
            alt="bottom-right-portfolio"
            src={"/assets/images/home/bottom-right-portfolio.svg"}
            width={300}
            height={300}
            className="absolute bottom-0 right-0 -z-10 hidden md:block lg:w-[300px]"
          />
        </div>
      </main>
    </>
  );
}
