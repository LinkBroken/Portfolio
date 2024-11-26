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

export const navLinks = [
  { href: "#", label: "About me" },
  { href: "#", label: "Skills" },
  { href: "#", label: "Portfolio" },
];

export const Full: Story = {
  args: {
    links: navLinks,
    logo: logo,
    logoAlt: "Alt text",
  },
};

export const withLinksOnly: Story = {
  args: {
    links: navLinks,
    linksOnly: true,
  },
};

export const withLogoOnly: Story = {
  args: {
    logo: logo,
    logoAlt: "Logo Alt",
  },
};
