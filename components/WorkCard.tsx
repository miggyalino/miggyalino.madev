import React from "react";
import WorkArrow from "./ui/WorkArrow";

type Job = {
  title: string;
  company: string;
  date: string;
  description: string[];
  isLast?: boolean;
};

const WorkCard = ({ title, company, date, description, isLast }: Job) => {
  return (
    <>
      <div className="w-full h-full p-6 bg-gray-700 rounded-xl border-2 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white text-xl">{title}</p>
          <p className="text-white text-lg">{company}</p>
          <p className="text-gray-500">{date}</p>
        </div>

        <div className="flex flex-col gap-2">
          {description.map((desc, index) => (
            <p className="text-gray-300" key={index}>
              ● {desc}
            </p>
          ))}
        </div>
      </div>
      {isLast ? null : <WorkArrow />}
    </>
  );
};

export default WorkCard;
