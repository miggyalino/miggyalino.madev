import CarouselDisplay from "@/components/DisplayCarousel";
import Tech from "@/components/Tech";
import { HILINK_PICTURES, HILINK_STACK } from "@/constants";
import { Link } from "lucide-react";
import Link2 from "next/link";
import Image from "next/image";
import React from "react";

const HilinkPage = () => {
  return (
    <section className="bg-gray-900 bg-dot-gray-700 h-full py-20">
      <div className="max-container padding-container">
        <div>
          <p className="font-bold text-white text-5xl md:text-6xl lg:text-7xl">
            Hilink
          </p>
          <p className="text-lg md:text-xl xl:text-2xl mt-2 text-gray-500">
            Camping Site Landing Page
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg mt-4 text-gray-500 hover:text-white">
            <Link2 href={"https://camp-landing.vercel.app"}>Visit Site</Link2>
          </p>
        </div>

        <div className="h-full mt-2">
          <Image
            src="/hilink-page/hilink-home-mockup.png"
            alt="Quicksort"
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
              Hilink is a camping site landing page that showcases the beauty of
              nature and the camping experience. It is a simple and elegant
              design that is easy to navigate and provides all the necessary
              information for a camping trip.
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
              {HILINK_STACK.map((tech, index) => (
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
            <CarouselDisplay items={HILINK_PICTURES} />
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

export default HilinkPage;
