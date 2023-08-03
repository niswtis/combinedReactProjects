import { useState } from "react";

function useSorting(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);

      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  function sortData() {
    let updatedData = data;
    if (sortBy && sortOrder) {
      const { sortValue } = config.find((column) => column.label === sortBy);
      updatedData = [...data].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);
        const reverseOrder = sortOrder === "asc" ? 1 : -1;

        if (typeof valueA === "string") {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else {
          return (valueA - valueB) * reverseOrder;
        }
      });
    }
    return updatedData;
  }

  return { sortOrder, sortBy, setSortColumn, sortData };
}

export default useSorting;
