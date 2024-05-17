"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Lottie from "lottie-react";
import animationData from "../public/bouncingBall.json";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <div className="flex items-center gap-24 max-container padding-container h-screen">
      <div className="flex flex-col gap-4 w-1/2">
        <p className="text-7xl text-white font-bold mb-8">Contact Me</p>
        <div className="flex flex-col gap-3">
          <Label className="text-2xl font-bold text-white">Name</Label>
          <Input type="text-box" />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-2xl font-bold text-white">Email</Label>
          <Input type="text-box" />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-2xl font-bold text-white">Message</Label>
          <Textarea />
        </div>
        <div className="mt-4">
          <Button
            variant={"destructive"}
            size={"lg"}
            className="bg-[#ec4e39] hover:bg-[#d45949e0]"
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Contact;
