import Title from "@/app/components/Title/TItle";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "top",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    align: "center",
    label: "Skills",
    size: "large",
    border: true,
    titlePadding: true,
    containerPadding: true,
  },
};

export const Left: Story = {
  args: {
    align: "left",
    label: "About me",
    size: "medium",
    border: false,
    titlePadding: false,
    containerPadding: false,
  },
};

export const Right: Story = {
  args: {
    align: "right",
    label: "About me",
    size: "small",
    border: true,
    titlePadding: true,
    containerPadding: true,
  },
};
