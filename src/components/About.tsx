import ReusableImage from "./ui/ReusableImage";
import ReusableLink from "./ui/ReusableLink";
import img from "/public/assets/images/aymen-bachiri.webp";

export default function About() {
  return (
    <main
      id="about"
      className="w-full h-full p-2 flex items-center mb-[350px] lg:mb-[150px]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <section className="col-span-2">
          <h1 className="uppercase text-xl text-center md:text-start tracking-widest text-[#5651e5]">
            About
          </h1>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-500">
            Hi there! I&apos;m Aymen, a passionate{" "}
            <span className="font-bold dark:text-white">MERN</span> Stack &{" "}
            <span className="font-bold dark:text-white">React Native</span>{" "}
            developer with a background in mathematics. After studying for 3
            years at École Normale Supérieure de Kouba with the intention of
            becoming a math teacher, I made the exciting decision to pivot my
            career towards web & mobile development. With a solid foundation in
            mathematics, including an introduction course to algorithms in C,
            and a newfound passion for coding, I now specialize in creating
            exceptional user experiences through web and mobile development.
            With a solid foundation in{" "}
            <span className="font-bold dark:text-white">Next.js</span>,{" "}
            <span className="font-bold dark:text-white">Typescript</span> &{" "}
            <span className="font-bold dark:text-white">React Native</span> ,
            and a plethora of modern technologies, thrive in crafting dynamic
            and responsive applications.
          </p>
          <ReusableLink href="#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </ReusableLink>
        </section>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <ReusableImage
            src={img}
            width={450}
            height={450}
            className="rounded-xl"
            alt="aymen bachiri image"
            loading="lazy"
            sizes="(min-width: 480px) 450px, calc(93.75vw + 19px)"
          />
        </div>
      </div>
    </main>
  );
}
