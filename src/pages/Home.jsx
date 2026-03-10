import { SEO } from "@/components/SEO";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Blog } from "@/sections/Blog";
import { Contact } from "@/sections/Contact";

export const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};
