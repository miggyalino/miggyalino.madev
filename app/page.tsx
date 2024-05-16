import About from "@/components/About";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Hero />
      <About />
      <WorkExperience />
    </main>
  );
}
