import Image from "next/image";
import { designers } from "@/data/newtn-talents/designers";
import { developers } from "@/data/newtn-talents/developers";
import { projectManagers } from "@/data/newtn-talents/project-managers";
import NewtnTalentCard from "../_components/NewtnTalentCard";
import ServiceCard from "../_components/ServiceCard";

export default function About() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute left-0 top-8 -z-10 h-[350px] w-[250px] md:top-52 lg:h-[728px] lg:w-[428px]">
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/supergraphics/snowflake.svg"
            alt="A snowflake made out of trapeziums"
            fill
            className="object-fit h-full w-full"
          />
        </div>
      </div>

      <section className="flex max-w-5xl flex-col gap-14 md:gap-28 lg:flex-row lg:items-center lg:justify-between lg:pt-48">
        <div className="w-fill flex flex-none flex-col items-center gap-2 pt-8 text-4xl md:gap-5 md:pt-0 lg:w-fit lg:items-start">
          <p className="text-2xl font-semibold text-primary md:text-4xl">
            We are
          </p>

          <div className="relative h-[65px] w-[221px] lg:w-[320px]">
            <Image
              src="/assets/logos/newtn/text/navy.svg"
              alt="Newtn's text logo"
              fill
              className="object-fit h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <p className="px-4 text-center text-lg text-primary lg:px-0 lg:text-start lg:text-xl">
            Newtn was founded by a team of passionate developers and designers
            driven by innovation. Inspired by Newton&apos;s apple—a symbol of
            curiosity and discovery—we turn ideas into reality, creating
            impactful digital solutions.
          </p>
        </div>
      </section>

      <section className="flex max-w-5xl flex-col gap-8 py-32 lg:gap-8 lg:pt-48">
        <h1 className="text-left text-3xl font-semibold text-primary">
          Our Service
        </h1>
        <ServiceCard />
      </section>

      <section className="flex w-full max-w-5xl flex-col pb-8">
        <h1 className="mb-8 text-left text-3xl font-semibold text-primary">
          Our Talents
        </h1>
        {projectManagers.map((pm, index) => (
          <NewtnTalentCard key={index} talent={pm} />
        ))}
        {developers.map((dev, index) => (
          <NewtnTalentCard key={index} talent={dev} />
        ))}
        {designers.map((designer, index) => (
          <NewtnTalentCard key={index} talent={designer} />
        ))}
      </section>
    </div>
  );
}
