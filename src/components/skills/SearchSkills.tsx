"use client";

import { useState } from "react";
import { SkillsList } from "./SkillsList";
import ReusableImage from "../ui/ReusableImage";
import { searchResultsProps } from "@/lib/types/types";

export default function SearchSkills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<searchResultsProps[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim()) {
      const results = SkillsList.filter((skill) =>
        skill.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="relative w-full ml-[20px] md:ml-[400px] lg:ml-[800px]">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Skills..."
        className="p-2 border rounded dark:text-gray-400"
      />
      {searchTerm && searchResults.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border rounded shadow-lg z-10">
          <h3 className="p-2">Search Results:</h3>
          <section className="p-2">
            {searchResults.map((skill) => (
              <ul
                className="flex items-center gap-2 p-2 border-b hover:cursor-pointer hover:bg-gray-400"
                key={skill.id}
              >
                <li>
                  {skill.image ? (
                    <ReusableImage
                      src={skill.image}
                      alt={skill.name}
                      width={24}
                      height={24}
                    />
                  ) : null}
                </li>
                <li>{skill.name}</li>
              </ul>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
