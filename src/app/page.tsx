import About from "@/components/About";
import Body from "@/components/Body";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Body />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
