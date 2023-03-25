// Button.stories.js|jsx

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressTracker from "./ ProgressTracker";

export default {
  title: "Component/ProgressTracker",
  component: ProgressTracker,
} as ComponentMeta<typeof ProgressTracker>;

export const Primary: ComponentStory<typeof ProgressTracker> = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (percent >= 100) {
      clearTimeout(timer);
    }
  }, [percent]);
  const timer = setTimeout(() => {
    setPercent((p) => (p + 10 >= 100 ? 100 : p + 10));
  }, 1000);
  return <ProgressTracker>{percent}</ProgressTracker>;
};
