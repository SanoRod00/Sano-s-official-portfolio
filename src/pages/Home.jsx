import { SEO } from "@/components/SEO";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

export const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};
