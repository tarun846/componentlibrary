import React from "react";
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
