import ContentBlock from "@/app/components/ContentBlock/ContentBlock";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/ContentBlock",
  component: ContentBlock,
  tags: ["autodocs"],
} satisfies Meta<typeof ContentBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

const informationLinks = [
  {
    title: "DESIGN",
    description:
      "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
  },
  {
    title: "DEVELOPMENT",
    description:
      "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
  },
  {
    title: "MAINTENANCE",
    description:
      "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
  },
];

export const About: Story = {
  args: {
    variant: "about",
    information: informationLinks,
  },
};

const skills = [
  {
    name: "JAVASCRIPT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "HTML5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OHaxH3qOclxT0KxO8uuAHtoXpFX5Xr2nXeluEaGdc5LCf3XscrKcmAM0M-wgqQ4k3tI&usqp=CAU",
  },
  {
    name: "CSS3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/2048px-Official_CSS_Logo.svg.png",
  },
  {
    name: "SASS",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-sass-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226054.png?f=webp&w=256",
  },
  {
    name: "Nextjs",
    image: "https://theme-next.js.org/images/logo.svg",
  },
  {
    name: "Reactjs",
    image:
      "https://seeklogo.com/images/R/react-logo-65B7CD91B5-seeklogo.com.png",
  },
  {
    name: "Git",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256",
  },
  {
    name: "Typescript",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp&w=256",
  },
];

export const Skills: Story = {
  args: {
    variant: "skills",
    skills: skills,
  },
};
