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
          src="/assets/images/projects-images/ShopBase.webp"
          alt="Blog App Interface"
          layout="fill"
          objectFit="cover"
        />

        {/* Heading Section */}
        <section className="absolute top-[70%] w-full left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold py-2 text-black dark:text-white">
            Ecommerce App
          </h2>
        </section>
      </div>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto p-4 grid grid-cols-1 md:grid-cols-5 gap-8 py-8">
        <section className="col-span-1 md:col-span-4">
          <p className="text-gray-600 dark:text-gray-300">Project</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            <span className="font-semibold">ShopBase</span> is a comprehensive
            full-stack e-commerce application designed to deliver a modern,
            performant online shopping experience. Built with{" "}
            <strong>Next.js</strong> for the frontend and{" "}
            <strong>Express.js</strong> for the backend, the application is
            powered by <strong>Redux Toolkit</strong> for state management and{" "}
            <strong>MongoDB</strong> as the robust database solution. The
            project is secured with <strong>NextAuth</strong> authentication,
            ensuring a seamless and secure user experience. Key features include{" "}
            <strong>responsive design</strong> with{" "}
            <strong>dark and light mode</strong> support using{" "}
            <strong>next-themes</strong>, and an interactive, fluid user
            interface. The application leverages <strong>Tailwind CSS</strong>{" "}
            for elegant styling, <strong>Zod</strong> and{" "}
            <strong>react-hook-form</strong> for comprehensive form validation,
            and <strong>Framer Motion</strong> for adding dynamic, engaging
            animations that enhance user interactions. A standout feature of
            ShopBase is its multilingual support, implemented using{" "}
            <strong>next-intl</strong>, offering seamless translation across{" "}
            <strong>Arabic</strong>, <strong>English</strong>, and{" "}
            <strong>French</strong>, making the platform accessible to a global
            audience. <strong>Google reCAPTCHA</strong> adds an additional layer
            of security, protecting the application from automated bot
            interactions.
            <strong>React Hot Toast</strong> provides clean, unobtrusive
            notifications to keep users informed about their actions, while{" "}
            <strong>Lenis</strong> ensures smooth scrolling and{" "}
            <strong>nextjs-toploader</strong> offers dynamic loading indicators
            to improve perceived performance. The project prioritizes{" "}
            <strong>Search Engine Optimization</strong> with custom SEO titles,
            descriptions, and Open Graph images for each page, complemented by a
            comprehensive <strong>sitemap</strong> to enhance discoverability
            and search engine indexing. The use of{" "}
            <strong>Redux Persist</strong> ensures persistent state management,
            allowing for a seamless shopping experience across user sessions.
            Security is further enhanced with <strong>Helmet.js</strong> and{" "}
            <strong>bcrypt</strong> for robust backend protection. The project
            demonstrates a modern web development approach, seamlessly
            integrating multiple cutting-edge technologies to create a
            performant, secure, and user-friendly e-commerce platform that
            offers an exceptional digital shopping experience.
          </p>

          {/* Links Section */}
          <nav className="flex flex-col md:flex-row gap-4 mt-6">
            <a
              href="https://github.com/Aymenbachiri/ShopBase"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 mt-4 underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold">Code</h2>
              <LinkIcon />
            </a>
            <a
              href="https://shop-base-eight.vercel.app"
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
                <BulletIcon className="pr-2 dark:text-gray-200" /> Express.js
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> MongoDB
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> NextAuth
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
