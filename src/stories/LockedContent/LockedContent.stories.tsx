import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LockedContent from "./LockedContent";
import kailash from "../assets/kailash_hospital.svg";

export default {
  title: "molecule/LockedContent",
  component: LockedContent,
} as ComponentMeta<typeof LockedContent>;

const Template: ComponentStory<typeof LockedContent> = (args) => (
  <LockedContent {...args}></LockedContent>
);

export const Locked = Template.bind({});
Locked.args = {
  className: "",
  hospitalImageURL: kailash,
  title: "junior frontend developer",
  subtitle: ["cassp labs", "Full-time"],
  time: {
    start_date: "Jan 2022",
    end_date: " feb 2023 ",
    experience: "3 yr 10 mos",
  },
  location: "sunursahi, puri, Odisha",
  locked: true,
  education: false,
};

export const Unlocked = Template.bind({});
Unlocked.args = {
  className:
    "https://media.licdn.com/dms/image/C4E03AQGZO7kE7ikDeA/profile-displayphoto-shrink_800_800/0/1639623625443?e=2147483647&v=beta&t=IBzUFosjt97KTpyC-jjKoWI3Ek3ibNmg9yBPmVl8j3c",
  hospitalImageURL:
    "https://media.licdn.com/dms/image/C4E03AQGZO7kE7ikDeA/profile-displayphoto-shrink_800_800/0/1639623625443?e=2147483647&v=beta&t=IBzUFosjt97KTpyC-jjKoWI3Ek3ibNmg9yBPmVl8j3c",
  title: "junior frontend developer",
  subtitle: ["cassp labs", "Full-time"],
  time: {
    start_date: "Jan 2022",
    end_date: " feb 2023 ",
    experience: "3 yr 10 mos",
  },
  location: "sunursahi, puri, Odisha",
  locked: false,
  education: false,
};
