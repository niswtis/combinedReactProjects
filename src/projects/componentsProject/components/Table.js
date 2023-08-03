import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedTable = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    // we use Fragment because we need to assign the key to the results of the function(without passing it as an argument to the function)
    if (column.header)
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2 w-full">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      {<tbody>{renderedTable}</tbody>}
    </table>
  );
}

export default Table;
