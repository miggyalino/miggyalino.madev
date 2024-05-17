import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-900 bg-dot-gray-700">
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}
