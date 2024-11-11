import React from "react";
import { CheckCircle, Heart } from "lucide-react";

const CompanySnapshot = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl h-[400px] mx-auto text-center space-y-16">
        <div className="max-w-lg mx-auto text-center  py-">
          <h2 className="text-2xl  sm:text-3xl font-medium">
            Meeting and exceeding <span className="text-blue-500">client</span>{" "}
            expectations{" "}
            <span className="sm:inline">
              is <span className="text-blue-500">our highest priority</span>
            </span>
          </h2>
          <p className="text-gray-600">
            We provide <span className="text-blue-500">clear</span> and{" "}
            <span className="text-blue-500">easy</span> navigation to meet our
            customers' needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 text-center bg-gray-50 rounded-lg shadow">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-3xl font-bold mb-2">20+</div>
            <div className="text-sm text-gray-600">Completed Projects</div>
          </div>

          <div className="p-6 text-center bg-gray-50 rounded-lg shadow">
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-black fill-black" />
            </div>
            <div className="text-3xl font-bold mb-2">40+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>

          <div className="p-6 text-center bg-gray-50 rounded-lg shadow">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-sm text-gray-600">Ongoing Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySnapshot;
