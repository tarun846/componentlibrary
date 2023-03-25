var i=Object.defineProperty;var o=(e,r)=>i(e,"name",{value:r,configurable:!0});import{a as s}from"./jsx-runtime-9ab0162b.js";import{r as a}from"./index-6fc3e33f.js";import{p}from"./index-50ee27ec.js";import{c as m}from"./index-ed86a6de.js";import"./iframe-aff5c971.js";function t({className:e,children:r}){return s("div",{id:"parentDiv",className:m("h-4 bg-neutral-300 shadow-inner relative",e),children:s("div",{className:"bg-theme-green-500 shadow-inner h-4 absolute transition-width ease-in duration-500",style:{width:`${r>100?100:r}%`}})})}o(t,"ProgressTracker");t.propTypes={className:p.string};t.defaultProps={className:""};try{t.displayName="ProgressTracker",t.__docgenInfo={description:"",displayName:"ProgressTracker",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const P={parameters:{storySource:{source:`// Button.stories.js|jsx

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressTracker from "./ ProgressTracker";

export default {
  title: "Component/ProgressTracker",
  component: ProgressTracker,
} as ComponentMeta<typeof ProgressTracker>;

export const Primary: ComponentStory<typeof ProgressTracker> = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (percent >= 100) {
      clearTimeout(timer);
    }
  }, [percent]);
  const timer = setTimeout(() => {
    setPercent((p) => (p + 10 >= 100 ? 100 : p + 10));
  }, 1000);
  return <ProgressTracker>{percent}</ProgressTracker>;
};
`,locationsMap:{primary:{startLoc:{col:63,line:14},endLoc:{col:1,line:25},startBody:{col:63,line:14},endBody:{col:1,line:25}}}}},title:"Component/ProgressTracker",component:t},T=o(()=>{const[e,r]=a.useState(0);a.useEffect(()=>{e>=100&&clearTimeout(c)},[e]);const c=setTimeout(()=>{r(n=>n+10>=100?100:n+10)},1e3);return s(t,{children:e})},"Primary"),k=["Primary"];export{T as Primary,k as __namedExportsOrder,P as default};
//# sourceMappingURL=ProgressTracker.stories-901c6a52.js.map
