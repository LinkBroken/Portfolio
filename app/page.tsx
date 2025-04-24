"use client";
import { useEffect } from "react";

import "./styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/TItle";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import Form from "./components/Form/Form";
import AboutTeaser from "./components/AboutTeaser/AboutTeaser";

import { Bounce, ToastContainer } from "react-toastify";
import {
  aboutTeaserProps,
  footerProps,
  heroProps,
  links,
  navBarProps,
  skills,
} from "./data/pageProps";
import Portfolio from "./components/Portfolio/Portfolio";

export default function Home() {
  useEffect(() => {
    Aos.init({
      // offset: 100,
    });
  }, []);

  const yearNow = new Date().getFullYear();

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
        transition={Bounce}
      />
      <div data-aos="zoom-out" data-aos-duration="900">
        <Navbar {...navBarProps} />
      </div>
      <div data-aos="zoom-out" data-aos-duration="1800">
        <Hero {...heroProps} />
      </div>
      <Footer variant="details" {...footerProps} />
      <div data-aos="zoom-in" data-aos-duration="1100">
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
      <Portfolio />
      <div data-aos="fade-out" data-aos-duration="200">
        <Form introText="Contact" />
      </div>
      <Footer
        variant="footer"
        copyright={`${yearNow} Omer Mohamed All Rights Reserved.`}
        socialLinks={links}
        link={{ href: "#app", label: "Back to Top" }}
      />
    </div>
  );
}
