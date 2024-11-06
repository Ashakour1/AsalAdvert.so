import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-[#92cff0] clip-hero"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        }}
      />
      <main className="container mx-auto px-20 py-16 md:pt-20 relative h-[600px]">
        <div className="flex justify-between">
          <div className="max-w-[500px] pt-10 flex flex-col space-y-7 ">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold ">Your Growth,</h1>
              <h1 className="text-5xl font-bold text-foreground">
                Our Mission
              </h1>
            </div>
            <p className="text-xl text-gray-200">
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
            <Image width={450} height={300} src="/hero-sec.png" className="" alt="hero" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
