var r=Object.defineProperty;var a=(o,l)=>r(o,"name",{value:l,configurable:!0});import{a as e}from"./jsx-runtime-9ab0162b.js";import{B as t}from"./Button-f0d3a7d8.js";import"./index-6fc3e33f.js";import"./iframe-aff5c971.js";import"./index-50ee27ec.js";import"./index-ed86a6de.js";const W={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "atom/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args} className="flex-1 text-center" />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Button",
};

export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
  type: "secondary",
  label: "Link",
  href: "//www.google.com",
};

export const FormButton = Template.bind({});
FormButton.args = {
  type: "secondary",
  label: "Submit",
  submit: true,
};

export const Plain = Template.bind({});
Plain.args = {
  type: "plain",
  label: "Button",
};

export const PrimaryWarning = Template.bind({});
PrimaryWarning.args = {
  type: "primary",
  label: "Button",
  warning: true,
};

export const SecondaryWarning = Template.bind({});
SecondaryWarning.args = {
  type: "secondary",
  label: "Button",
  warning: true,
};

export const PlainWarning = Template.bind({});
PlainWarning.args = {
  type: "plain",
  label: "Button",
  warning: true,
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  type: "primary",
  label: "Button",
  warning: false,
  loading: true,
};

export const SecondarySmallLoading = Template.bind({});
SecondarySmallLoading.args = {
  type: "secondary",
  label: "Button",
  warning: false,
  loading: true,
  size: "small",
};

export const PlainSmallLoading = Template.bind({});
PlainSmallLoading.args = {
  type: "plain",
  label: "Button",
  warning: false,
  loading: true,
  size: "small",
};

export const SecondaryRounded = Template.bind({});
SecondaryRounded.args = {
  type: "secondary",
  label: "Button",
  warning: false,
  loading: false,
  size: "small",
  rounded: true,
};

const Smiley = (props : any ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const SocialIconPrimaryRound = Template.bind({});
SocialIconPrimaryRound.args = {
  type: "primary",
  size: "medium",
  rounded: true,
  icon: <Smiley />,
};
`,locationsMap:{primary:{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},secondary:{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"secondary-link":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"form-button":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},plain:{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"primary-warning":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"secondary-warning":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"plain-warning":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"primary-loading":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"secondary-small-loading":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"plain-small-loading":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"secondary-rounded":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}},"social-icon-primary-round":{startLoc:{col:48,line:10},endLoc:{col:1,line:14},startBody:{col:48,line:10},endBody:{col:1,line:14}}}}},title:"atom/Button",component:t},n=a(o=>e("div",{children:e(t,{...o,className:"flex-1 text-center"})}),"Template"),i=n.bind({});i.args={type:"primary",label:"Button"};const c=n.bind({});c.args={type:"secondary",label:"Button"};const d=n.bind({});d.args={type:"secondary",label:"Link",href:"//www.google.com"};const s=n.bind({});s.args={type:"secondary",label:"Submit",submit:!0};const y=n.bind({});y.args={type:"plain",label:"Button"};const m=n.bind({});m.args={type:"primary",label:"Button",warning:!0};const p=n.bind({});p.args={type:"secondary",label:"Button",warning:!0};const g=n.bind({});g.args={type:"plain",label:"Button",warning:!0};const u=n.bind({});u.args={type:"primary",label:"Button",warning:!1,loading:!0};const B=n.bind({});B.args={type:"secondary",label:"Button",warning:!1,loading:!0,size:"small"};const b=n.bind({});b.args={type:"plain",label:"Button",warning:!1,loading:!0,size:"small"};const L=n.bind({});L.args={type:"secondary",label:"Button",warning:!1,loading:!1,size:"small",rounded:!0};const S=a(o=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",...o,children:e("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0z",clipRule:"evenodd"})}),"Smiley"),w=n.bind({});w.args={type:"primary",size:"medium",rounded:!0,icon:e(S,{})};const h=["Primary","Secondary","SecondaryLink","FormButton","Plain","PrimaryWarning","SecondaryWarning","PlainWarning","PrimaryLoading","SecondarySmallLoading","PlainSmallLoading","SecondaryRounded","SocialIconPrimaryRound"];export{s as FormButton,y as Plain,b as PlainSmallLoading,g as PlainWarning,i as Primary,u as PrimaryLoading,m as PrimaryWarning,c as Secondary,d as SecondaryLink,L as SecondaryRounded,B as SecondarySmallLoading,p as SecondaryWarning,w as SocialIconPrimaryRound,h as __namedExportsOrder,W as default};
//# sourceMappingURL=Button.stories-7dbd1c5d.js.map
