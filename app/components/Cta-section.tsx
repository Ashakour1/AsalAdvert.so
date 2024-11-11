import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gray-400 h-[300px] flex justify-center items-center">
      <div className="text-center max-w-xl">
        <h1 className="text-[#121212] font-extrabold text-4xl">
          Enough Talk,{" "}
          <span className="text-foreground">
            Let's Make Your Business Flourish
          </span>
        </h1>
        <button className="bg-background px-6 text-white mt-5 text-base font-semibold rounded-md py-2 ">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
