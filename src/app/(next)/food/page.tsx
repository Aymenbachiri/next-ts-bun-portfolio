import ReusableLink from "@/components/ui/ReusableLink";
import BulletIcon from "@/lib/svg/BulletIcon";
import Image from "next/image";

export default function Next() {
  return (
    <main className="w-full h-screen">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={""}
          alt="blog"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Blog app</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Full stack blog application, created using React, Tailwind CSS, and
            Firebase, allows users to create, edit, and manage blog articles. It
            offers secure authentication through Firebase, enabling personalized
            features. Users can create, edit, and delete articles, and the
            application&apos;s user-friendly interface, designed with Tailwind
            CSS, ensures a visually appealing experience. Leveraging
            Firebase&apos;s real-time database and storage capabilities, the
            application efficiently manages content. By combining React,
            Tailwind CSS, and Firebase, the application provides a robust and
            scalable solution for bloggers to showcase their content.
          </p>
          <a
            href="https://github.com/Aymenbachiri/blog-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="px-8 py-2 mt-4 mr-8">Code</h2>
          </a>
          <a
            href="https://aymen-blog-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="px-8 py-2 mt-4">Demo</h2>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BulletIcon className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BulletIcon className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BulletIcon className="pr-1" /> Firebase
              </p>
            </div>
          </div>
        </div>
        <ReusableLink href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </ReusableLink>
      </div>
    </main>
  );
}
