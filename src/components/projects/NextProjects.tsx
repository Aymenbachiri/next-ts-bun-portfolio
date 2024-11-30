import ReusableImage from "../ui/ReusableImage";
import ReusableLink from "../ui/ReusableLink";

export default function NextProjects() {
  const nextProjects = [
    {
      name: "One Jobs",
      image: "/assets/images/projects-images/OneJobs.webp",
      url: "/",
    },
    {
      name: "Penny Post",
      image: "/assets/images/projects-images/PennyPost.webp",
      url: "/",
    },
    {
      name: "Easy Shop",
      image: "/assets/images/projects-images/EasyShop.webp",
      url: "/",
    },
    {
      name: "Task Tide",
      image: "/assets/images/projects-images/TaskTide.webp",
      url: "/",
    },
    {
      name: "Shop Base",
      image: "/assets/images/projects-images/ShopBase.webp",
      url: "/",
    },
  ];

  return (
    <main className="flex flex-col md:flex-row justify-center gap-4 items-center h-auto w-full">
      {nextProjects.map((proejct) => (
        <div
          key={proejct.name}
          className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
        >
          <ReusableImage
            className="rounded-xl dark:bg-white group-hover:opacity-10"
            src={proejct.image}
            width={150}
            height={150}
            alt="/"
          />
          <section className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-2xl text-white tracking-wider text-center">
              {proejct.name}
            </h3>
            <p className="pb-4 pt-2 text-white text-center">Next Js</p>
            <ReusableLink href={proejct.url}>
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </ReusableLink>
          </section>
        </div>
      ))}
    </main>
  );
}
