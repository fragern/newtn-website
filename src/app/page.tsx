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
    <main className="overflow-x-clip">
      <section className="relative flex w-full justify-center px-4 pb-64 pt-32">
        <div className="absolute bottom-0 w-full max-w-7xl">
          <div className="relative w-full">
            <svg
              className="absolute -bottom-56 left-0 h-[500px] -scale-x-100 scale-y-75"
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
            </svg>

            <svg
              className="absolute -bottom-56 left-32 h-[500px] -scale-x-100 scale-y-90"
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
            </svg>

            <svg
              className="absolute -bottom-56 left-64 h-[500px] -scale-x-100"
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
            </svg>

            <svg
              className="absolute -bottom-56 right-0 h-[500px] scale-y-75"
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
            </svg>

            <svg
              className="absolute -bottom-56 right-32 h-[500px] scale-y-90"
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
            </svg>

            <svg
              className="absolute -bottom-56 right-64 h-[500px]"
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
            </svg>
          </div>
        </div>

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
              className="rounded-full border border-primary bg-primary px-6 py-2 text-xl font-medium text-white hover:bg-white hover:text-primary"
            >
              Let&apos;s Talk
            </button>

            <button
              type="submit"
              className="rounded-full border border-primary bg-white px-6 py-2 text-xl font-medium text-primary hover:bg-primary hover:text-white"
            >
              Explore our work
            </button>
          </div>
        </div>
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
              <svg
                className="h-24"
                width="106"
                height="100"
                viewBox="0 0 106 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 76.7056V23.2439H8.14386C8.16965 22.9651 8.20131 22.6864 8.23885 22.4087L2.53004 19.0752L9.96988 6.04224L15.6748 9.37375C17.1181 8.23839 18.6821 7.33444 20.3176 6.66154V0H35.1971V6.66154C36.8326 7.33444 38.3965 8.23838 39.8398 9.37356L45.5449 6.04224L52.9846 19.0752L47.2758 22.4085C47.3133 22.6864 47.345 22.9649 47.3709 23.2439H81.8394V49.7648H87.4756V56.4261C89.1114 57.099 90.676 58.0031 92.1187 59.1383L97.8244 55.807L105.263 68.8405L99.5544 72.174C99.7969 73.9702 99.7969 75.7938 99.5544 77.59L105.263 80.9235L97.8244 93.9566L92.1187 90.6268C90.676 91.7611 89.1114 92.6656 87.4756 93.3385V100H72.5964V93.3385C70.9609 92.6656 69.397 91.7611 67.9537 90.6268L62.2488 93.9566L59.3242 88.8342H15.6416C14.9095 88.8342 14.2501 88.3874 13.9728 87.7018C13.6956 87.0161 13.8556 86.2301 14.3777 85.7104L19.766 80.3528C20.1032 80.0172 20.5571 79.8294 21.0299 79.8294H26.5594V76.7056H0ZM78.2328 26.8911H3.60616V33.9678H78.2328V26.8911ZM43.7455 23.2439C43.6916 22.7699 43.6171 22.298 43.5223 21.8293L43.2614 20.5413L48.0586 17.7401L44.2249 11.0245L39.4266 13.8262L38.454 12.95C36.7741 11.4366 34.8548 10.3412 32.8283 9.66369L31.5911 9.2501V3.64716H23.9237V9.2501L22.6863 9.66369C20.6598 10.3412 18.7405 11.4366 17.0606 12.95L16.088 13.8262L11.2897 11.0245L7.45605 17.7401L12.2533 20.5413L11.9924 21.8293C11.8975 22.298 11.8231 22.7699 11.7693 23.2439H16.7647C17.1346 21.0098 18.1712 18.8669 19.8741 17.1446C24.2251 12.7441 31.2897 12.7441 35.6405 17.1446C37.3434 18.8669 38.3802 21.0098 38.75 23.2439H43.7455ZM78.2328 49.7648V37.615H3.60616V73.0584H60.4181C60.4448 72.763 60.478 72.4676 60.5177 72.174L54.8089 68.8405L62.2488 55.807L67.9537 59.1383C69.397 58.0031 70.961 57.099 72.5964 56.4261V49.7648H78.2328ZM59.7349 82.2602L63.5686 88.9746L68.3669 86.1736L69.3395 87.0489C71.0194 88.5625 72.9387 89.6585 74.9645 90.3369L76.2032 90.749V96.3528H83.8706V90.749L85.1078 90.3369C87.1343 89.6585 89.0527 88.5625 90.7332 87.0489L91.7047 86.1736L96.5038 88.9746L100.337 82.2602L95.54 79.4574L95.801 78.1699C96.2397 76.0017 96.2397 73.7623 95.801 71.5941L95.54 70.3066L100.337 67.5056L96.5038 60.7892L91.7047 63.591L90.7332 62.7147C89.0527 61.2013 87.1343 60.1057 85.1078 59.4284L83.8706 59.0149V53.4119H81.8394H76.2032V59.0149L74.9645 59.4284C72.9387 60.1057 71.0194 61.2013 69.3395 62.7147L68.3669 63.591L63.5686 60.7892L59.7349 67.5056L64.5321 70.3066L64.2712 71.5941C64.0518 72.6773 63.9421 73.7806 63.9421 74.882C63.9421 75.9853 64.0518 77.0867 64.2712 78.1699L64.5321 79.4574L59.7349 82.2602ZM26.5594 83.4765H21.7678L20.0479 85.1871H57.2423L56.2662 83.4765H26.5594ZM30.1654 76.7056V79.8294H51.6739V76.7056H30.1654ZM20.4462 23.2439H35.0684C34.747 21.9535 34.0878 20.7319 33.0906 19.7235C30.147 16.7465 25.3676 16.7465 22.4241 19.7235C21.4269 20.7319 20.7677 21.9535 20.4462 23.2439ZM56.6831 79.8294L60.5177 77.5919C60.478 77.2964 60.4448 77.001 60.4181 76.7056H55.2799V79.8294H56.6831ZM32.0782 42.9444L34.628 45.5233L33.3531 46.8127L26.7565 53.4845L34.628 61.4457L32.0782 64.0246L21.6567 53.4845L32.0782 42.9444ZM49.7612 64.0246L47.2112 61.4457L48.4861 60.1562L55.0828 53.4845L47.2112 45.5233L49.7612 42.9444L60.1825 53.4845L49.7612 64.0246ZM40.0445 63.8339L36.5613 62.89L41.795 43.1351L45.2782 44.079L40.0445 63.8339ZM80.0369 63.6086C82.8898 63.6086 85.7442 64.709 87.9189 66.9093C92.2701 71.3096 92.2701 78.4544 87.9189 82.8547C83.5694 87.255 76.5044 87.255 72.153 82.8547C69.9776 80.6555 68.8896 77.7687 68.8896 74.882C68.8896 71.9953 69.9776 69.1104 72.153 66.9093C74.3281 64.709 77.1825 63.6086 80.0369 63.6086ZM80.0369 67.2558C78.1061 67.2558 76.1754 67.9998 74.7034 69.4879C73.2313 70.9759 72.4957 72.929 72.4957 74.882C72.4957 76.8351 73.2313 78.7881 74.7034 80.2762C77.6459 83.2522 82.4264 83.2522 85.3688 80.2762C88.3128 77.3001 88.3128 72.4658 85.3688 69.4879C83.8984 67.9998 81.9676 67.2558 80.0369 67.2558Z"
                  fill="#2F4157"
                />
              </svg>

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
              <svg
                className="h-24"
                width="89"
                height="100"
                viewBox="0 0 89 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1326_1327)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.1209 81.9525H0.371176V31.3052H28.6093L27.5727 30.2239L28.8969 29.0983C28.8969 29.0983 40.5138 19.3344 42.7811 12.4612C43.0034 11.7253 43.7642 11.1828 44.6654 11.1828C45.5666 11.1828 46.3273 11.7253 46.5514 12.4612C48.8169 19.3344 60.4339 29.0983 60.4339 29.0983L61.7581 30.2239L60.7214 31.3052H88.9596V81.9525H60.2098V84.9118H66.1905C66.7038 84.9118 67.1937 85.0898 67.5599 85.4076L73.3968 90.4833C73.9619 90.9739 74.1341 91.7202 73.8348 92.3698C73.5355 93.0176 72.8216 93.4426 72.0291 93.4426H17.3034C16.5108 93.4426 15.7969 93.0176 15.4959 92.3698C15.1967 91.7202 15.3689 90.9739 15.9357 90.4833L21.7726 85.4076C22.1371 85.0898 22.6286 84.9118 23.1402 84.9118H29.1209V81.9525ZM31.7426 34.7603H4.27525V78.4973H85.0572V34.7603H57.5881C55.0116 37.8185 53.9599 39.7532 53.7242 41.0171C53.6958 41.1753 53.6974 41.3579 53.7041 41.4854H63.0288V50.0202H56.4696V59.7928H32.8612V50.0202H26.302V41.4854H35.6266C35.6333 41.3579 35.6367 41.1753 35.6066 41.0171C35.3708 39.7532 34.3191 37.8185 31.7426 34.7603ZM42.7142 20.0033C39.407 24.3335 35.0247 28.5006 32.8846 30.4469C33.1554 30.7401 33.4146 31.0261 33.6654 31.3052H33.6737L34.2589 31.9794C37.8905 36.1578 39.1529 38.8163 39.4588 40.4556C39.529 40.8326 39.5558 41.1746 39.5508 41.4854H49.78C49.775 41.1746 49.8034 40.8326 49.8736 40.4556C50.1779 38.8163 51.4419 36.1578 55.0718 31.9794L55.657 31.3052H55.667C55.9162 31.0261 56.1753 30.7401 56.4462 30.4469C54.3077 28.5008 49.9254 24.3335 46.6166 20.0033V27.2554C46.6166 28.2088 45.7421 28.9829 44.6654 28.9829C43.5886 28.9829 42.7142 28.2088 42.7142 27.2554V20.0033ZM56.3074 84.9118V81.9525H33.025V84.9118H56.3074ZM29.1209 88.367H23.9378L22.0752 89.9875H67.2556L65.393 88.367H29.1209ZM59.1247 44.9406H36.2336H30.206V46.565H56.4696H59.1247V44.9406ZM36.7652 50.0202V56.3376H52.5655V50.0202H36.7652ZM30.1308 74.3978H8.19272V63.7795H30.1308V74.3978ZM26.2267 67.2347H12.0951V70.9433H26.2267V67.2347ZM81.1397 74.3978H59.2016V63.7795H81.1397V74.3978ZM77.2356 67.2347H63.104V70.9433H77.2356V67.2347ZM55.6353 74.3978H33.6972V63.7795H55.6353V74.3978ZM51.7312 67.2347H37.5996V70.9433H51.7312V67.2347ZM11.5718 6.99394C10.7626 9.05287 8.55052 10.5325 5.95059 10.5325C2.66681 10.5325 0 8.17284 0 5.26636C0 2.3597 2.66681 0 5.95059 0C8.55052 0 10.7626 1.47967 11.5718 3.53878H39.2532V0.693795H50.0776V3.53878H77.3895C78.197 1.47967 80.4107 0 83.0107 0C86.2944 0 88.9596 2.3597 88.9596 5.26636C88.9596 8.17284 86.2944 10.5325 83.0107 10.5325C80.4107 10.5325 78.197 9.05287 77.3895 6.99394H62.8616C72.7731 10.956 80.7468 18.0532 85.1642 26.8537C85.6022 27.7251 85.1575 28.7468 84.1727 29.1341C83.1896 29.5212 82.0342 29.1282 81.5978 28.2568C76.0117 17.1307 64.1942 8.98895 50.0776 7.31267V9.83875H39.2532V7.31267C25.1366 8.98895 13.319 17.1307 7.7346 28.2568C7.29654 29.1282 6.14287 29.5212 5.15807 29.1341C4.17327 28.7468 3.72851 27.7251 4.16657 26.8537C8.58562 18.0532 16.5593 10.956 26.4692 6.99394H11.5718ZM80.9642 5.26636C80.9642 6.26577 81.8821 7.07738 83.0107 7.07738C84.1393 7.07738 85.0572 6.26577 85.0572 5.26636C85.0572 4.26678 84.1393 3.45516 83.0107 3.45516C81.8821 3.45516 80.9642 4.26678 80.9642 5.26636ZM5.95059 3.45516C4.82032 3.45516 3.90408 4.26678 3.90408 5.26636C3.90408 6.26577 4.82032 7.07738 5.95059 7.07738C7.07917 7.07738 7.99542 6.26577 7.99542 5.26636C7.99542 4.26678 7.07917 3.45516 5.95059 3.45516Z"
                    fill="#2F4157"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1326_1327">
                    <rect width="89" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>

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
            <h1 className="text-5xl font-bold text-primary">
              Newtn&apos;s Projects
            </h1>

            <span className="flex items-center gap-3">
              <p className="text-xl text-primary">Web Development</p>

              <svg
                className="size-2.5 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
            </span>
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
