import Table from "./Table";
import useSorting from "../hooks/use-sorting";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, setSortColumn, sortData } = useSorting(
    data,
    config
  );

  const getIcons = (columnLabel, sortBy, sortOrder) => {
    if (sortBy == null || columnLabel !== sortBy)
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );

    if (sortOrder === "asc")
      return (
        <div>
          <GoArrowUp />
        </div>
      );
    else if (sortOrder === "desc")
      return (
        <div>
          <GoArrowDown />
        </div>
      );
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  const updatedData = sortData();
  return <Table {...props} config={updatedConfig} data={updatedData} />;
}

export default SortableTable;
