import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "@/app/components/Navbar/Navbar";
import logo from "@/assets/logo.svg";
import { navLinks } from "@/app/data/pageProps";

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

export const Full: Story = {
  args: {
    links: navLinks,
    logo: logo,
    logoAlt: "Alt text",
  },
};

export const WithLinksOnly: Story = {
  args: {
    links: navLinks,
    linksOnly: true,
  },
};

export const WithLogoOnly: Story = {
  args: {
    logo: logo,
    logoAlt: "Logo Alt",
  },
};
