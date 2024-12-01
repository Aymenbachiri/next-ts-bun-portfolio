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
          src="/assets/images/projects-images/Pickora.jpg"
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
            <span className="font-semibold">Pickora</span> is a cutting-edge
            mobile e-commerce application designed to deliver a modern,
            performant shopping experience on mobile devices. Built with{" "}
            <strong>React Native Expo</strong> for the frontend and{" "}
            <strong>ASP.NET Core</strong> for the backend, the application is
            powered by <strong>Redux Toolkit</strong> for state management and{" "}
            <strong>MongoDB</strong> as the robust database solution. The
            project is secured with <strong>Clerk</strong> authentication,
            ensuring a seamless and secure user experience. Key features include{" "}
            <strong>responsive mobile design</strong> with{" "}
            <strong>dark and light mode</strong> support, providing users with a
            versatile and visually appealing interface. The application
            leverages <strong>NativeWind</strong> for elegant styling,
            seamlessly integrating Tailwind CSS principles into the React Native
            ecosystem. <strong>Zod</strong> and <strong>react-hook-form</strong>{" "}
            provide comprehensive form validation, ensuring data integrity and
            smooth user interactions. The mobile app utilizes a rich set of Expo
            features, including <strong>Expo Fonts</strong> for custom
            typography, and <strong>Expo Secure Store</strong> for secure local
            storage. <strong>React Navigation</strong> enables smooth,
            native-feeling navigation between screens, while{" "}
            <strong>Expo Router</strong> provides a modern routing solution for
            the application.
            <strong>Redux Persist</strong> ensures persistent state management,
            allowing for a seamless shopping experience across user sessions.{" "}
            The project demonstrates a modern mobile development approach,
            seamlessly integrating multiple cutting-edge technologies to create
            a performant, secure, and user-friendly e-commerce platform that
            offers an exceptional mobile shopping experience. With support for
            multiple platforms and a focus on user experience, Pickora
            represents the future of mobile e-commerce applications.
          </p>

          {/* Links Section */}
          <nav className="flex flex-col md:flex-row gap-4 mt-6">
            <a
              href="https://github.com/Aymenbachiri/Pickora"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 mt-4 underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold">Code</h2>
              <LinkIcon />
            </a>
            <a
              href="https://drive.google.com/file/d/1ZZJz7PMYUXeNbU8Ay44jemlqSBrD6NBE/view"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 mt-4 underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold">Download</h2>
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
                <BulletIcon className="pr-2 dark:text-gray-200" /> React Native
                Expo
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> ASP.NET Core
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> MongoDB
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> Clerk
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> Redux Toolkit
              </p>
              <p className="text-gray-600 dark:text-gray-300 py-2 flex items-center">
                <BulletIcon className="pr-2 dark:text-gray-200" /> NativeWind
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
