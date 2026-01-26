import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects"; // This will become a "Featured Projects" section
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { SEO } from "@/components/SEO";

export const Home = () => {
    return (
        <>
            <SEO title="Home" />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
        </>
    );
};
