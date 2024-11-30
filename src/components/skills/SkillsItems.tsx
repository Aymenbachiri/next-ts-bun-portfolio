"use client";
import { usePagination } from "@/lib/hooks/usePagination";
import ReusableImage from "../ui/ReusableImage";

export default function SkillsItems() {
  const {
    currentItems,
    handleNextPage,
    handlePreviousPage,
    currentPage,
    totalPages,
    isLoading,
  } = usePagination();

  return (
    <main>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {currentItems.map((skill) => (
          <article
            key={skill.id}
            className={`p-6 shadow-xl dark:shadow-[#e2dddd] rounded-xl hover:scale-105 ease-in duration-300 ${
              isLoading ? "opacity-50 transition-opacity" : "opacity-100"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto max-h-[50px]">
                {skill.image ? (
                  <ReusableImage
                    src={skill.image}
                    alt={skill.name}
                    width={64}
                    height={64}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="dark:bg-white dark:rounded-lg"
                  />
                ) : null}
              </div>
              <div className="flex text-center flex-col items-center justify-center dark:text-gray-500">
                <h3>{skill.name}</h3>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="flex justify-center mt-20">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 dark:text-gray-400 mx-1 border rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 dark:text-gray-400 mx-1 border rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </section>
    </main>
  );
}
