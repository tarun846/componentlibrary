import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CarouselCard } from "./CarouselCard";
import Vivek from "../assets/Vivek Pathak.png";

export default {
  title: "molecule/CarouselCard",
  component: CarouselCard,
} as ComponentMeta<typeof CarouselCard>;

const Template: ComponentStory<typeof CarouselCard> = (args) => (
  <CarouselCard {...args} />
);

export const CardDetails = Template.bind({});
CardDetails.args = {
  classnames: "",
  content:
    "NurceIndia  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  imageSrc: Vivek,
  name: "Vivek Pathak",
  place: "Delhi",
};
