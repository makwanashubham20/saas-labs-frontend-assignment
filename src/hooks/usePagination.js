import { useState } from "react";

import _ceil from "lodash/ceil";
import _min from "lodash/min";
import _slice from "lodash/slice";

const usePagination = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  const totalPages = _ceil(data.length / recordsPerPage);

  const dataOnCurrentPage = _slice(
    data,
    currentPage * recordsPerPage,
    _min([data.length, currentPage * recordsPerPage + recordsPerPage])
  );

  const handlePageChange = (updatedPage) => {
    if (updatedPage === currentPage) return;
    setCurrentPage(updatedPage);
  };

  const goToPreviousPage = () => {
    setCurrentPage((curr) => curr - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((curr) => curr + 1);
  };

  const handleUpdateRecordsPerPage = (updatedPage) => {
    setRecordsPerPage(updatedPage);
    if (currentPage > _ceil(data.length / updatedPage) - 1)
      setCurrentPage(_ceil(data.length / updatedPage) - 1);
  };

  return [
    totalPages,
    currentPage,
    dataOnCurrentPage,
    handlePageChange,
    goToPreviousPage,
    goToNextPage,
    recordsPerPage,
    handleUpdateRecordsPerPage,
  ];
};

export default usePagination;
