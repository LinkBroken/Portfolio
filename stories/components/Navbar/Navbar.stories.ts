import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "@/app/components/Navbar/Navbar";
import logo from "@/assets/logo.svg";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "top",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Links = [
  { href: "#", label: "About me" },
  { href: "#", label: "Skills" },
  { href: "#", label: "Portfolio" },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Full: Story = {
  args: {
    links: Links,
    logo: logo,
    logoAlt: "Alt text",
  },
};

export const withLinksOnly: Story = {
  args: {
    links: Links,
    linksOnly: true,
  },
};

export const withLogoOnly: Story = {
  args: {
    logo: logo,
    logoAlt: "Logo Alt",
  },
};
