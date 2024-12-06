import type { Meta, StoryObj } from "@storybook/react";

import Form, { field } from "@/app/components/Form/Form";

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

export const fullLabel = [
  { type: "text", name: "name", border: "full" },
  { type: "number", name: "age", border: "full" },
  { type: "text", name: "name", border: "full" },
] as field[];

export const croppedLabel = [
  {
    type: "text",
    name: "Name",
    border: "cropped",
    required: true,
  },
  {
    type: "number",
    name: "Age",
    border: "cropped",
  },
  {
    type: "email",
    name: "Email",
    border: "cropped",
  },
] as field[];

export const Full: Story = {
  args: {
    fields: [...fullLabel],
    introText: "Text",
  },
};

export const Cropped: Story = {
  args: {
    fields: [...croppedLabel],
    introText: "Text",
  },
};
