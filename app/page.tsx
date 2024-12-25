"use client";
import { links } from "@/stories/components/Hero/Hero.stories";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/globals.css";
import user from "@/assets/userImage.png";
import logo from "@/assets/logo.svg";
import aboutTeaserImage from "@/assets/about-image.jpg";

import { navLinks } from "@/stories/components/Navbar/Navbar.stories";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/TItle";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import { skills } from "@/stories/components/ContentBlock/ContentBlock.stories";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Form from "./components/Form/Form";
import { croppedLabel } from "@/stories/components/Form/Form.stories";
import AboutTeaser from "./components/AboutTeaser/AboutTeaser";
import { Bounce, ToastContainer } from "react-toastify";

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
  title: "Web Dev Qoute",
  description:
    "Build the web, one line of code at a time. ",
};

const aboutTeaserProps = {
  image: aboutTeaserImage,
  description:
    "I am an aspiring Front-End Developer with a strong passion for creating user-friendly and engaging web experiences. I possess a solid foundation in core web technologies such as HTML, CSS, and JavaScript, and I am eager to learn and grow within a dynamic team environment. I am a highly motivated and quick learner, always seeking new challenges and opportunities to expand my skills and contribute to innovative projects.",
};

export default function Home() {
  useEffect(() => {
    Aos.init({
      offset: 100,
    });
  }, []);

  return (
    <div id="app" className="landing">
       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar {...navBarProps} /> <Hero {...heroProps} />
      <Footer variant="details" {...footerProps} />
      <div data-aos="fade-up" data-aos-duration="900">
        <Title
          containerPadding
          titlePadding
          size="large"
          label="About me"
          align="center"
          border
        />
        <AboutTeaser {...aboutTeaserProps} />

        <Title
          containerPadding
          titlePadding
          size="large"
          label="Skills"
          align="center"
          border
        />
        <ContentBlock id="skills" variant="skills" skills={skills} />
      </div>
      <div data-aos="fade-down" data-aos-duration="900">
        <Form fields={[...croppedLabel]} introText="Form" />
      </div>
      <Footer
        variant="footer"
        copyright="@2020 Tomasz Gajda All Rights Reserved."
        socialLinks={links}
        link={{ href: "#app", label: "Back to Top" }}
      />
    </div>
  );
}
