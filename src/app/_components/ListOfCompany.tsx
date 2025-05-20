import Image from "next/image";

export default function ListOfCompany() {
  const companies = [
    "ADA.png",
    "FPT-Software.png",
    "tiket.png",
    "BCA.png",
    "BSI.png",
    "Grab.png",
    "staffinc.png",
    "sqe.svg",
  ];

  return (
    <section className="flex w-full max-w-5xl flex-col px-4 pb-8 sm:px-0">
      <p className="mb-6 text-center text-xl font-semibold text-primary sm:text-2xl">
        Our talents thrive across diverse industries, driving innovation in top
        companies.
      </p>

      <div className="grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:grid-cols-4">
        {companies.map((filename, index) => (
          <div key={index} className="relative h-16 w-40 sm:w-52">
            <Image
              src={`/assets/images/companies/${filename}`}
              alt={`Company ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
