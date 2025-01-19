import React from "react";

import { render, screen } from "@testing-library/react";

import TableManager from "../TableManager";

describe("TableManager Component", () => {
  const columnConfig = [
    { key: "name", Header: "Name", width: "200px" },
    { key: "age", Header: "Age", width: "100px" },
  ];
  const data = [
    { key: 1, name: "John Doe", age: 25 },
    { key: 2, name: "Jane Smith", age: 30 },
  ];

  test("renders table headers based on columnConfig", () => {
    render(<TableManager columnConfig={columnConfig} data={data} />);

    columnConfig.forEach((column) => {
      expect(screen.getByText(column.Header)).toBeInTheDocument();
    });
  });

  test("renders table rows and data correctly", () => {
    render(
      <TableManager columnConfig={columnConfig} data={data} dataKey="key" />
    );

    data.forEach((row) => {
      columnConfig.forEach((column) => {
        expect(screen.getByText(row[column.key])).toBeInTheDocument();
      });
    });
  });

  test("displays 'No Records to show' when data is empty", () => {
    render(<TableManager columnConfig={columnConfig} data={[]} />);

    expect(screen.getByText("No Records to show")).toBeInTheDocument();
  });

  test("does not render 'No Records to show' when data is provided", () => {
    render(<TableManager columnConfig={columnConfig} data={data} />);

    expect(screen.queryByText("No Records to show")).toBeNull();
  });

  test("renders table with default dataKey if not provided", () => {
    const defaultDataKeyData = [
      { key: "1", name: "John Doe", age: 25 },
      { key: "2", name: "Jane Smith", age: 30 },
    ];
    render(
      <TableManager columnConfig={columnConfig} data={defaultDataKeyData} />
    );

    defaultDataKeyData.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(row.age.toString())).toBeInTheDocument();
    });
  });
});
