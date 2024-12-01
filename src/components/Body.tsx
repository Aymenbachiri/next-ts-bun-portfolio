import { GithubIcon, LinkedInIcon, ResumeIcon } from "@/lib/svg";

export default function Body() {
  return (
    <main id="home" className="w-full h-full text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <section>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Welcome to My Portfolio
            </p>
            <h1 className="py-4 text-gray-700">
              Hi, I&#39;m <span className="text-[#5651e5]">Aymen</span>
            </h1>
            <h2 className="py-2 text-gray-700">
              <span className="font- dark:text-white">Next.js </span>-{" "}
              <span className="font- dark:text-white">React Native Expo </span>-{" "}
              <span className="font- dark:text-white">Asp .Net Core</span>{" "}
              Developer
            </h2>
            <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
              Passionate about building modern, responsive web and mobile
              applications that enhance user experiences.
            </p>
          </section>
          <section className="flex items-center justify-center gap-10 max-w-[330px] m-auto py-4">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/aymen-bachiri-9442b5287"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full dark:text-[#e6e6e6] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Aymenbachiri?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full dark:text-[#e6e6e6] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1RTAxPYqm7Nohctx_YMvjH_QSrHzhwsS9/view"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full dark:text-[#e6e6e6] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                  <ResumeIcon />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
