import Link from "next/link";

import NewtonLogo from "@/assets/icons/NewtonLogo";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white px-10 py-5">
      <Link href="/" className="w-40 text-primary">
        <NewtonLogo />
      </Link>
      <div className="flex gap-10">
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};
export default Header;
