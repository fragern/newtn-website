import Image from "next/image";
import Link from "next/link";
import ContactUs from "./sections/ContactUs";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center overflow-clip bg-primary text-white">
      <ContactUs />

      <div className="relative flex w-full max-w-5xl px-4 pb-32 pt-20 sm:pb-20">
        <div className="pointer-events-none absolute -bottom-40 left-16 h-[400px] w-[400px] rotate-[15deg] md:left-32">
          <div className="relative h-full w-full">
            <Image
              src="/assets/images/squares-triangles-white-outline.svg"
              alt="A triangle made out of outlines of squares and triangles"
              fill
              className="h-full w-full object-contain opacity-20"
            />
          </div>
        </div>

        <Image
          src="/assets/logos/newtn/text/white.svg"
          alt="Snowflake"
          height={1000}
          width={1000}
          className="absolute bottom-0 right-0 h-auto w-[400px] pl-8 sm:w-[500px] md:w-[600px]"
        />

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <h5 className="mb-2 text-lg font-semibold">Menu</h5>

            <Link href="/">
              <p className="hover:underline">Home</p>
            </Link>

            <Link href="/portfolio">
              <p className="hover:underline">Portfolio</p>
            </Link>

            <Link href="/about">
              <p className="hover:underline">About Us</p>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="mb-2 text-lg font-semibold">Find us!</h5>

            <Link
              href="https://instagram.com/newtn.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:underline">Instagram</p>
            </Link>

            <Link
              href="mailto:contactnewtn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:underline">Email</p>
            </Link>
          </div>

          <div className="col-span-2">
            <p>© Newtn 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
