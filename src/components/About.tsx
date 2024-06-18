import ReusableImage from "./ui/ReusableImage";
import ReusableLink from "./ui/ReusableLink";
import img from "/public/assets/images/aymen-bachiri.webp";

export default function About() {
  return (
    <main id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <section className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi there! I&apos;m Aymen, a passionate frontend developer with a
            unique background in mathematics. After studying for three years at
            École Normale Supérieure de Kouba University with the intention of
            becoming a math teacher, I made the exciting decision to pivot my
            career towards frontend development. With a solid foundation in
            mathematics and a newfound passion for coding, I now specialize in
            creating exceptional user experiences through web development. With
            a solid foundation in HTML/CSS, JavaScript, and a plethora of modern
            tools and frameworks including React.js, Node.js, and Next.js, I
            thrive in crafting dynamic and responsive web applications.
          </p>
          <p className="py-2 text-gray-600">
            As a dedicated frontend developer, I had internship where I had the
            opportunity to contribute to various projects. During this
            internship, collaborated with development teams, and gained
            practical experience in implementing frontend solutions.
          </p>
          <ReusableLink href="/#projects">
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
            sizes="(min-width: 1320px) 360px, (min-width: 780px) calc(30.58vw - 38px), (min-width: 540px) 450px, calc(90vw - 18px)"
          />
        </div>
      </div>
    </main>
  );
}
