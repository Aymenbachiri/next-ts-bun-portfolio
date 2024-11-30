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
            About Me
          </h1>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-500">
            Hello! I&apos;m Aymen, a passionate{" "}
            <span className="font-bold dark:text-white">Full-Stack Web</span>{" "}
            and{" "}
            <span className="font-bold dark:text-white">Mobile Developer</span>{" "}
            specializing in{" "}
            <span className="font-bold dark:text-white">Next.js</span>,{" "}
            <span className="font-bold dark:text-white">React Native Expo</span>
            , and{" "}
            <span className="font-bold dark:text-white">ASP.NET Core</span>{" "}
            development. My journey into tech started after studying mathematics
            at École Normale Supérieure de Kouba, where I initially aspired to
            become a math teacher. However, my love for problem-solving and
            technology led me to pivot into web and mobile development.
          </p>
          <p className="py-2 text-gray-500">
            With a strong foundation in{" "}
            <span className="font-bold dark:text-white">mathematics</span> and
            programming, including algorithms in C, I now focus on creating
            dynamic, scalable, and responsive web and mobile applications. My
            expertise spans modern technologies such as{" "}
            <span className="font-bold dark:text-white">Next.js</span> for
            server-side rendering,{" "}
            <span className="font-bold dark:text-white">Typescript</span> for
            type safety, and{" "}
            <span className="font-bold dark:text-white">React Native Expo</span>{" "}
            for cross-platform mobile development. Additionally, I am proficient
            in building powerful APIs and back-end systems with{" "}
            <span className="font-bold dark:text-white">ASP.NET Core</span>.
          </p>
          <p className="py-2 text-gray-500">
            I am constantly learning and embracing new challenges, always
            striving to improve the user experience and deliver high-quality,
            maintainable code. My goal is to craft seamless, intuitive
            applications that make a real impact.
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
            alt="Aymen Bachiri"
            loading="lazy"
            sizes="(min-width: 480px) 450px, calc(93.75vw + 19px)"
          />
        </div>
      </div>
    </main>
  );
}
