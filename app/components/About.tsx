import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="max-w-[1040px] mx-auto  min-h-screen">
      <h1 className="text-xl font-medium text-foreground text-center py-5">
        About Us
      </h1>
      <div className="flex gap-2">
        <div className="w-[450px]">
          <Image src="/about-image.png" alt="about" width={440} height={400} />
        </div>
        <div className="w-[450px] flex flex-col ">
          <div className="space-y-2 pt-5">
            <h1 className="text-xl font-semibold text-foreground">
              Who We Are
            </h1>
            <p className="text-gray-500">
              Asal Advertising Company, founded on 2022, is a full-service
              marketing and advertising agency offering web development, graphic
              design, video production, logo creation, and digital campaigns. We
              are committed to delivering effective, measurable solutions for
              businesses of all sizes.
            </p>
          </div>
          <div className="space-y-2 pt-4">
            <h1 className="text-xl font-semibold text-foreground">
              Our Mission{" "}
            </h1>
            <p className="text-gray-500">
              To drive demand for your brand with effective, well-crafted
              advertising campaigns.
            </p>
          </div>
          <div className="space-y-2 pt-4">
            <h1 className="text-xl font-semibold text-foreground">
              Our Vision
            </h1>
            <p className="text-gray-500">
              To be a leading force in innovative advertising, empowering brands
              to reach their full potential and make a lasting impact in the
              market.
            </p>
          </div>
          <button className="text-white bg-background px-4 py-2 mt-16 rounded-md w-40">
            Read More
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
