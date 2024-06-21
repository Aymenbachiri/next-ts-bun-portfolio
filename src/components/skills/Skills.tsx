import { SkillsList } from "./SkillsList";
import ReusableImage from "../ui/ReusableImage";

export default function Skills() {
  return (
    <main
      id="skills"
      className="w-full lg:h-screen p-2 lg:pt-[130px] mb-[150px] lg:mb-[1250px]"
    >
      <section className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <h1 className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </h1>
        <h2 className="py-4">My Expertise</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsList?.map((skill) => (
            <article
              key={skill.id}
              className="p-6 shadow-xl dark:shadow-[#e2dddd] rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  {skill.image ? (
                    <ReusableImage
                      src={skill.image}
                      alt={skill.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col items-center justify-center dark:text-gray-500">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
