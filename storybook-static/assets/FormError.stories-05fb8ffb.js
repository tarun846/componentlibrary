var l=Object.defineProperty;var n=(o,r)=>l(o,"name",{value:r,configurable:!0});import{a as s}from"./jsx-runtime-9ab0162b.js";import{c as i}from"./index-ed86a6de.js";import{p as t}from"./index-50ee27ec.js";import"./index-6fc3e33f.js";import"./iframe-aff5c971.js";function e({className:o,meta:r,...a}){return console.log(r),r!=null&&r.touched&&(r!=null&&r.error)?s("p",{className:i(`mt-1 text-[11px] text-[#db4d4d] font-regular ${a.name}-ErrorMessage`,o),...a,children:r==null?void 0:r.error}):null}n(e,"FormError");e.propTypes={className:t.string,meta:t.shape({touched:t.bool.isRequired,error:t.string})};e.defaultProps={className:"",error:null};try{e.displayName="FormError",e.__docgenInfo={description:"",displayName:"FormError",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},meta:{defaultValue:null,description:"",name:"meta",required:!0,type:{name:"Imeta"}}}}}catch{}const g={parameters:{storySource:{source:`import React from "react";
import FormError from "./FormError";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "atom/FormError",
  component: FormError,
} as ComponentMeta<typeof FormError>;

const Template: ComponentStory<typeof FormError> = (args) => (
  <FormError {...args} />
);

export const Default = Template.bind({});
Default.args = {
  meta: { touched: true, error: "Email id is invalid" },
};
`,locationsMap:{default:{startLoc:{col:51,line:9},endLoc:{col:1,line:11},startBody:{col:51,line:9},endBody:{col:1,line:11}}}}},title:"atom/FormError",component:e},m=n(o=>s(e,{...o}),"Template"),p=m.bind({});p.args={meta:{touched:!0,error:"Email id is invalid"}};const F=["Default"];export{p as Default,F as __namedExportsOrder,g as default};
//# sourceMappingURL=FormError.stories-05fb8ffb.js.map
