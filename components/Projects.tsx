import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <div className="max-container padding-container py-32 h-full w-full">
      <div className="">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Projects
        </p>
        <p className="text-lg md:text-xl xl:text-2xl mt-4 text-gray-500 ">
          My projects are like Frankenstein&apos;s monsters: a bit rough around
          the edges, occasionally unpredictable, but each one has made me a
          better developer. They&apos;re a collection of trial, error, and aha
          moments, showcasing my journey from <q>Oops, crashed it again</q> to{" "}
          <q>Hey, it actually works!</q> Embracing the imperfections has taught
          me more than any bug-free code ever could.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            type={project.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
