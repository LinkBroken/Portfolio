import ContentBlock from "@/app/components/ContentBlock/ContentBlock";
import { skills } from "@/app/data/pageProps";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/ContentBlock",
  component: ContentBlock,
  tags: ["autodocs"],
} satisfies Meta<typeof ContentBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Skills: Story = {
  args: {
    variant: "skills",
    skills: skills,
  },
};
