import Image from "next/image";
import { designers } from "@/data/newtn-talents/designers";
import { developers } from "@/data/newtn-talents/developers";
import { projectManagers } from "@/data/newtn-talents/project-managers";
import NewtnTalentCard from "../_components/NewtnTalentCard";

export default function About() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute left-0 top-16 -z-10 h-[300px] w-[220px] lg:h-[728px] lg:w-[428px]">
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/snowflake.svg"
            alt="A snowflake made out of trapeziums"
            fill
            className="object-fit h-full w-full"
          />
        </div>
      </div>

      <section className="flex w-full flex-col gap-12 px-10 pt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-40 lg:pt-48">
        <div className="w-fill flex flex-none flex-col items-center gap-5 text-4xl lg:w-fit lg:items-start">
          <p className="text-4xl font-semibold text-primary">We are</p>

          <div className="relative h-[65px] w-full lg:w-[320px]">
            <Image
              src="/assets/logos/newtn/text/navy.svg"
              alt="Newtn's text logo"
              fill
              className="object-fit h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <p className="text-center text-xl font-medium text-primary lg:text-start lg:text-2xl">
            Newtn was founded by a team of passionate developers and designers
            driven by innovation. Inspired by Newton&apos;s apple—a symbol of
            curiosity and discovery—we turn ideas into reality, creating
            impactful digital solutions.
          </p>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-24 pb-32 pt-32 lg:pt-48">
        <h1 className="text-center text-3xl font-semibold text-primary">
          Newtn Talents
        </h1>

        {/* Web */}
        <div className="hidden w-full flex-col gap-24 overflow-hidden sm:flex lg:gap-32">
          <div className="flex">
            <div className="flex flex-none animate-horizontal-left-scroll gap-16 px-8">
              {projectManagers.slice(0, 2).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
              {developers.map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>

            <div className="flex flex-none animate-horizontal-left-scroll gap-16 px-8">
              {projectManagers.slice(0, 2).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
              {developers.map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-none animate-horizontal-right-scroll gap-16 px-8">
              {projectManagers.slice(2, 4).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
              {designers.map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>

            <div className="flex flex-none animate-horizontal-right-scroll gap-16 px-8">
              {projectManagers.slice(2, 4).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
              {designers.map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex w-full flex-col gap-24 overflow-hidden sm:hidden lg:gap-32">
          <div className="flex">
            <div className="flex flex-none animate-horizontal-left-scroll gap-16 px-8">
              {projectManagers.slice(0, 2).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
              {developers.slice(0, 3).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>

            <div className="flex flex-none animate-horizontal-left-scroll gap-16 px-8">
              {projectManagers.slice(0, 2).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
              {developers.slice(0, 3).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-none animate-horizontal-right-scroll gap-16 px-8">
              {developers.slice(3, 11).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>

            <div className="flex flex-none animate-horizontal-right-scroll gap-16 px-8">
              {developers.slice(3, 11).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-none animate-horizontal-left-scroll gap-16 px-8">
              {projectManagers.slice(2, 4).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
              {designers.slice(0, 3).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>

            <div className="flex flex-none animate-horizontal-left-scroll gap-16 px-8">
              {projectManagers.slice(2, 4).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
              {designers.slice(0, 3).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-none animate-horizontal-right-scroll gap-16 px-8">
              {designers.slice(3, 9).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>

            <div className="flex flex-none animate-horizontal-right-scroll gap-16 px-8">
              {designers.slice(3, 9).map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
