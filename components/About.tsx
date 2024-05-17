"use client";
import Lottie from "lottie-react";
import animationData from "@/public/aboutanimation.json";
import TechStack from "./TechStack";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} id="about" className="h-full py-36 flex border-t-2">
      <div className="flex flex-col xl:flex-row justify-center items-center padding-container max-container gap-24">
        <motion.div
          className="flex flex-col gap-4"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.35, delay: 0.7 }}
        >
          <p className="text-white font-bold text-5xl md:text-6xl lg:text-7xl">
            About Me
          </p>
          <p className="text-lg md:text-xl xl:text-2xl mt-4 text-gray-500 max-w-4xl">
            Hello there! I&apos;m a full-stack developer with a (mildly
            concerning) obsession for building things with technology. Ever
            since I wrote my first <q>Hello, World!</q> program, I&apos;ve been
            hooked.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl mt-4 text-gray-500 max-w-4xl">
            Coding is like solving a Rubik&apos;s Cube while riding a unicycle
            on a tightrope—blindfolded. But that&apos;s what I love about it!
            The thrill of solving problems and turning ideas into digital
            reality keeps me going. So, if you&apos;re looking for someone who
            codes like they&apos;re on a caffeine-fueled adventure, I&apos;m
            your developer!
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
        >
          <TechStack />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
