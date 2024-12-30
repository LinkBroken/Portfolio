import Image1 from "@/assets/Work/site-1.png";
import Image2 from "@/assets/Work/site-2.png";
import Image3 from "@/assets/Work/site-3.png";
import Image4 from "@/assets/Work/site-4.png";
import Image5 from "@/assets/Work/site-5.png";

export const Image = {
  src: Image1,
  alt: "Work",
};
export interface Project {
  link: string;
  image?: string;
  title?: string;
  description?: string;
}

export const myProjects: Project[] = [
  {
    image: Image1.src,
    link: "https://viu.ch",
    description: "We help our clients to better engage in a digital world.",
    title: "viu AG",
  },
  {
    image: Image2.src,
    link: "https://omni-food-app.vercel.app/",
    description: "Food Application",
    title: "Omni Food",
  },
  {
    image: Image3.src,
    link: "https://www.ag.ch/",
    description:
      "From the central point of contact, to job offers, legal bases, to portraits of how the canton works and its diversity, you will find the most important information here.",
    title: "KTAG Website",
  },
  {
    image: Image4.src,
    link: "https://mahabnsahl.com/",
    description: "A portfolio for a graphic designer",
    title: "Maha bin Sahl",
  },
  {
    image: Image5.src,
    link: "https://d-yoga.vercel.app/",
    description: "D-yoga is an application for yoga poses",
    title: "D-yoga",
  },
];
