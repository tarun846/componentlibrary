var c=Object.defineProperty;var o=(e,i)=>c(e,"name",{value:i,configurable:!0});import{j as s,a as r}from"./jsx-runtime-9ab0162b.js";import{p as t}from"./index-50ee27ec.js";import{c as u}from"./index-ed86a6de.js";import"./index-6fc3e33f.js";import"./iframe-aff5c971.js";function a({classnames:e,content:i,imageSrc:l,name:n,place:d,...m}){return s("div",{...m,className:u(e,"md:w-cardWidth border min-h-[337px] mx-auto border-theme-gray-100 rounded-lg p-8 flex flex-col gap-6 justify-between shadow-carosuleCard"),children:[r("p",{className:"text-left h-fit font-regular text-sm font-normal overflow-hidden leading-[21px] text-ellipsis",children:i}),s("div",{className:"flex items-center gap-4 ",children:[r("img",{src:l,alt:n,className:"rounded-full h-[60px] w-[60px]"}),s("div",{className:"flex flex-col gap-1",children:[r("span",{className:"font-medium",children:n}),r("span",{className:"font-regular text-sm text-theme-gray-400",children:d})]})]})]})}o(a,"CarouselCard");a.propTypes={classnames:t.string,content:t.string.isRequired,imageSrc:t.string.isRequired,name:t.string.isRequired,place:t.string};a.defaultProps={classnames:"",content:"this is from storybook",imageSrc:"",name:"dev",place:"place"};try{a.displayName="CarouselCard",a.__docgenInfo={description:"",displayName:"CarouselCard",props:{classnames:{defaultValue:{value:""},description:"",name:"classnames",required:!1,type:{name:"string"}},content:{defaultValue:{value:"this is from storybook"},description:"",name:"content",required:!1,type:{name:"string"}},imageSrc:{defaultValue:{value:""},description:"",name:"imageSrc",required:!1,type:{name:"string"}},name:{defaultValue:{value:"dev"},description:"",name:"name",required:!1,type:{name:"string"}},place:{defaultValue:{value:"place"},description:"",name:"place",required:!1,type:{name:"string"}}}}}catch{}const p="/assets/Vivek Pathak-9f629828.png",k={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CarouselCard } from "./CarouselCard";
import Vivek from "../assets/Vivek Pathak.png";

export default {
  title: "molecule/CarouselCard",
  component: CarouselCard,
} as ComponentMeta<typeof CarouselCard>;

const Template: ComponentStory<typeof CarouselCard> = (args) => (
  <CarouselCard {...args} />
);

export const CardDetails = Template.bind({});
CardDetails.args = {
  classnames: "",
  content:
    "NurceIndia  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  imageSrc: Vivek,
  name: "Vivek Pathak",
  place: "Delhi",
};
`,locationsMap:{"card-details":{startLoc:{col:54,line:11},endLoc:{col:1,line:13},startBody:{col:54,line:11},endBody:{col:1,line:13}}}}},title:"molecule/CarouselCard",component:a},f=o(e=>r(a,{...e}),"Template"),g=f.bind({});g.args={classnames:"",content:"NurceIndia  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",imageSrc:p,name:"Vivek Pathak",place:"Delhi"};const b=["CardDetails"];export{g as CardDetails,b as __namedExportsOrder,k as default};
//# sourceMappingURL=CarouselCard.stories-5e74909a.js.map
