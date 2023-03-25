var x=Object.defineProperty;var i=(e,n)=>x(e,"name",{value:n,configurable:!0});import{a,j as d}from"./jsx-runtime-9ab0162b.js";import{B as v}from"./Button-f0d3a7d8.js";import{c}from"./index-ed86a6de.js";import{p}from"./index-50ee27ec.js";import"./index-6fc3e33f.js";import"./iframe-aff5c971.js";function t({columnData:e,data:n,customHeader:o=!1,children:m}){return console.log(e[0],n[0],o,m),a("div",{className:"px-4 sm:px-6 md:px-0 ",children:a("div",{className:"flex flex-col",children:a("div",{className:"-my-2 -mx-4 p-1 sm:p-0 overflow-x-auto sm:-mx-6 lg:-mx-8",children:a("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:d("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg",children:[o?a("div",{className:"flex justify-between bg-[#eceff5] py-3.5 px-4 md:px-5",children:m}):null,d("table",{className:"min-w-full divide-y divide-gray-300",children:[a("thead",{className:c(o?"bg-white ":"bg-[#eceff5]"),children:a("tr",{children:e==null?void 0:e.map((l,s)=>a("th",{scope:"col",className:"whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-regular font-bold text-[#404759] sm:pl-6",children:l.field},s))})}),a("tbody",{className:"divide-y divide-gray-200 bg-white",children:n==null?void 0:n.map((l,s)=>(console.log(l),a("tr",{children:e==null?void 0:e.map((r,g)=>(console.log(r,"sady"),a("td",{className:c(l.is_unlocked?"bg-theme-green-100":"","whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-[#404759]"),children:r==null?void 0:r.render(l)},g)))},s)))})]})]})})})})})}i(t,"Table");t.propTypes={columnData:p.array.isRequired,data:p.array.isRequired};t.defaultProps={columnData:[],data:[]};try{t.displayName="Table",t.__docgenInfo={description:"",displayName:"Table",props:{columnData:{defaultValue:{value:"[]"},description:"",name:"columnData",required:!1,type:{name:"IcolumnData[]"}},data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"Idata[]"}},customHeader:{defaultValue:{value:"false"},description:"",name:"customHeader",required:!1,type:{name:"boolean"}}}}}catch{}const H={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
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
`,locationsMap:{"default-table":{startLoc:{col:47,line:12},endLoc:{col:1,line:25},startBody:{col:47,line:12},endBody:{col:1,line:25}},"with-custom-header":{startLoc:{col:47,line:12},endLoc:{col:1,line:25},startBody:{col:47,line:12},endBody:{col:1,line:25}}}}},title:"molecule/Table",component:t},u=i(e=>a(t,{...e,children:d("div",{className:"flex justify-between items-center w-full",children:[a("p",{children:"Custum Header"}),a(v,{type:"plain",label:"See All",className:"!py-0",children:void 0,labelClassName:""})]})}),"Template"),h=u.bind({}),b=u.bind({}),y=[{field:"Name",render:e=>a("div",{className:"text-gray-600 text-sm",children:e.name})},{field:"Age",render:e=>a("div",{className:"text-gray-600 text-sm",children:e.age})},{field:"Position",render:e=>a("div",{className:"text-gray-600 text-sm",children:e.position})},{field:"Years",render:e=>a("div",{className:"text-gray-600 text-sm",children:e.years})}],f=[{name:"Krish",age:"2340",position:"Developer",years:"10"},{name:"Dave",age:"2340",position:"Developer",years:"10"},{name:"Joe",age:"2340",position:"Developer",years:"10"},{name:"Jhon",age:"2340",position:"Developer",years:"10"},{name:"Lenord",age:"2340",position:"Developer",years:"10"}];h.args={columnData:y,data:f};b.args={columnData:y,data:f,customHeader:!0};const I=["DefaultTable","withCustomHeader"];export{h as DefaultTable,I as __namedExportsOrder,H as default,b as withCustomHeader};
//# sourceMappingURL=Table.stories-fd3920b8.js.map
