import React from "react";
import HighlightedText from "./ui/HighlightedText";

const Testimonials = () => {
  return (
    <section className="py-40 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <HighlightedText
            className="border border-foreground text-foreground text-base font-medium"
            text="Testimonials"
          />{" "}
          <h3 className="text-[#1a1158] text-3xl font-bold mb-12">
            What our customer say
            <br />
            about us!
          </h3>
        </div>
        <div className="relative mb-12">
          <div className="text-gray-600 text-lg leading-relaxed mb-8 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
            lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
            turpis amet id posuere torto quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>

          {/* Quote marks */}
          <span className="absolute -left-8 top-0 text-[80px] text-blue-100 font-serif">
            "
          </span>
          <span className="absolute -right-8 bottom-0 text-[80px] text-blue-100 font-serif">
            "
          </span>
        </div>
        {/* Dots/Avatars */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="w-12 h-12 rounded-full border-2 border-blue-500 p-0.5">
            <img
              src="/placeholder.svg?height=48&width=48"
              alt="Ahmed M. Hassan"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        </div>
        {/* Author info */}
        <div className="text-center">
          <h4 className="text-[#1a1158] font-semibold text-lg">
            Ahmed M. Hassan
          </h4>
          <p className="text-gray-500">Founder Caafi podcast</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
