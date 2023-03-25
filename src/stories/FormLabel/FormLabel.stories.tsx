import React from "react";
import FormLabel from "./FormLabel";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "atom/FormLabel",
  component: FormLabel,
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => (
  <div className="w-20">
    <FormLabel {...args}>Label</FormLabel>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const WithTooptip = Template.bind({});
WithTooptip.args = {
  required: true,
  tooltip: "This info is about something",
};
