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
    fields: [
      { type: "text", name: "name", border: "full" },
      { type: "number", name: "age", border: "full" },
      { type: "text", name: "name", border: "full" },
    ],
    introText: "Text",
  },
};

export const Cropped: Story = {
  args: {
    fields: [
      {
        type: "text",
        name: "name",
        border: "cropped",
        required: true,
      },
      {
        type: "number",
        name: "name",
        border: "cropped",
      },
      {
        type: "email",
        name: "name",
        border: "cropped",
      },
    ],
    introText: "Text",
  },
};
