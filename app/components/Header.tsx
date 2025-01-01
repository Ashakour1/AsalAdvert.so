"use client";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="max-w-[1040px] mx-auto">
      <div className="flex justify-between md:px-0 px-4 items-center py-2">
        <div className="logo">
          <img src="/asal-logo.png" className="w-36" alt="logo" />
        </div>
        <nav>
          <div className="md:flex hidden  space-x-6 text-gray-500">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-500">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
        </nav>
        <div>
          <button className="md:flex hidden px-7 py-2 border border-gray-400 rounded-md text-blue-500 font-semibold">
            Get Started
          </button>
        </div>
      </div>

      <div onClick={handleOpen} className="md:hidden block">
        {isOpen ? (
          <button className="md:hidden absolute top-4 right-4">
            <CiMenuBurger className="text-2xl" />
          </button>
        ) : (
          <button className="md:hidden absolute top-4 right-4">
            <CiMenuBurger className="text-2xl" />
          </button>
        )}
      </div>
      {isOpen ? (
        <div className="md:hidden  w-full mt-2 rounded   h-58  text-black ">
          <div className="font-bold flex flex-col">
            <Link className="p-4 border-b" href="/about">
              About
            </Link>
            <Link className="p-4 border-b" href="/contact">
              Contact
            </Link>
            <Link className="p-4 border-b" href="/services">
              Services
            </Link>
            <button
              onClick={handleOpen}
              className="bg-blue-600 font-bold text-white py-2 items-center m-2 px-4 rounded-md"
            >
              Getstarted
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
