import _ceil from "lodash/ceil";

export const getTotalNumberOfPages = (dataLength, recordsPerPage) =>
  Math.max(1, _ceil(dataLength / recordsPerPage));
