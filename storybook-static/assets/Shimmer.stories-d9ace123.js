var f=Object.defineProperty;var m=(e,n)=>f(e,"name",{value:n,configurable:!0});import{j as h,a as t}from"./jsx-runtime-9ab0162b.js";import{c as a}from"./index-ed86a6de.js";import{p as y}from"./index-50ee27ec.js";import"./index-6fc3e33f.js";import"./iframe-aff5c971.js";function r({className:e,rows:n,cols:o,showTitleShimmer:i=!0,shimmerObjectClass:s,shimmerTitleClass:l,...c}){return console.log(e,n,o,i,s,l),h("div",{className:a("h-max p-8 bg-white rounded flex flex-col gap-6 ring-1 ring-[#E5EAF5]",e),...c,children:[i&&t("div",{className:a("h-8 bg-[#ECEFF5] animate-pulse rounded",l)}),new Array(n).fill(0).map((v,d)=>{var p;return t("div",{className:"flex gap-6",children:(p=new Array(o))==null?void 0:p.fill(0).map((w,u)=>t("div",{className:a("h-8 bg-[#E5EAF5] animate-pulse rounded w-full ring-1 ring-[#E5EAF5]",s)},`c-${u}`))},`r-${d}`)})]})}m(r,"Shimmer");r.defaultProps={rows:10,cols:4};r.propTypes={className:y.string};try{r.displayName="Shimmer",r.__docgenInfo={description:"",displayName:"Shimmer",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},rows:{defaultValue:{value:"10"},description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:{value:"4"},description:"",name:"cols",required:!1,type:{name:"number"}},showTitleShimmer:{defaultValue:{value:"true"},description:"",name:"showTitleShimmer",required:!1,type:{name:"boolean"}},shimmerObjectClass:{defaultValue:null,description:"",name:"shimmerObjectClass",required:!0,type:{name:"string"}},shimmerTitleClass:{defaultValue:null,description:"",name:"shimmerTitleClass",required:!0,type:{name:"string"}}}}}catch{}const T={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Shimmer from "./Shimmer";

export default {
  title: "Component/Shimmer",
  component: Shimmer,
} as ComponentMeta<typeof Shimmer>;

const Template: ComponentStory<typeof Shimmer> = (args) => (
  <Shimmer {...args} />
);

export const ShimmerPreview = Template.bind({});
ShimmerPreview.args = {};
`,locationsMap:{"shimmer-preview":{startLoc:{col:49,line:10},endLoc:{col:1,line:12},startBody:{col:49,line:10},endBody:{col:1,line:12}}}}},title:"Component/Shimmer",component:r},g=m(e=>t(r,{...e}),"Template"),S=g.bind({});S.args={};const q=["ShimmerPreview"];export{S as ShimmerPreview,q as __namedExportsOrder,T as default};
//# sourceMappingURL=Shimmer.stories-d9ace123.js.map
