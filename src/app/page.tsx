"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { NewtnService } from "@/data/newtn-service";
import { assets2D3DPortfolios } from "@/data/portfolio/2d-3d-assets";
import { allPortfolios } from "@/data/portfolio/all-portfolios";
import { appDevelopmentPortfolios } from "@/data/portfolio/app-development";
import { brandingPortfolios } from "@/data/portfolio/branding";
import {
  PortfolioCategories,
  WebDevelopment,
} from "@/data/portfolio/portfolio-categories";
import { webDevelopmentPortfolios } from "@/data/portfolio/web-development";
import { type Portfolio } from "@/types/Portfolio";
import { type PortfolioCategory } from "@/types/PortfolioCategory";

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
    <main>
      <section className="relative flex w-full justify-center px-4 pb-64 pt-32">
        <div className="absolute -bottom-48 left-16 h-96 w-32 bg-primary"></div>
        <div className="absolute -bottom-48 left-56 h-96 w-32 bg-primary"></div>
        <div className="absolute -bottom-48 left-96 h-96 w-32 bg-primary"></div>

        <div className="flex w-full max-w-5xl flex-col items-center gap-16">
          <div className="relative flex flex-col gap-4 overflow-visible">
            <div className="absolute inset-0 -z-10 m-auto mt-1 size-96 rounded-full bg-[#C7D9E5] blur-[128px]"></div>

            <h1 className="text-center text-5xl font-semibold text-primary">
              Your end-to-end tech partner with a product-first mindset
            </h1>

            <p className="text-center text-2xl font-light text-primary">
              From idea to launch, Newtn delivers full-cycle product development
              — combining sharp design, agile engineering, and reliable
              deployment to turn bold ideas into impactful digital products.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              type="submit"
              className="rounded-full border border-primary bg-primary px-6 py-2 text-xl font-medium text-white transition-all hover:bg-white hover:text-primary"
            >
              Let&apos;s Talk
            </button>

            <button
              type="submit"
              className="rounded-full border border-primary bg-white px-6 py-2 text-xl font-medium text-primary transition-all hover:bg-primary hover:text-white"
            >
              Explore our work
            </button>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center bg-white/50 px-4 pt-32 backdrop-blur-sm">
        <div className="flex w-full max-w-5xl flex-col items-center gap-16">
          <div className="flex w-full max-w-3xl flex-col gap-4">
            <h1 className="text-center text-4xl font-semibold text-primary">
              End-to-End Services, Delivered Effortlessly
            </h1>

            <p className="text-center text-xl font-light text-primary">
              We specialize in comprehensive digital solutions, delivering
              end-to-end services that encompass asset creation, UI/UX design,
              development, and seamless deployment. Our expertise ensures a
              streamlined journey from concept to launch, empowering your
              digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 drop-shadow-xl">
              <span className="h-24 w-24 bg-orange-300"></span>

              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold text-primary">
                  Development
                </h2>

                <p className="text-base text-primary">
                  Crafting responsive, user-friendly websites and building
                  intuitive, high-performance mobile apps for iOS and Android,
                  tailored to your business needs.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  Back-end
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  iOS
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  Android
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  Cross-Platform
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  Front-end
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  Website
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 drop-shadow-xl">
              <span className="h-24 w-24 bg-orange-300"></span>

              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold text-primary">Design </h2>

                <p className="text-base text-primary">
                  Creating stunning app and web designs, strong brand
                  identities, and high-quality 2D & 3D assets with engaging
                  motion graphics, all driven by in-depth UX research.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  App Design
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  Web Design
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  Branding
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  3D/2D Asset
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  2D Motion
                </span>

                <span className="rounded-full border border-primary bg-white px-6 py-2 text-base font-semibold text-primary">
                  UX Research
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center px-4 py-32">
        <div className="flex w-full max-w-5xl flex-col gap-8">
          <div className="flex w-full max-w-3xl flex-col gap-4">
            <h1 className="text-5xl font-bold text-primary">
              Newtn&apos;s Projects
            </h1>

            <p className="text-xl text-primary">Web Development</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {selectedPortfolios.slice(0, 2).map((portfolio) => (
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

          <Link
            href="/portfolio"
            className="flex items-center gap-2 self-center border-b border-transparent hover:border-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5"
              />
            </svg>

            <span className="flex gap-1">
              <p className="text-xl text-primary">See all work</p>
              <p className="text-sm">({allPortfolios.length})</p>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
