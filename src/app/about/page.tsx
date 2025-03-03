import Image from "next/image";
import { developers, designers } from "@/data/newtn-talents";
import NewtnTalentCard from "../_components/NewtnTalentCard";
import ContactUs from "../_components/sections/ContactUs";

export default function About() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute left-0 top-16 -z-10 h-[728px] w-[428px]">
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/snowflake.svg"
            alt="A snowflake made out of trapeziums"
            fill
            className="object-fit h-full w-full"
          />
        </div>
      </div>

      <section className="flex w-full flex-col gap-20 px-10 py-64 lg:flex-row lg:items-center lg:justify-between lg:gap-40">
        <div className="flex w-fit flex-none flex-col gap-5 text-4xl">
          <p className="text-4xl font-semibold text-primary">We are</p>

          <div className="relative h-[65px] w-[320px]">
            <Image
              src="/assets/logos/newtn/text/navy.svg"
              alt="Newtn's text logo"
              fill
              className="object-fit h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <p className="text-2xl font-medium text-primary">
            Newtn was founded by a team of passionate developers and designers
            driven by innovation. Inspired by Newton&apos;s apple—a symbol of
            curiosity and discovery—we turn ideas into reality, creating
            impactful digital solutions.
          </p>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-24 pb-32">
        <h1 className="text-center text-3xl font-semibold text-primary">
          Newtn Talents
        </h1>

        <div className="flex w-full flex-col gap-24 overflow-hidden lg:gap-32">
          <div className="flex">
            <div className="flex flex-none animate-horizontal-left-scroll gap-16 px-8">
              {developers.map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>

            <div className="flex flex-none animate-horizontal-left-scroll gap-16 px-8">
              {developers.map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-none animate-horizontal-right-scroll gap-16 px-8">
              {designers.map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>

            <div className="flex flex-none animate-horizontal-right-scroll gap-16 px-8">
              {designers.map((talent, index) => (
                <NewtnTalentCard key={index} talent={talent} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}
