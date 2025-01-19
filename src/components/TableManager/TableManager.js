import { React } from "react";

import _map from "lodash/map";

import "./tableManager.css";

const TableManager = ({ columnConfig = [], data = [], dataKey = "key" }) => (
  <table>
    <tr>
      {_map(columnConfig, (column) => {
        const { width, Header, key } = column || {};
        return (
          <th key={`header-${key}`} style={{ width }}>
            {Header}
          </th>
        );
      })}
    </tr>
    {_map(data, (columnData = {}) => {
      return (
        <tr key={columnData[dataKey]}>
          {_map(columnConfig, (column, index) => {
            const { width, key } = column || {};
            return (
              <td key={`data--${index}-${key}`} style={{ width }}>
                {columnData[key]}
              </td>
            );
          })}
        </tr>
      );
    })}
  </table>
);

export default TableManager;
