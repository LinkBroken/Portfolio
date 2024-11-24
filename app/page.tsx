"use client";
import { links } from "@/stories/components/Hero/Hero.stories";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/globals.css";
import user from "@/assets/userImage.png";
import logo from "@/assets/logo.svg";
import { navLinks } from "@/stories/components/Navbar/Navbar.stories";
import { Fragment } from "react";

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
export default async function Home() {
  return (
    <div className="landing">
      <Navbar {...navBarProps} /> <Hero {...heroProps} />
    </div>
  );
}
