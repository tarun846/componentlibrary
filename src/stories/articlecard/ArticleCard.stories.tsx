import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticleCard from "./ArticleCard";

export default {
  title: "atom/ArticleCard",
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

export const ArticleCardPreview = Template.bind({});
ArticleCardPreview.args = {
  title: "How to debounce and throttle in React without losing your mind",
  topic: "developerway",
  name: "NADIA MAKAREVICH",
  date: "05",
  monthyear: "Oct 2022",
  src: "https://picsum.photos/500",
  href: "/",
};
