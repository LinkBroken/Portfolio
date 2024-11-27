import type { Meta, StoryObj } from "@storybook/react";

import Footer from "@/app/components/Footer/Footer";
import logo from "@/assets/logo-2.svg";
import { links } from "../Hero/Hero.stories";

const meta = {
  title: "Components/Footer",

  component: Footer,
  parameters: {
    layout: "top",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Details: Story = {
  args: {
    variant: "details",
    title: "IT BERRIES",
    description:
      "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. ",
  },
};

export const footer: Story = {
  args: {
    variant: "footer",
    copyright: "@2020 Tomasz Gajda All Rights Reserved.",
    socialLinks: links,
    link: { href: "#", label: "Back to Top" },
  },
};
