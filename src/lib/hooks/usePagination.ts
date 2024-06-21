import { SkillsList } from "@/components/skills/SkillsList";
import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(SkillsList.length / itemsPerPage);

  // Get current items
  const currentItems = SkillsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
        setIsLoading(false);
      }, 300);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage - 1);
        setIsLoading(false);
      }, 300);
    }
  };

  return {
    currentItems,
    handleNextPage,
    handlePreviousPage,
    currentPage,
    totalPages,
    isLoading,
  };
};
