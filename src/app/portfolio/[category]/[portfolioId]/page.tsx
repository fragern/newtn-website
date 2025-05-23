import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import OtherProjectsCarousel from "@/app/_components/portfolio-detail/OtherProjectsCarousel";
import TechStacks from "@/app/_components/portfolio-detail/TechStacks";
import Tools from "@/app/_components/portfolio-detail/Tools";
import { allPortfolios } from "@/data/portfolio/all-portfolios";
import type { Portfolio } from "@/types/Portfolio";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; portfolioId: string }>;
}) {
  const { category, portfolioId } = await params;

  const portfolio = allPortfolios.find(
    (p: Portfolio) =>
      p.id === parseInt(portfolioId) && p.category.slug === category,
  );

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <section className="relative">
        <div className="relative h-[720px] w-full bg-black/50">
          <Image
            src={portfolio.coverImage}
            alt={`${portfolio.title}'s cover image`}
            fill
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-black/50"></div>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-semibold text-white">
          {portfolio.title}
        </h1>
        <p className="absolute left-10 top-16 text-base font-semibold text-white sm:text-lg md:text-xl">
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>{" "}
          {` > ${portfolio.category.name} > ${portfolio.title}`}
        </p>
      </section>

      <section className="grid grid-cols-1 gap-8 px-4 pt-16 sm:px-10 lg:grid-cols-3 lg:gap-16 lg:pt-32">
        <div className="relative col-span-1 h-20 sm:h-24 md:h-28 lg:h-[119px]">
          <Image
            src={portfolio.logo}
            alt={`${portfolio.title}'s logo`}
            fill
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-8 sm:gap-16 lg:col-span-2 lg:gap-32">
          <p>{portfolio.description}</p>

          <div className="flex w-full flex-col flex-wrap justify-between gap-8 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <h2 className="font-sans font-semibold">Newtn Member</h2>
              <p>{portfolio.members}</p>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <h2 className="font-sans font-semibold">Project Duration</h2>
              <p>{portfolio.duration}</p>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <h2 className="font-sans font-semibold">Tags</h2>
              <p>{portfolio.tags[0]}</p>
            </div>

            <div className="flex flex-1 flex-col items-center gap-2">
              <h2 className="font-sans font-semibold">View Project Results</h2>
              <Link
                href={portfolio.link}
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full rounded-full bg-primary py-1 text-white">
                  Click here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 px-4 pt-16 sm:gap-16 sm:px-10 md:grid-cols-3 lg:pt-32">
        {(() => {
          if (portfolio.techStacksOrTools === "techstacks") {
            return (
              <TechStacks
                frontend={portfolio.frontend}
                infra={portfolio.infra}
              />
            );
          } else if (portfolio.techStacksOrTools === "tools") {
            return <Tools tools={portfolio.tools} />;
          } else {
            return null;
          }
        })()}

        <div className="item-center col-span-1 flex flex-col justify-center gap-8 sm:col-span-2 sm:flex-row">
          <div className="relative h-[516px] w-full sm:h-[350px] sm:w-[338px] lg:h-[450px] xl:h-[484px]">
            <Image
              src={portfolio.showcaseImage1}
              alt={`${portfolio.title}'s showcase image 1`}
              fill
              className="h-full w-full object-contain"
            />
          </div>

          <div className="relative h-[300px] w-full sm:h-[350px] sm:w-[585px] lg:h-[450px] xl:h-[484px]">
            <Image
              src={portfolio.showcaseImage2}
              alt={`${portfolio.title}'s showcase image 2`}
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col gap-12 py-32 sm:gap-16 lg:py-64">
        <h1 className="px-10 text-center text-3xl font-semibold text-primary sm:text-4xl">
          Other projects in {portfolio.category.name}
        </h1>

        <OtherProjectsCarousel
          projects={allPortfolios.filter(
            (p: Portfolio) => p !== portfolio && p.category.slug === category,
          )}
          options={OPTIONS}
        />
      </section>
    </div>
  );
}
