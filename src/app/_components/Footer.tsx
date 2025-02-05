import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen bg-primary text-white">
      <div className="flex flex-col items-center justify-between px-8 py-20 sm:flex-row">
        <Image
          src="/assets/logos/newtn/icon-text/white.svg"
          alt="Snowflake"
          height={1000}
          width={1000}
          className="h-auto w-[168px]"
        />
        <div className="mt-12 flex justify-between gap-44 md:mt-0 md:gap-56">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <p className="underline hover:no-underline">Home</p>
            </Link>
            <Link href="/portfolio">
              <p className="underline hover:no-underline">Portfolios</p>
            </Link>
            <Link href="/about">
              <p className="underline hover:no-underline">About Us</p>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="https://instagram.com/newtn.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="underline hover:no-underline">Instagram</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
