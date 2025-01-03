import ReusableImage from "../ui/ReusableImage";
import ReusableLink from "../ui/ReusableLink";

export default function ReactNativeProjects() {
  return (
    <main className="flex flex-col md:flex-row justify-center gap-4 items-center h-auto w-full">
      <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <ReusableImage
          className="rounded-xl dark:bg-white group-hover:opacity-10"
          src="/assets/images/projects-images/Pickora.jpg"
          width={150}
          height={150}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-2xl text-white tracking-wider text-center">
            Pickora
          </h3>
          <p className="pb-4 pt-2 text-white text-center">Expo</p>
          <ReusableLink href="/pickora">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </ReusableLink>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <ReusableImage
          className="rounded-xl dark:bg-white group-hover:opacity-10"
          src="/assets/images/projects-images/NoteFlow.jpg"
          width={150}
          height={150}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-2xl text-white tracking-wider text-center">
            NoteFlow
          </h3>
          <p className="pb-4 pt-2 text-white text-center">Expo</p>
          <ReusableLink href="/note-flow">
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </ReusableLink>
        </div>
      </div>
    </main>
  );
}
