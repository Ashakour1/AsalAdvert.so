"use client";
import Image from "next/image";
import React, { useState } from "react";

const Customers = () => {
  const [isHovered, setIsHovered] = useState(true);
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1040px] mx-auto text-center items-center flex flex-col ">
        <div className="flex flex-col">
          <h1 className="text-gray-500 text-2xl font-semibold">Some Our </h1>
          <h1 className="text-4xl font-semibold text-foreground">
            Valued Costumers
          </h1>
        </div>
        <div className="flex gap-4 py-10 ">
          {
            // This is a comment
            isHovered ? (
              <Image
                src="/juba.png"
                width={200}
                height={100}
                // className="hover:scale-110"
                alt={""}
                onMouseLeave={() => setIsHovered(false)}
              />
            ) : (
              <Image
                src="/jubablack.png"
                width={200}
                height={100}
                alt={""}
                onMouseOver={() => setIsHovered(true)}
              />
            )
          }
          <Image src="/juba.png" width={200} height={100} alt={""} />
          <Image src="/alnur.png" width={200} height={100} alt={""} />
          <Image src="/sirdumar.png" width={200} height={100} alt={""} />
        </div>
      </div>
    </section>
  );
};

export default Customers;
