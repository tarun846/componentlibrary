import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ApplicantStatus from "./ApplicantStatus";

export default {
  title: "molecule/Status",
  component: ApplicantStatus,
} as ComponentMeta<typeof ApplicantStatus>;

let Template: ComponentStory<typeof ApplicantStatus> = (args) => (
  <ApplicantStatus {...args}>Shortlisted</ApplicantStatus>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "Active",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "Paused",
};

export const Inactive = Template.bind({});
Inactive.args = {
  type: "Inactive",
};
