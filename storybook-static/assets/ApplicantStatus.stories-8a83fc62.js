var m=Object.defineProperty;var a=(e,t)=>m(e,"name",{value:t,configurable:!0});import{a as s}from"./jsx-runtime-9ab0162b.js";import{p as l}from"./index-50ee27ec.js";import{c as u}from"./index-ed86a6de.js";import{_ as y}from"./lodash-f0df05cb.js";import"./index-6fc3e33f.js";import"./iframe-aff5c971.js";function n({className:e,children:t,type:c,...p}){const o={0:["Active","Submitted","Cv Shortlisted","Hired","Interviewed","active","Success"],1:["Paused","Draft","Applied","On Hold","Pending"],2:["Inactive","Rejected","Closed","Failed"]};function d(r){if(o[0].includes(r))return"bg-theme-green-10 text-theme-green-500";if(o[1].includes(r))return"bg-theme-yellow-10 text-theme-yellow-500";if(o[2].includes(r))return"bg-theme-red-10 text-theme-red-500"}return a(d,"findStatusType"),console.log(t),s("div",{className:u("w-fit font-regular text-sm px-3 rounded capitalize leading-6",d(y.startCase(c)),e),...p,children:s("p",{children:t==null?void 0:t.replace("_"," ")})})}a(n,"ApplicantStatus");n.propTypes={className:l.string,type:l.string};n.defaultProps={className:""};try{n.displayName="ApplicantStatus",n.__docgenInfo={description:"",displayName:"ApplicantStatus",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"Active"'},{value:'"Paused"'},{value:'"Inactive"'}]}}}}}catch{}const h={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ApplicantStatus from "./ApplicantStatus";

export default {
  title: "molecule/Status",
  component: ApplicantStatus,
} as ComponentMeta<typeof ApplicantStatus>;

let Template: ComponentStory<typeof ApplicantStatus> = (args) => (
  <ApplicantStatus {...args}>Shortlisted</ApplicantStatus>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "Active",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "Paused",
};

export const Inactive = Template.bind({});
Inactive.args = {
  type: "Inactive",
};
`,locationsMap:{primary:{startLoc:{col:55,line:10},endLoc:{col:1,line:12},startBody:{col:55,line:10},endBody:{col:1,line:12}},secondary:{startLoc:{col:55,line:10},endLoc:{col:1,line:12},startBody:{col:55,line:10},endBody:{col:1,line:12}},inactive:{startLoc:{col:55,line:10},endLoc:{col:1,line:12},startBody:{col:55,line:10},endBody:{col:1,line:12}}}}},title:"molecule/Status",component:n};let i=a(e=>s(n,{...e,children:"Shortlisted"}),"Template");const S=i.bind({});S.args={type:"Active"};const f=i.bind({});f.args={type:"Paused"};const g=i.bind({});g.args={type:"Inactive"};const N=["Primary","Secondary","Inactive"];export{g as Inactive,S as Primary,f as Secondary,N as __namedExportsOrder,h as default};
//# sourceMappingURL=ApplicantStatus.stories-8a83fc62.js.map
