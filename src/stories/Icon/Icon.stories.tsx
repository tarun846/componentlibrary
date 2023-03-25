import React from "react";
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
