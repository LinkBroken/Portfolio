import Image, { StaticImageData } from "next/image";
import React from "react";

import styles from "./about-teaser.module.css";
interface AboutTeaserProps {
  image: string | StaticImageData;
  description: string;
}

const AboutTeaser = ({ image, description }: AboutTeaserProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt="About me"
        width={500}
        height={500}
        className={styles.image}
        data-aos="zoom-in-right"
      />
      <p className={styles.description} data-aos="zoom-in-left">
        {description}
      </p>
    </div>
  );
};

export default AboutTeaser;
