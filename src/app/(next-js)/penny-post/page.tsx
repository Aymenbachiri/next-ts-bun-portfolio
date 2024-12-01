import ReusableLink from "@/components/ui/ReusableLink";
import { BulletIcon } from "@/lib/svg";
import LinkIcon from "@/lib/svg/LinkIcon";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full h-auto dark:bg-gray-900 dark:text-gray-100">
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        {/* Overlay for image text contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/50 dark:bg-black/80 z-10" />

        <Image
          className="absolute z-0 object-cover"
          src="/assets/images/projects-images/PennyPost.webp"
          alt="Blog App Interface"
          layout="fill"
          objectFit="cover"
        />

        {/* Heading Section */}
        <section className="absolute top-[70%] w-full left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold py-2">Blog App</h2>
        </section>
      </div>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto p-4 grid grid-cols-1 md:grid-cols-5 gap-8 py-8">
        <section className="col-span-1 md:col-span-4">
          <p className="text-gray-600 dark:text-gray-300">Project</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            {" "}
            <span className="font-semibold">
              Full Stack Blog Application
            </span>{" "}
            is a comprehensive web platform designed to deliver a modern,
            performant blogging experience. Built with <strong>Next.js</strong>{" "}
            for the frontend and <strong>ASP.NET Core</strong> for the backend,
            the application is powered by <strong>MongoDB</strong> as the
            database and secured with <strong>Auth0 </strong> authentication.
            The project showcases a sophisticated tech stack that prioritizes
            user experience, performance, and robust functionality. Key features
            include <strong>secure authentication </strong> through{" "}
            <strong>Auth0</strong>, responsive design with{" "}
            <strong>dark and light mode </strong> support using{" "}
            <strong>next-themes</strong>, and a smooth, interactive user
            interface. The application leverages <strong>Tailwind CSS</strong>{" "}
            for elegant styling, <strong>Zod</strong> and{" "}
            <strong>react-hook-form</strong> for comprehensive form validation,
            and <strong>Lenis</strong> for smooth, engaging scrolling. The use
            of <strong>Framer Motion</strong> enhances the user experience by
            adding fluid and dynamic animations, making transitions and
            interactions more engaging and visually appealing.{" "}
            <strong>Server-only</strong> middleware ensures secure server
            actions, while <strong> nextjs-toploader</strong> provides dynamic
            loading indicators and <strong> Sonner</strong> delivers clean,
            unobtrusive toast notifications. Additionally, the project
            implements comprehensive <strong>SEO</strong> optimization with
            custom SEO titles and descriptions for each page, along with
            dynamically generated Open Graph images to enhance social media
            sharing and visibility. A fully structured <strong>sitemap</strong>{" "}
            is automatically generated to improve search engine indexing and
            discoverability. The project demonstrates a modern web development
            approach, seamlessly integrating multiple cutting-edge technologies
            to create a performant, secure, and user-friendly blogging platform
            that offers an exceptional digital experience.{" "}
          </p>

          {/* Links Section */}
          <nav className="flex flex-col md:flex-row gap-4 mt-6">
            <a
              href="https://github.com/Aymenbachiri/Penny-Post"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 mt-4 underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold">Code</h2>
              <LinkIcon />
            </a>
            <a
              href="https://pennypost.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 mt-4 underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold">Demo</h2>
              <LinkIcon />
            </a>
          </nav>
        </section>

        {/* Technologies Section */}
        <div className="col-span-1 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-black/50 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-gray-100">
              Technologies
            </p>
            <section className="grid grid-cols-3 sm:grid-cols-1 gap-4">
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> Next.js
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> ASP.NET Core
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> MongoDB
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> Auth0
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> Framer Motion
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> Tailwind CSS
              </p>
            </section>
          </div>
        </div>

        {/* Back Link */}
        <ReusableLink href="/#projects">
          <p className="underline cursor-pointer dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Back
          </p>
        </ReusableLink>
      </div>
    </main>
  );
}
