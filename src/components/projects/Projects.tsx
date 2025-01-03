import ProjectsTab from "./ProjectsTab";

export default function Projects() {
  return (
    <main
      id="projects"
      className="w-full h-full mb-[280px] md:mb-0 lg:pt-[120px]"
    >
      <section className="max-w-[1240px] mx-auto px-2">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Showcase of My Work</h2>
        <div className="grid md:grid-cols-2 gap-8"></div>
      </section>
      <ProjectsTab />
    </main>
  );
}
