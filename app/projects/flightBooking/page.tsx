import CarouselDisplay from "@/components/DisplayCarousel";
import Tech from "@/components/Tech";
import {
  BORDERLINE_PICTURES,
  FLIGHTS_PICTURES,
  PAYROLL_PICTURES,
  PAYROLL_STACK,
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
            Find Flights
          </p>
          <p className="text-lg md:text-xl xl:text-2xl mt-2 text-gray-500">
            A simple full stack flight booking website
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg mt-4 text-gray-500 ">Link Not Available</p>
        </div>

        <div className="h-full mt-2">
          <Image
            src="/flights-page/flights-home-mockup.png"
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
              Find Flights is a simple full stack flight booking website. It was
              built using NextJs and TailwindCSS. The website allows users to
              search for flights, book flights, and view their booking history.
              The website also has an admin panel where the admin can view all
              bookings and manage flights.
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
              {PAYROLL_STACK.map((tech, index) => (
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
            <CarouselDisplay items={FLIGHTS_PICTURES} />
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
