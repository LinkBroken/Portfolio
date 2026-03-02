import Image1 from "@/assets/Work/site-1.png";
import Image3 from "@/assets/Work/site-3.png";
import Image4 from "@/assets/Work/site-4.png";
import Image6 from "@/assets/Work/zurich.png";
import Image7 from "@/assets/Work/pax.png";
import Image8 from "@/assets/Work/migrosbank.png";
import Image9 from "@/assets/Work/wwz.png";

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
    image: Image6.src,
    link: "https://zurich.ch",
    description:
      "Leading insurance provider offering comprehensive coverage solutions for car, life, contents, and more.",
    title: "Zurich Insurance",
  },
  {
    image: Image7.src,
    link: "https://pax.ch",
    description:
      "Swiss life insurance company specializing in private and occupational pension solutions.",
    title: "Pax",
  },
  {
    image: Image8.src,
    link: "https://migrosbank.ch",
    description:
      "Swiss bank offering digital banking solutions, savings accounts, and investment services.",
    title: "Migros Bank",
  },
  {
    image: Image9.src,
    link: "https://wwz.ch",
    description:
      "Utility provider delivering energy, water, and telecommunications services.",
    title: "WWZ",
  },
  {
    image: Image1.src,
    link: "https://viu.ch",
    description: "We help our clients to better engage in a digital world.",
    title: "viu AG",
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
];
