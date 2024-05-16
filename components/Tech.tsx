import Image from "next/image";
import React from "react";

type TechProps = {
  name: string;
  path: string;
};

const Tech = ({ name, path }: TechProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-20 w-20 flex flexCenter p-4">
        <Image src={path} alt={name} width={50} height={50} />
      </div>
      <p className="text-white">{name}</p>
    </div>
  );
};

export default Tech;
