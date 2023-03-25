var a=Object.defineProperty;var r=(n,t)=>a(n,"name",{value:t,configurable:!0});import{j as s,a as e}from"./jsx-runtime-9ab0162b.js";import{p as l}from"./index-50ee27ec.js";import"./index-6fc3e33f.js";import"./iframe-aff5c971.js";function o({icon:n,className:t,...i}){switch(console.log(n),n){case"tick":return e("svg",{width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,...i,children:e("path",{d:"m16.875 5.625-8.75 8.75L3.75 10",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})});case"hamburger":return s("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,...i,children:[e("rect",{width:"24",height:"2"}),e("rect",{y:"10",width:"24",height:"2"}),e("rect",{y:"20",width:"24",height:"2"})]});default:return null}}r(o,"Icon");o.propTypes={icon:l.string.isRequired};o.defaultProps={};try{o.displayName="Icon",o.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"hamburger"'},{value:'"tick"'}]}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}}}}}catch{}const k={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "atom/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const TickIcon = Template.bind({});
TickIcon.args = {
  icon: "tick",
};

export const TickIconGreen = Template.bind({});
TickIconGreen.args = {
  icon: "tick",
  className: "text-theme-green-500",
};

export const HamburgerIcon = Template.bind({});
HamburgerIcon.args = {
  icon: "hamburger",
};
`,locationsMap:{"tick-icon":{startLoc:{col:46,line:10},endLoc:{col:74,line:10},startBody:{col:46,line:10},endBody:{col:74,line:10}},"tick-icon-green":{startLoc:{col:46,line:10},endLoc:{col:74,line:10},startBody:{col:46,line:10},endBody:{col:74,line:10}},"hamburger-icon":{startLoc:{col:46,line:10},endLoc:{col:74,line:10},startBody:{col:46,line:10},endBody:{col:74,line:10}}}}},title:"atom/Icon",component:o},c=r(n=>e(o,{...n}),"Template"),m=c.bind({});m.args={icon:"tick"};const p=c.bind({});p.args={icon:"tick",className:"text-theme-green-500"};const d=c.bind({});d.args={icon:"hamburger"};const f=["TickIcon","TickIconGreen","HamburgerIcon"];export{d as HamburgerIcon,m as TickIcon,p as TickIconGreen,f as __namedExportsOrder,k as default};
//# sourceMappingURL=Icon.stories-6dcf38d8.js.map
