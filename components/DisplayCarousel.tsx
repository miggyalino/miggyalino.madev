import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type CarouselDisplayProps = {
  items: string[];
};

const CarouselDisplay = ({ items }: CarouselDisplayProps) => {
  return (
    <Carousel className="w-full max-w-8xl">
      <CarouselContent className="-ml-1">
        {items.map((picture, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={picture}
                    alt="Project Image"
                    width={500}
                    height={500}
                    className="rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselDisplay;
