import CarouselDisplay from "@/components/DisplayCarousel";
import Tech from "@/components/Tech";
import {
  BORDERLINE_PICTURES,
  QUICKSORT_PICTURES,
  QUICKSORT_STACK,
} from "@/constants";
import { Link } from "lucide-react";
import Link2 from "next/link";
import Image from "next/image";
import React from "react";

const BorderlinePage = () => {
  return (
    <section className="bg-gray-900 bg-dot-gray-700 h-full py-20">
      <div className="max-container padding-container">
        <div>
          <p className="font-bold text-white text-5xl md:text-6xl lg:text-7xl">
            Quicksort
          </p>
          <p className="text-lg md:text-xl xl:text-2xl mt-2 text-gray-500">
            Software Agency Landing Page
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-lg mt-4 text-gray-500 hover:text-white">
            <Link2 href={"https://quicksort-website.vercel.app"}>
              Visit Site
            </Link2>
          </p>
        </div>

        <div className="h-full mt-2">
          <Image
            src="/quicksort-page/quicksort-hero-mockup.png"
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
              Quicksort is a software company that provides software and
              marketing solutions to businesses. The website was designed using
              Figma and developed using Next.js. The website is deployed and can
              be accessed using the link above.
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
              {QUICKSORT_STACK.map((tech, index) => (
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
            <CarouselDisplay items={QUICKSORT_PICTURES} />
          </div>
        </div>
        <div className="mt-10 py-32 flex justify-center">
          <Link2 href="/#contact">
            <p className="font-bold text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl hover:text-[#ec4e39]">
              Have a project in mind?
            </p>
          </Link2>
        </div>
      </div>
    </section>
  );
};

export default BorderlinePage;
