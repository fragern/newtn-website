import Image from "next/image";
import Link from "next/link";
import ContactUs from "../_components/sections/ContactUs";

export default function PortfolioDetail() {
  return (
    <div className="flex flex-col">
      <section className="relative">
        <div className="relative h-[720px] w-full bg-black/50">
          <Image
            src="/assets/logos/newtn/text/navy.svg"
            alt="Newtn's text logo"
            fill
            className="object-fit h-full w-full"
          />
        </div>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
          Title
        </h1>
        <p className="absolute left-10 top-16 text-xl font-semibold text-white">
          {"Portfolio Web Development > Asd"}
        </p>
      </section>

      <section className="grid grid-cols-3 gap-16 px-10 pt-32">
        <div className="col-span-1 h-32 px-16">
          <div className="relative h-full w-full">
            <Image
              src="/assets/logos/newtn/text/navy.svg"
              alt="Newtn's text logo"
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-32">
          <p>
            The Menjadi Manusia website serves as the official company profile,
            showcasing its mission to foster empathy, storytelling, and
            meaningful conversations. It provides insights into the
            organization&apos;s vision, values, and impact through various
            initiatives, including content creation, community engagement, and
            collaborations. Visitors can explore the company&apos;s history,
            team, and services while staying updated on its latest projects and
            partnerships. Designed with a clean and intuitive interface, the
            website reflects Menjadi Manusia&apos;s commitment to inspiring
            positive change and human connection through storytelling and
            dialogue.
          </p>

          <div className="flex justify-between gap-16">
            <div className="flex flex-col">
              <h2 className="font-sans font-semibold">Newtn Member</h2>
              <p>Nafis</p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-sans font-semibold">Project Duration</h2>
              <p>Nafis</p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-sans font-semibold">Tags</h2>
              <p>Nafis</p>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="font-sans font-semibold">View Project Results</h2>
              <Link href="" className="w-full">
                <button className="w-full rounded-full bg-primary text-white">
                  Website
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-16 px-10 pt-32">
        <div className="col-span-1 flex flex-col justify-center gap-16">
          <h2 className="text-center font-bold">Tech Stack</h2>

          <div className="flex gap-8">
            <div className="flex w-full flex-col">
              <div className="bg-gradient-to-r from-primary to-white px-4 py-2">
                <h2 className="font-medium text-white">Frontend</h2>
              </div>

              <div></div>
            </div>

            <div className="flex w-full flex-col">
              <div className="bg-gradient-to-r from-primary to-white p-2 px-4 py-2">
                <h2 className="font-medium text-white">Infra</h2>
              </div>

              <div></div>
            </div>
          </div>
        </div>

        <div className="col-span-2 grid h-[500px] grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="relative h-full w-full bg-red-200">
              <Image
                src="/assets/logos/newtn/text/navy.svg"
                alt="Newtn's text logo"
                fill
                className="object-fit h-full w-full"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative h-full w-full bg-red-200">
              <Image
                src="/assets/logos/newtn/text/navy.svg"
                alt="Newtn's text logo"
                fill
                className="object-fit h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-16 px-10 py-64">
        <h1 className="text-center text-4xl font-medium">
          Other project in Web Development
        </h1>

        <div className="flex gap-16">WEB PROJECTS</div>
      </section>

      <ContactUs />
    </div>
  );
}
