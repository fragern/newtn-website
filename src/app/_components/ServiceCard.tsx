import Image from "next/image";

export default function ServiceCard() {
  const development = [
    "Back-end",
    "iOS",
    "Android",
    "Cross-Platform",
    "Front-end",
    "Website",
  ];
  const design = [
    "App Design",
    "Web Design",
    "Branding",
    "2D/3D Asset",
    "2D Motion",
    "UX Research",
  ];

  const renderPills = (items: string[]) =>
    items.map((item, index) => (
      <span
        key={index}
        className="rounded-full border border-primary bg-white px-3 py-1 font-semibold text-primary"
      >
        {item}
      </span>
    ));

  return (
    <div className="relative max-w-5xl">
      {/* <Image
        src="/assets/images/supergraphics/BehindOurService.svg"
        alt="Behind Our Service"
        width={400}
        height={400}
        className="pointer-events-none absolute -bottom-24 -right-24 -z-10 select-none"
      />
      <Image
        src="/assets/images/supergraphics/BehindOurService2.svg"
        alt="Behind Our Service"
        width={400}
        height={400}
        className="pointer-events-none absolute -top-24 right-0 -z-10 select-none"
      /> */}

      <div className="flex flex-row gap-6">
        <div className="rounded-2xl border border-primary bg-white p-10">
          <Image
            src={"/assets/images/newtnDevelopment.svg"}
            alt="Newtn Development"
            width={100}
            height={100}
            className="mb-4"
          />
          <h1 className="mb-2 text-left text-3xl font-semibold text-primary">
            Development
          </h1>
          <p className="mb-5 text-lg text-primary">
            Crafting responsive, user-friendly websites and building intuitive,
            high-performance mobile apps for iOS and Android, tailored to your
            business needs.
          </p>
          <div className="flex flex-wrap gap-2">{renderPills(development)}</div>
        </div>
        <div className="rounded-2xl border border-primary bg-white p-10">
          <Image
            src={"/assets/images/newtnDesign.svg"}
            alt="Newtn Design"
            width={90}
            height={90}
            className="mb-4"
          />
          <h1 className="mb-2 text-left text-3xl font-semibold text-primary">
            Design
          </h1>
          <p className="mb-5 text-lg text-primary">
            Creating stunning app and web designs, strong brand identities, and
            high-quality 2D & 3D assets with engaging motion graphics, all
            driven by in-depth UX research.
          </p>
          <div className="flex flex-wrap gap-2">{renderPills(design)}</div>
        </div>
      </div>
    </div>
  );
}
