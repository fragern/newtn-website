"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import NewtonLogo from "@/assets/icons/NewtonLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-8 py-6">
      <Link href="/" className="w-28 text-primary md:w-40">
        <NewtonLogo />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-10 md:flex">
        <Link href="/portfolio" className="hover:text-primary-60">
          Portfolio
        </Link>
        <Link href="/about" className="hover:text-primary-60">
          About
        </Link>
        <Link
          href="https://wa.me/6282333870963"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-full border-2 border-secondary bg-primary-60 px-4 py-2 text-white hover:bg-primary">
            Contact
          </div>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-[100%] z-40 flex w-full flex-col items-center gap-6 bg-white py-6 md:hidden">
          <Link
            href="/portfolio"
            className="hover:text-primary-60"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="hover:text-primary-60"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="https://wa.me/6282333870963"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <div className="rounded-full border-2 border-secondary bg-primary-60 px-4 py-2 text-white hover:bg-primary">
              Contact
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
