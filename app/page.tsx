"use client";
import { links } from "@/stories/components/Hero/Hero.stories";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/globals.css";
import user from "@/assets/userImage.png";
import logo from "@/assets/logo.svg";
import { navLinks } from "@/stories/components/Navbar/Navbar.stories";
import Footer from "./components/Footer/Footer";

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
  variant: "details",
  title: "IT BERRIES",
  description:
    "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. ",
};

export default async function Home() {
  return (
    <div className="landing">
      <Navbar {...navBarProps} /> <Hero {...heroProps} />
      <Footer {...footerProps} />
    </div>
  );
}
