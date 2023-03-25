import React from "react";

import { DragnDrop } from "./DragnDrop";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "molecule/DragnDrop",
  component: DragnDrop,
} as ComponentMeta<typeof DragnDrop>;

const Template: ComponentStory<typeof DragnDrop> = (args) => (
  <DragnDrop {...args} />
);

export const ResumeUpload = Template.bind({});

ResumeUpload.args = {
  className: "",
  fileSelected: false,
};
