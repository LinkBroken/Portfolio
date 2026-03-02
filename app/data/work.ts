import Image1 from "@/assets/Work/site-1.png";
import Image3 from "@/assets/Work/site-3.png";
import Image4 from "@/assets/Work/site-4.png";
import Image6 from "@/assets/Work/zurich.png";
import Image7 from "@/assets/Work/pax.png";
import Image8 from "@/assets/Work/migrosbank.png";
import Image9 from "@/assets/Work/wwz.png";
import MedLinkerImage from "@/assets/Work/medlinker-sa.png";
import AiTutorImage from "@/assets/Work/Ai-learning-tutor.png";
import MedicalAppPart1Image from "@/assets/Work/medical-consultations-app-part1.png";
import MedicalAppPart2Image from "@/assets/Work/medical-consulations-app-part2.png";

export const Image = {
  src: Image1,
  alt: "Work",
};
export interface Project {
  link: string;
  image?: string;
  title?: string;
  description?: string;
  category: "web" | "mobile";
}

export const myProjects: Project[] = [
  {
    image: MedLinkerImage.src,
    link: "https://www.medlinker-sa.com/",
    description: "A comprehensive SaaS platform for medical institutions, streamlining operations and healthcare management.",
    title: "MedLinker SaaS",
    category: "web",
  },
  {
    image: Image6.src,
    link: "https://zurich.ch",
    description:
      "Leading insurance provider offering comprehensive coverage solutions for car, life, contents, and more.",
    title: "Zurich Insurance",
    category: "web",
  },
  {
    image: Image7.src,
    link: "https://pax.ch",
    description:
      "Swiss life insurance company specializing in private and occupational pension solutions.",
    title: "Pax",
    category: "web",
  },
  {
    image: Image8.src,
    link: "https://migrosbank.ch",
    description:
      "Swiss bank offering digital banking solutions, savings accounts, and investment services.",
    title: "Migros Bank",
    category: "web",
  },
  {
    image: Image9.src,
    link: "https://wwz.ch",
    description:
      "Utility provider delivering energy, water, and telecommunications services.",
    title: "WWZ",
    category: "web",
  },
  {
    image: Image1.src,
    link: "https://viu.ch",
    description: "We help our clients to better engage in a digital world.",
    title: "viu AG",
    category: "web",
  },
  {
    image: Image3.src,
    link: "https://www.ag.ch/",
    description:
      "From the central point of contact, to job offers, legal bases, to portraits of how the canton works and its diversity, you will find the most important information here.",
    title: "KTAG Website",
    category: "web",
  },
  {
    image: Image4.src,
    link: "https://mahabnsahl.com/",
    description: "A portfolio for a graphic designer",
    title: "Maha bin Sahl",
    category: "web",
  },
  {
    image: AiTutorImage.src,
    link: "#",
    description: "An AI-powered learning tutor mobile application designed to provide personalized educational support.",
    title: "AI Learning Tutor",
    category: "mobile",
  },
  {
    image: MedicalAppPart1Image.src,
    link: "#",
    description: "A comprehensive medical consultations platform (Part 1) for seamless patient-doctor interactions.",
    title: "Medical Consultations App - Part 1",
    category: "mobile",
  },
  {
    image: MedicalAppPart2Image.src,
    link: "#",
    description: "The second phase of the medical consultations ecosystem, focusing on advanced features and user flow.",
    title: "Medical Consultations App - Part 2",
    category: "mobile",
  },
];
