import Image, { StaticImageData } from "next/image";
import React from "react";

import styles from "./about-teaser.module.css";
interface AboutTeaserProps {
  image: string | StaticImageData;
  description: string;
  author?: string;
}

const AboutTeaser = ({ image, description, author }: AboutTeaserProps) => {
  return (
    <section id="about" className={styles.container}>
      <Image
        src={image}
        alt="About me"
        width={500}
        height={500}
        className={styles.image}
        data-aos="zoom-in-right"
        data-aos-duration="2500"
      />
      <p className={styles.description} data-aos="zoom-in-left">
        {description}
        <span className={styles.author}> {author}</span>
      </p>
    </section>
  );
};

export default AboutTeaser;
