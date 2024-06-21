import SearchSkills from "./SearchSkills";
import SkillsItems from "./SkillsItems";

export default function Skills() {
  return (
    <main
      id="skills"
      className="w-full lg:h-screen p-2 lg:pt-[130px] mb-[150px] lg:mb-[170px]"
    >
      <section className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <h1 className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </h1>
        <div className="flex justify-between items-center">
          <h2 className="my-4 w-full">My_Expertise</h2>
          <SearchSkills />
        </div>
        <div className="relative">
          <SkillsItems />
        </div>
      </section>
    </main>
  );
}
