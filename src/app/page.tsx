"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewtnService } from "@/data/newtn-service";
import { PortfolioCategory } from "@/data/portfolio";
import { type PortfolioCategoryType } from "@/types/PortfolioCategory";
import ContactUs from "./_components/sections/ContactUs";
import CardStack from "./portfolio/containers/CardStack";

export default function Home() {
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
      <main className="lg:pt-10">
        <div className="min-h-screen">
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

              <div className="flex flex-col gap-2 text-center text-2xl font-bold text-[#2F4157] text-stroke-1 text-stroke-white md:text-left md:text-5xl md:font-medium">
                <p className="">Versatility.</p>
                <p>Innovation.</p>
                <p>Fresh Perspective.</p>
              </div>
            </div>

            <div className="absolute right-0 z-0 pt-20 md:relative md:pt-0">
              <div className="flex flex-col items-end gap-4">
                <div className="clip-path-triangle h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                <div className="flex gap-4">
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                  <div className="h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                </div>
                <div className="flex gap-4">
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                  <div className="h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                </div>
                <div className="flex gap-4">
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                  <div className="h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                  <div className="clip-path-triangle h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                  <div className="h-[67px] w-[67px] bg-[#2F4157] md:h-[156px] md:w-[156px]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pt-[150px] md:pt-24">
            <h1 className="text:xl text-center font-normal text-[#2F4157] md:text-5xl">
              <b>Newtn</b> is a software studio uniting digital talent. <br />{" "}
              Rooted in curiosity and innovation, we turn{" "}
              <u>ideas into reality</u>.
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-[80px] bg-[#C7D9E5] px-8 py-[80px] text-[#2F4157] md:mt-[120px]">
          <div className="flex flex-col justify-center gap-[10px]">
            <h1 className="text-center text-[30px] font-semibold">
              End-to-End Services, Delivered Effortlessly
            </h1>
            <p className="text-center text-xl">
              We specialize in comprehensive digital solutions, delivering
              end-to-end services that encompass asset creation, UI/UX design,
              development, and seamless deployment. Our expertise ensures a
              streamlined journey from concept to launch, empowering your
              digital presence.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            {NewtnService.map((service, index) => (
              <div className="rounded-[20px] bg-white shadow-lg" key={index}>
                <div className="relative h-auto w-full">
                  <Image
                    src={service.image}
                    // fill
                    width={500}
                    height={0}
                    alt={service.image}
                    className="h-auto w-full object-contain object-top"
                  />
                </div>
                <div className="px-6 pt-5">
                  <h2 className="text-center text-3xl font-semibold text-black">
                    {service.title}
                  </h2>
                  <p className="px-6 pt-2 text-center text-base text-[#515151]">
                    {service.description}
                  </p>
                  <div className="mb-8 mt-10 flex flex-wrap justify-center gap-5 px-9">
                    {service.tools.map((tools, index) => (
                      <div
                        className="rounded-full bg-[#D9D9D9] px-5 py-2 font-semibold text-[#515151]"
                        key={index}
                      >
                        {tools}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <h1 className="flex justify-center text-center text-3xl font-semibold text-[#2F4157]">
            Selected Projects
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 px-3 pt-6">
            {PortfolioCategory.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 text-[#2F4157] transition-all duration-500 ease-in-out ${selectedCategory.id === category.id ? "font-semibold text-[#2F4157]" : "opacity-50"}`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-[#2F4157] ${selectedCategory.id === category.id ? "bg-[#2F4157]" : "opacity-50"}`}
                ></div>
                {category.title}
              </button>
            ))}
          </div>

          <div className="w-full pt-20">
            <CardStack items={selectedCategory} onScrollEnd={handleScrollEnd} />
          </div>
          <Link
            href={"/portfolio"}
            className="mx-4 mb-20 mt-5 flex w-[205px] justify-center rounded-full bg-[#2F4157] px-6 py-3.5 text-center text-white opacity-60 lg:mx-auto"
          >
            Load more project
          </Link>
        </div>

        <ContactUs />
      </main>
    </>
  );
}
