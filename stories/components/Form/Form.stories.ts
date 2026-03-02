import type { Meta, StoryObj } from "@storybook/react";

import Form from "@/app/components/Form/Form";

const meta = {
  title: "Components/Form",

  component: Form,
  parameters: {
    layout: "top",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    introText: "Text",
  },
};

export const Cropped: Story = {
  args: {
    introText: "Text",
  },
};
