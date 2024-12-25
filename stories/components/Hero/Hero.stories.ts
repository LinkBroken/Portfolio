import type { Meta, StoryObj } from "@storybook/react";

import Hero from "@/app/components/Hero/Hero";

import user from "@/assets/userImage.png";
import { links } from "@/app/data/pageProps";
const meta = {
  title: "Components/Hero",

  component: Hero,
  parameters: {
    layout: "top",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;


export const HeroFull: Story = {
  args: {
    greeting: "Hi, I am",
    image: user.src,
    jobTitle: "Front-end Developer",
    socialLinks: links,
    name: "Omar Damour",
    imageProp: "Text",
  },
};
