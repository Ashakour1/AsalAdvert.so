import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" ">
      <main className="bg-[#92cff0] w-full  py-16 md:pt-20  h-[550px]">
        <div className="container mx-auto px-20 flex justify-between">
          <div className="max-w-[500px] pt-10 flex flex-col space-y-5 ">
            <div className="space-y-3">
              <h1 className="text-6xl font-semibold ">Your Growth,</h1>
              <h1 className="text-6xl font-semibold text-foreground">
                Our Mission
              </h1>
            </div>
            <p className="text-base text-gray-400">
              Asal Advert is a marketing & advertising company that creates
              successful solutions for your business.
            </p>
            <div>
              <button className="px-4 py-3 bg-background text-white font-semibold rounded-md w-40">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <Image
              width={446}
              height={400}
              src="/hero-sec.png"
              className=""
              alt="hero"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
