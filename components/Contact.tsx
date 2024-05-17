"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Lottie from "lottie-react";
import animationData from "../public/bouncingBall.json";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_wl20us8",
        "template_mzt9s9b",
        form.current as HTMLFormElement,
        {
          publicKey: "mLBg6IgvLBO_racDF",
        }
      );
      toast("Email Submitted");
      console.log("SUCCESS!");
    } catch (error) {
      console.log("FAILED...", error);
    }
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div
        id="contact"
        className="flex flex-col lg:flex-row items-center gap-24 max-container padding-container h-full"
      >
        <div className="flex flex-col gap-4 w-full lg:w-3/5 bg-white rounded-2xl py-12 px-16">
          <p className="text-7xl text-slate-800 font-bold mb-8">Contact Me</p>

          <div className="flex flex-col gap-3">
            <Label className="text-2xl font-bold text-slate-800">Name</Label>
            <Input name="from_name" type="text-box" />
          </div>
          <div className="flex flex-col gap-3">
            <Label className="text-2xl font-bold text-slate-800">Email</Label>
            <Input name="from_email" type="text-box" />
          </div>
          <div className="flex flex-col gap-3">
            <Label className="text-2xl font-bold text-slate-800">Message</Label>
            <Textarea name="message" />
          </div>
          <div className="mt-4">
            <Button
              size={"lg"}
              className="bg-[#ec4e39] hover:bg-[#d45949e0]"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/5">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </form>
  );
};

export default Contact;
