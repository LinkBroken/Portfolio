"use client";
import { links } from "@/stories/components/Hero/Hero.stories";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/globals.css";
import user from "@/assets/userImage.png";
import logo from "@/assets/logo.svg";
import { navLinks } from "@/stories/components/Navbar/Navbar.stories";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/TItle";
import { motion, useScroll, useSpring } from "framer-motion";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import {
  informationLinks,
  skills,
} from "@/stories/components/ContentBlock/ContentBlock.stories";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
const navBarProps = {
  links: navLinks,
  logo: logo,
  logoAlt: "Alt text",
};
const heroProps = {
  greeting: "Hi, I am",
  image: user.src,
  jobTitle: "Front-end Developer",
  socialLinks: links,
  name: "Omar Damour",
  imageProp: "Text",
};

const footerProps = {
  title: "IT BERRIES",
  description:
    "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. ",
};

export default function Home() {

  useEffect(() => {
    // here you can add your aos options
    Aos.init({
      offset: 100,
    });
  }, []);
  
  return (
    <div className="landing">
      <Navbar {...navBarProps} /> <Hero {...heroProps} />
      <Footer variant="details" {...footerProps} />
      <div data-aos="fade-up" data-aos-duration="3000"
      >
        <Title
          containerPadding
          titlePadding
          size="large"
          label="About me"
          align="center"
          border
        />
        <ContentBlock variant="about" information={informationLinks} />
        <ContentBlock variant="skills" skills={skills} />
      </div>
    </div>
  );
}
