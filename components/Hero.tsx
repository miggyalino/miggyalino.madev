"use client";

import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 30;

  return (
    <main className="main">
      <motion.div
        className="mask w-full "
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="flex justify-center items-center gap-24 px-8 md:px-16 py-40 xl:px-32 xl:py-52"
        >
          <div className="">
            <div className="flex gap-5 items-center justify-start px-4 h-[4rem] w-[16rem] rounded-full bg-white mb-8 xl:hidden">
              <Image
                src={"/miggypic2.jpg"}
                alt="normalPicture"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="font-bold text-xl">Miggy Alino</p>
            </div>
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl">
              A mad developer obssessed with technology.
            </p>
            <p className="text-lg md:text-xl xl:text-2xl mt-4 text-white/70 max-w-4xl">
              Wassup Miggy here, a relentless full stack developer with a
              passion for crafting and implementing cutting-edge applications.
            </p>
          </div>
          <Image
            src="/miggypic2.jpg"
            alt="normalPicture"
            width={500}
            height={500}
            className="rounded-full border-2 border-slate-800 hidden xl:block"
          />
        </div>
      </motion.div>

      <div className="flex justify-center items-center gap-24 px-8 md:px-16 py-40 xl:px-32 xl:py-52">
        <div>
          <div className="flex gap-5 items-center justify-start px-4 h-[4rem] w-[16rem] rounded-full bg-slate-800 mb-8 xl:hidden">
            <Image
              src={"/miggypic.jpg"}
              alt="normalPicture"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="font-bold text-xl text-white">Miggy Alino</p>
          </div>
          <p className="text-white text-5xl md:text-6xl lg:text-7xl font-bold max-w-3xl">
            Transforming Tech Challenges into Solutions.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl mt-4 text-gray-500 max-w-4xl">
            Wassup Miggy here, Im a full stack developer who loves to design and
            implement applications that solves real world problems.
          </p>
        </div>
        <Image
          src="/miggypic.jpg"
          alt="normalPicture"
          width={500}
          height={500}
          className="rounded-full border-2 border-white hidden xl:block"
        />
      </div>
    </main>
  );
};

export default Hero;
