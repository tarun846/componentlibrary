import React from "react";
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
