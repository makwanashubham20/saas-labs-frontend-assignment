import React from "react";

import {
  COLUMN_KEYS,
  COLUMNS,
  TABLE_COLUMN_CONFIG,
} from "./constants/tableConfig.constants";

import PaginationNavBar from "./components/PaginationNavBar";
import TableManager from "./components/TableManager";

import useFetchData from "./hooks/useFetchData";
import usePagination from "./hooks/usePagination";

import "./App.css";

function App() {
  const [data, loading] = useFetchData();

  const [
    totalPages,
    currentPage,
    dataOnCurrentPage,
    handlePageChange,
    goToPreviousPage,
    goToNextPage,
    recordsPerPage,
    handleUpdateRecordsPerPage,
  ] = usePagination({ data });

  return (
    <div className="App">
      <h1>Kickstarter Projects</h1>
      {!loading ? (
        <div className="AppBody">
          <TableManager
            columnConfig={TABLE_COLUMN_CONFIG}
            data={dataOnCurrentPage}
            dataKey={COLUMN_KEYS[COLUMNS.SERIAL_NO]}
          />
          <PaginationNavBar
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            maxPageNavOptions={10}
            recordsPerPage={recordsPerPage}
            handleUpdateRecordsPerPage={handleUpdateRecordsPerPage}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
