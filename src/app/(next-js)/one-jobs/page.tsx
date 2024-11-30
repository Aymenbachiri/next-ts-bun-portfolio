import ReusableLink from "@/components/ui/ReusableLink";
import { BulletIcon } from "@/lib/svg";
import LinkIcon from "@/lib/svg/LinkIcon";
import Image from "next/image";

export default function page() {
  return (
    <main className="w-full h-screen dark:bg-gray-900 dark:text-gray-100">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 dark:bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          src="/assets/images/projects-images/OneJobs.webp"
          alt="Job Board Application Interface"
          layout="fill"
          objectFit="cover"
        />
        <section className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-2xl font-bold">Job Board Application</h2>
        </section>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <section className="col-span-4">
          <p className="text-gray-600 dark:text-gray-300">Project</p>
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            <span className="font-semibold">Job Board Application</span> is a
            comprehensive full-stack web application designed to streamline job
            searching and posting. Built with **Next.js** for the frontend,
            **ASP.NET Core** for the backend, and powered by **Supabase** as the
            database, the application offers a robust and modern solution for
            job seekers and employers. Key features include **secure
            authentication** with **Clerk**, responsive design with **dark and
            light mode** support, and a smooth, interactive user interface. The
            application leverages **Tailwind CSS** for styling, **Zod** and
            **react-hook-form** for comprehensive form validation, and **Lenis**
            for smooth scrolling. **Server-only** middleware ensures secure
            server actions, while **nextjs-toploader** provides dynamic loading
            indicators and <strong>Sonner</strong> **** delivers elegant toast
            notifications. The project demonstrates a modern web development
            approach, combining performance, security, and an intuitive user
            experience across multiple technologies.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <a
              href="https://github.com/Aymenbachiri/JobOne"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-6 mt-4 underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold">Code</h2>
              <LinkIcon />
            </a>
            <a
              href="https://onejobs.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-6 mt-4 underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold">Demo</h2>
              <LinkIcon />
            </a>
          </div>
        </section>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-black/50 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-gray-100">
              Technologies
            </p>
            <section className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-1 dark:text-gray-200" /> Next.js
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-1 dark:text-gray-200" /> ASP.NET Core
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-1 dark:text-gray-200" /> Supabase
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-1 dark:text-gray-200" /> Clerk
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-1 dark:text-gray-200" /> Tailwind CSS
              </p>
            </section>
          </div>
        </div>
        <ReusableLink href="/#projects">
          <p className="underline cursor-pointer dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Back
          </p>
        </ReusableLink>
      </div>
    </main>
  );
}
