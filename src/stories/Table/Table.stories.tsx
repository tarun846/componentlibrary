import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../Button/Button";
import Table from "./Table";
import { Idata } from "./types";

export default {
  title: "molecule/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table {...args}>
    <div className="flex justify-between items-center w-full">
      <p>Custum Header</p>
      <Button
        type="plain"
        label="See All"
        className="!py-0"
        children={undefined}
        labelClassName={""}
      />
    </div>
  </Table>
);

export const DefaultTable = Template.bind({});
export const withCustomHeader = Template.bind({});

const columnData = [
  {
    field: "Name",
    render: (rowData: Idata) => (
      <div className="text-gray-600 text-sm">{rowData.name}</div>
    ),
  },
  {
    field: "Age",
    render: (rowData: Idata) => (
      <div className="text-gray-600 text-sm">{rowData.age}</div>
    ),
  },
  {
    field: "Position",
    render: (rowData: Idata) => (
      <div className="text-gray-600 text-sm">{rowData.position}</div>
    ),
  },
  {
    field: "Years",
    render: (rowData: Idata) => (
      <div className="text-gray-600 text-sm">{rowData.years}</div>
    ),
  },
];
const data = [
  {
    name: "Krish",
    age: "2340",
    position: "Developer",
    years: "10",
  },
  {
    name: "Dave",
    age: "2340",
    position: "Developer",
    years: "10",
  },
  {
    name: "Joe",
    age: "2340",
    position: "Developer",
    years: "10",
  },
  {
    name: "Jhon",
    age: "2340",
    position: "Developer",
    years: "10",
  },
  {
    name: "Lenord",
    age: "2340",
    position: "Developer",
    years: "10",
  },
];

DefaultTable.args = {
  columnData: columnData,
  data: data,
};

withCustomHeader.args = {
  columnData: columnData,
  data: data,
  customHeader: true,
};
