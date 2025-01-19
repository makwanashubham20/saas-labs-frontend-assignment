import React from "react";

import "./paginationNavBar.css";

const PaginationNavBar = ({
  currentPage,
  totalPages,
  goToPreviousPage,
  goToNextPage,
  handlePageChange,
  maxPageNavOptions,
  recordsPerPage,
  handleUpdateRecordsPerPage,
}) => {
  const startingPage = Math.min(
    Math.max(0, currentPage - maxPageNavOptions / 2),
    Math.max(0, totalPages - maxPageNavOptions)
  );

  const endPage = Math.min(
    totalPages - 1,
    startingPage + maxPageNavOptions - 1
  );

  const onUpdateRecordsPerPage = (event) => {
    event.stopPropagation();
    handleUpdateRecordsPerPage(parseInt(event?.target?.value));
  };

  return (
    <div className="navBar">
      <label className="numberOfRecords">
        <select
          name="numberOfRecords"
          id="numberOfRecords"
          className="numberOfRecordsSelection"
          value={recordsPerPage}
          onChange={onUpdateRecordsPerPage}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        Records per page
      </label>
      <div className="seperator" />
      {startingPage > 0 && (
        <button onClick={() => handlePageChange(0)}>First</button>
      )}
      {currentPage > 0 && <button onClick={goToPreviousPage}>&laquo;</button>}
      {[...Array(endPage - startingPage + 1)].map((_, index) => (
        <button
          key={startingPage + index}
          id={startingPage + index}
          className={currentPage === startingPage + index && "selectedButton"}
          onClick={() => handlePageChange(startingPage + index)}
        >
          {startingPage + index + 1}
        </button>
      ))}
      {currentPage < totalPages - 1 && (
        <button onClick={goToNextPage}>&raquo;</button>
      )}
      {endPage < totalPages - 1 && (
        <button onClick={() => handlePageChange(totalPages - 1)}>Last</button>
      )}
      <div className="seperator" />
      {`Page ${startingPage + 1} - ${endPage + 1} of ${totalPages}`}
    </div>
  );
};

export default PaginationNavBar;
