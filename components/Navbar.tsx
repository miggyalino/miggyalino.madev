import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="text-white bg-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-80 sticky top-0 z-10">
      <section className="max-container padding-container flexBetween p-3">
        <Link href="/">
          <p className="font-bold text-2xl">MaDev</p>
        </Link>

        <div className=" hidden md:flex md:flexCenter gap-6 text-lg font-bold ">
          <Link href="/about" className="hover:text-[#ec4e39]">
            <p>About</p>
          </Link>
          <Link href="/projects" className="hover:text-[#ec4e39]">
            <p>Projects</p>
          </Link>
          <Link href="/contact" className="hover:text-[#ec4e39]">
            <p>Contact</p>
          </Link>
          <Link href="/">
            <Button
              variant={"destructive"}
              className="bg-[#ec4e39] hover:bg-[#d45949e0]"
            >
              Download CV
            </Button>
          </Link>
        </div>

        <div className="flexCenter gap-4 md:hidden">
          <Link href="/">
            <Button size="sm" variant="destructive" className="bg-orange-700">
              Download CV
            </Button>
          </Link>
          <Sidebar />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
