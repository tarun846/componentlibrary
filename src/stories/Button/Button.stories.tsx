import React from "react";
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
