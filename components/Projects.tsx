"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants";
import { motion, useInView, useAnimation } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      id="projects"
      ref={ref}
      className="max-container padding-container py-32 h-full w-full"
    >
      <motion.div
        className=""
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.35, delay: 0.7 }}
      >
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
      </motion.div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-12"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.35, delay: 0.7 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Projects;
