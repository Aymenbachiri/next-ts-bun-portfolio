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
          src="/assets/images/projects-images/OneJobs.webp"
          alt="Job Board Application Interface"
          layout="fill"
          objectFit="cover"
        />

        {/* Heading Section */}
        <section className="absolute top-[70%] w-full left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold py-2">
            Job Board Application
          </h2>
        </section>
      </div>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto p-4 grid grid-cols-1 md:grid-cols-5 gap-8 py-8">
        <section className="col-span-1 md:col-span-4">
          <p className="text-gray-600 dark:text-gray-300">Project</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            <span className="font-semibold">Job Board Application</span> is a
            comprehensive full-stack web application designed to streamline job
            searching and posting. Built with <strong>Next.js</strong> for the
            frontend, <strong>ASP.NET Core</strong> for the backend, and powered
            by <strong>Supabase</strong> as the database, the application offers
            a robust and modern solution for job seekers and employers. Key
            features include <strong>secure authentication</strong> with{" "}
            <strong>Clerk</strong>, responsive design with{" "}
            <strong>dark and light mode</strong> support, and a smooth,
            interactive user interface. The application leverages{" "}
            <strong>Tailwind CSS</strong> for styling, <strong>Zod</strong> and{" "}
            <strong>react-hook-form</strong> for comprehensive form validation,
            and <strong>Lenis</strong> for smooth scrolling.{" "}
            <strong>Server-only</strong> middleware ensures secure server
            actions, while <strong>nextjs-toploader</strong> provides dynamic
            loading indicators and <strong>Sonner</strong> delivers elegant
            toast notifications. The project implements advanced{" "}
            <strong>SEO</strong>
            capabilities, including custom SEO titles and descriptions for each
            page, dynamically generated Open Graph images to enhance social
            media sharing, and a comprehensive <strong>sitemap</strong> to
            improve search engine indexing and discoverability. The project
            demonstrates a modern web development approach, combining
            performance, security, and an intuitive user experience across
            multiple technologies.
          </p>

          {/* Links Section */}
          <nav className="flex flex-col md:flex-row gap-4 mt-6">
            <a
              href="https://github.com/Aymenbachiri/JobOne"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 mt-4 underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold">Code</h2>
              <LinkIcon />
            </a>
            <a
              href="https://onejobs.vercel.app"
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
                <BulletIcon className="pr-2 dark:text-gray-200" /> Supabase
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> Clerk
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
