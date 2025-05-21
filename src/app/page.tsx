"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { allPortfolios } from "@/data/portfolio/all-portfolios";
import {
  PortfolioCategories,
  WebDevelopment,
} from "@/data/portfolio/portfolio-categories";
import type { PortfolioCategory } from "@/types/PortfolioCategory";
import ServiceCard from "./_components/ServiceCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>(WebDevelopment);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category: PortfolioCategory) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const createSvgVariant = (scaleY = 1) => ({
    hidden: {
      opacity: 0,
      y: 50,
      scaleX: 1,
      scaleY: 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleX: 1,
      scaleY,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="overflow-x-clip">
      <section className="relative flex w-full justify-center px-4 pb-64 pt-32">
        <div className="absolute bottom-0 w-full max-w-7xl">
          <div className="relative w-full scale-75 sm:scale-[.8] md:scale-[.85] lg:scale-90 xl:scale-100">
            {/* Left side SVGs */}
            <motion.svg
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={createSvgVariant(0.75)}
              className="absolute -bottom-56 -left-24 h-[500px] sm:left-0"
              width="258"
              height="742"
              viewBox="0 0 258 742"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M258 270V599L15 742L14.5 0.5L258 270Z"
                fill="#829EBF"
                fillOpacity="0.8"
              />
              <path
                d="M0.5 732.5L15 742L14.5 0.5L0.5 18.5V732.5Z"
                fill="#73879F"
                fillOpacity="0.8"
              />
            </motion.svg>

            <motion.svg
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={createSvgVariant(0.9)}
              className="absolute -bottom-56 -left-12 h-[500px] sm:left-32"
              width="258"
              height="742"
              viewBox="0 0 258 742"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M258 270V599L15 742L14.5 0.5L258 270Z"
                fill="#829EBF"
                fillOpacity="0.8"
              />
              <path
                d="M0.5 732.5L15 742L14.5 0.5L0.5 18.5V732.5Z"
                fill="#73879F"
                fillOpacity="0.8"
              />
            </motion.svg>

            <motion.svg
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={createSvgVariant(1)}
              className="absolute -bottom-56 left-0 h-[500px] sm:left-64"
              width="258"
              height="742"
              viewBox="0 0 258 742"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M258 270V599L15 742L14.5 0.5L258 270Z"
                fill="#829EBF"
                fillOpacity="0.8"
              />
              <path
                d="M0.5 732.5L15 742L14.5 0.5L0.5 18.5V732.5Z"
                fill="#73879F"
                fillOpacity="0.8"
              />
            </motion.svg>

            {/* Right side SVGs */}
            <motion.svg
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={createSvgVariant(0.75)}
              className="absolute -bottom-56 -right-24 h-[500px] sm:right-0"
              width="258"
              height="742"
              viewBox="0 0 258 742"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 270V599L243 742L243.5 0.5L0 270Z"
                fill="#829EBF"
                fillOpacity="0.8"
              />
              <path
                d="M257.5 732.5L243 742L243.5 0.5L257.5 18.5V732.5Z"
                fill="#73879F"
                fillOpacity="0.8"
              />
            </motion.svg>

            <motion.svg
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={createSvgVariant(0.9)}
              className="absolute -bottom-56 -right-12 h-[500px] sm:right-32"
              width="258"
              height="742"
              viewBox="0 0 258 742"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 270V599L243 742L243.5 0.5L0 270Z"
                fill="#829EBF"
                fillOpacity="0.8"
              />
              <path
                d="M257.5 732.5L243 742L243.5 0.5L257.5 18.5V732.5Z"
                fill="#73879F"
                fillOpacity="0.8"
              />
            </motion.svg>

            <motion.svg
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={createSvgVariant(1)}
              className="absolute -bottom-56 -right-0 h-[500px] sm:right-64"
              width="258"
              height="742"
              viewBox="0 0 258 742"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 270V599L243 742L243.5 0.5L0 270Z"
                fill="#829EBF"
                fillOpacity="0.8"
              />
              <path
                d="M257.5 732.5L243 742L243.5 0.5L257.5 18.5V732.5Z"
                fill="#73879F"
                fillOpacity="0.8"
              />
            </motion.svg>
          </div>
        </div>

        <motion.div
          className="flex w-full max-w-5xl flex-col items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative flex flex-col gap-4 overflow-visible"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 -z-10 m-auto mt-1 size-96 rounded-full bg-[#C7D9E5] blur-[128px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            />

            <motion.h1
              className="mx-auto max-w-3xl text-center text-3xl font-semibold text-primary sm:text-5xl"
              variants={itemVariants}
            >
              Your end-to-end tech partner with a product-first mindset
            </motion.h1>

            <motion.p
              className="mx-auto max-w-4xl text-center text-xl font-light text-primary sm:text-2xl"
              variants={itemVariants}
            >
              From idea to launch, Newtn delivers full-cycle product development
              — combining sharp design, agile engineering, and reliable
              deployment to turn bold ideas into impactful digital products.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:contactnewtn@gmail.com"
              className="rounded-full border border-primary bg-primary px-6 py-2 text-center text-base font-medium text-white hover:bg-white hover:text-primary sm:text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
            </motion.a>
            <motion.a
              href="/portfolio"
              className="rounded-full border border-primary bg-white px-6 py-2 text-center text-base font-medium text-primary hover:bg-primary hover:text-white sm:text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore our work
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <section className="flex w-full justify-center bg-white/50 px-4 pt-32 backdrop-blur-sm">
        <div className="relative flex w-full max-w-5xl flex-col items-center gap-16">
          <div className="pointer-events-none absolute h-full w-[64rem] self-center">
            <div className="relative h-full w-full">
              <div className="absolute -bottom-16 -right-32 h-[500px] w-[500px] rotate-[25deg]">
                <div className="relative h-full w-full">
                  <Image
                    src="/assets/images/squares-triangles-lightblue-outline.svg"
                    alt="A triangle made out of outlines of squares and triangles"
                    fill
                    className="h-full w-full object-contain opacity-50"
                  />
                </div>
              </div>

              <div className="absolute -bottom-32 -left-48 h-[400px] w-[400px] rotate-[190deg]">
                <div className="relative h-full w-full">
                  <Image
                    src="/assets/images/squares-triangles-lightblue-outline.svg"
                    alt="A triangle made out of outlines of squares and triangles"
                    fill
                    className="h-full w-full object-contain opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="flex w-full max-w-4xl flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-center text-2xl font-semibold text-primary sm:text-4xl"
              variants={itemVariants}
            >
              End-to-End Services, Delivered Effortlessly
            </motion.h1>

            <motion.p
              className="text-center text-lg font-light text-primary sm:text-xl"
              variants={itemVariants}
            >
              We specialize in comprehensive digital solutions, delivering
              end-to-end services that encompass asset creation, UI/UX design,
              development, and seamless deployment. Our expertise ensures a
              streamlined journey from concept to launch, empowering your
              digital presence.
            </motion.p>
          </motion.div>

          <ServiceCard />
        </div>
      </section>

      <section className="flex w-full justify-center px-4 py-32">
        <div className="relative flex w-full max-w-5xl flex-col gap-8">
          <div className="pointer-events-none absolute h-full w-[64rem] self-center">
            <div className="relative h-full w-full">
              <div className="absolute -right-48 bottom-0 -z-10 h-[400px] w-[400px] rotate-[170deg]">
                <div className="relative h-full w-full">
                  <Image
                    src="/assets/images/squares-triangles-lightblue-outline.svg"
                    alt="A triangle made out of outlines of squares and triangles"
                    fill
                    className="h-full w-full object-contain opacity-50"
                  />
                </div>
              </div>

              <div className="absolute -left-24 bottom-0 -z-10 h-[350px] w-[350px] rotate-[110deg]">
                <div className="relative h-full w-full">
                  <Image
                    src="/assets/images/squares-triangles-lightblue-outline.svg"
                    alt="A triangle made out of outlines of squares and triangles"
                    fill
                    className="h-full w-full object-contain opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-3xl flex-col gap-4">
            <h1 className="text-3xl font-bold text-primary sm:text-5xl">
              Newtn&apos;s Projects
            </h1>

            <span
              className="relative flex w-fit cursor-pointer items-center gap-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="text-lg text-primary sm:text-xl">
                {selectedCategory.name}
              </p>

              <svg
                className={`size-2.5 text-primary transition-transform ${isOpen ? "rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>

              {isOpen && (
                <div className="absolute left-0 top-8 z-10 w-48 rounded-sm border border-primary bg-white">
                  {PortfolioCategories.map((category) => (
                    <div
                      key={category.id}
                      onClick={() => handleSelect(category)}
                      className={`cursor-pointer px-4 py-2 hover:bg-primary hover:text-white ${
                        selectedCategory.id === category.id
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              )}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {allPortfolios
              .filter((e) => e.category == selectedCategory)
              .slice(0, 2)
              .map((portfolio) => (
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
              <p className="text-lg text-primary sm:text-xl">See all work</p>
              <p className="text-sm">({allPortfolios.length})</p>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
