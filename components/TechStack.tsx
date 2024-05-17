import { BACK_END_STACK, DATABASE_STACK, FRONT_END_STACK } from "@/constants";
import Image from "next/image";
import React from "react";
import Tech from "./Tech";

const TechStack = () => {
  return (
    <div className="p-8 bg-gray-700 rounded-xl border-2">
      {/* <p className="text-white font-bold text-4xl mb-12">My Tech Stack</p> */}
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-white text-3xl font-bold mb-4">Front End</p>
          <div className="flex gap-5 flex-wrap">
            {FRONT_END_STACK.map((tech, index) => (
              <Tech key={index} path={tech.path} name={tech.name} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-white text-3xl font-bold mb-4">Back End</p>
          <div className="flex gap-5 flex-wrap">
            {BACK_END_STACK.map((tech, index) => (
              <Tech key={index} path={tech.path} name={tech.name} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-white text-3xl font-bold mb-4">Database</p>
          <div className="flex gap-5 flex-wrap">
            {DATABASE_STACK.map((tech, index) => (
              <Tech key={index} path={tech.path} name={tech.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

{
  /* {FRONT_END_STACK.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <Image
              src={tech.path}
              alt={tech.name}
              width={60}
              height={60}
              className=""
            />
            <p className="text-white font-bold">{tech.name}</p>
          </div>
        ))} */
}
