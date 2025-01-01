import React from "react";
import { CheckCircle, Heart } from "lucide-react";
import HighlightedText from "./ui/HighlightedText";

const CompanySnapshot = ({ className = "" }) => {
  const stats = [
    {
      number: "15+",
      label: "Completed",
      sublabel: "Projects",
    },
    {
      number: "20+",
      label: "Happy",
      sublabel: "Clients",
    },
    {
      number: "10+",
      label: "Ongoing",
      sublabel: "Projects",
    },
  ];
  return (
    <section className={`py-20 px-4  bg-white ${className}`}>
      <div className="max-w-4xl h-full mx-auto text-center">
        <div className="max-w-lg mx-auto text-center space-y-4 pb-6 ">
          <HighlightedText
            className="border border-foreground text-foreground text-base font-medium"
            text="Our Snapshot "
          />
          <h2 className="text-2xl sm:text-2xl pt-4 font-semibold">
            Meeting and exceeding <span className="text-blue-500">client</span>{" "}
            expectations{" "}
            <span className="sm:inline">
              is <span className="text-blue-500">our highest priority</span>
            </span>
          </h2>
          <p className="text-black">
            We provide clear and easy navigation to meet our customers' needs
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" border bg-white rounded-3xl shadow-sm py-4 px-8 flex gap-7 items-start min-w-[350px] md:min-w-[300px]"
            >
              <span className="text-[40px] font-bold text-blue-500 mb-1">
                {stat.number}
              </span>
              <div className="text-gray-700 text-lg">
                {stat.label}
                <br />
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySnapshot;
