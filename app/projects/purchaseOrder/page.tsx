import CarouselDisplay from "@/components/DisplayCarousel";
import Tech from "@/components/Tech";
import {
  BORDERLINE_PICTURES,
  PAYROLL_PICTURES,
  PAYROLL_STACK,
  PURCHASE_PICTURES,
  PURCHASE_STACK,
  QUICKSORT_PICTURES,
  QUICKSORT_STACK,
} from "@/constants";
import { Link } from "lucide-react";
import Link2 from "next/link";
import Image from "next/image";
import React from "react";

const PayrollPage = () => {
  return (
    <section className="bg-gray-900 bg-dot-gray-700 h-full py-20">
      <div className="max-container padding-container">
        <div>
          <p className="font-bold text-white text-5xl md:text-6xl lg:text-7xl">
            Purchase Order System
          </p>
          <p className="text-lg md:text-xl xl:text-2xl mt-2 text-gray-500">
            A simple purchase order management system
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg mt-4 text-gray-500 ">Link Not Available</p>
        </div>

        <div className="h-full mt-2">
          <Image
            src="/purchaseOrder-page/purchaseOrder-home-mockup1.png"
            alt="Payroll"
            width={1440}
            height={1000}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col xl:flex-row items-start">
          <div className="flex flex-col w-full xl:w-1/2 items-start">
            <p className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-10 mb-4">
              Description
            </p>
            <p className="text-lg md:text-xl xl:text-2xl text-gray-500 xl:max-w-2xl">
              Purchase Order System is a simple purchase order management
              system. It is designed to help businesses manage their purchase
              orders effectively. The software is built with a user-friendly
              interface that allows users to easily manage their purchase
              orders. The software also provides features such as order
              management, order processing, and filing of orders. The software
              is built with modern technologies such as React, Next.js, and
              PostgreSQL.
            </p>

            <div className="flex flex-col w-1/2 items-start justify-center">
              <p className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-10 mb-4">
                Status
              </p>
              <p className="text-lg md:text-xl xl:text-2xl text-gray-500">
                Deployed
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/2 items-start justify-center">
            <p className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-10 mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-4">
              {PURCHASE_STACK.map((tech, index) => (
                <Tech key={index} name={tech.name} path={tech.path} />
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-full mt-20">
          <p className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-10 mb-4">
            Check it out
          </p>
          <div className="mt-8">
            <CarouselDisplay items={PURCHASE_PICTURES} />
          </div>
        </div>
        <div className="mt-10 py-32 flex justify-center">
          <Link2 href="/">
            <p className="font-bold text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hover:text-[#ec4e39]">
              Have a project in mind?
            </p>
          </Link2>
        </div>
      </div>
    </section>
  );
};

export default PayrollPage;
