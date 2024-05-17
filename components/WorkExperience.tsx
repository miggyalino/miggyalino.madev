import React from "react";
import { Button } from "./ui/button";
import WorkCard from "./WorkCard";
import WorkArrow from "./ui/WorkArrow";
import { EXPERIENCE } from "@/constants";

const WorkExperience = () => {
  return (
    <div className="h-full padding-container max-container flex flex-col justify-start items-center lg:items-start lg:flex-row lg:justify-between gap-16 py-32">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:sticky lg:top-60">
        <div>
          <p className="font-bold text-white text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            Past Experience
          </p>
          <p className="text-lg md:text-xl xl:text-2xl mt-4 text-gray-500 max-w-4xl">
            Yesterday&apos;s blunders are today&apos;s building blocks for a
            brighter tomorrow because the past gave me the script; the future is
            where I deliver the punchlines.
          </p>
        </div>
        <div>
          <Button
            variant={"destructive"}
            className="bg-[#ec4e39] hover:bg-[#d45949e0]"
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center w-full lg:w-2/5">
        {EXPERIENCE.map((job, index) => (
          <WorkCard
            key={index}
            title={job.title}
            company={job.company}
            date={job.date}
            description={job.description}
            isLast={index === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
