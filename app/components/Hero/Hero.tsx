/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./hero.module.css";
import Link from "next/link";

export type link = {
  element: React.ReactNode;
  href: string;
};
interface HeroProps {
  greeting?: string;
  image?: string;
  imageProp?: string;
  jobTitle?: string;
  socialLinks?: link[];
  name?: string;
}
export default function Hero({
  greeting,
  image,
  imageProp,
  jobTitle,
  name,
  socialLinks,
}: HeroProps) {
  return (
    <section className={styles.container}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={imageProp ?? ""} />
        </div>
      )}
      {(greeting || name || socialLinks || jobTitle) && (
        <div className={styles.details}>
          {greeting && (
            <p
              className={styles.greeting}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {greeting}
            </p>
          )}
          {name && (
            <h1 className={styles.name} data-aos="fade-up" data-aos-delay="600">
              {name}
            </h1>
          )}
          {jobTitle && (
            <h3 className={styles.job} data-aos="fade-up" data-aos-delay="900">
              {jobTitle}
            </h3>
          )}
          <ul className={styles.links}>
            {socialLinks?.map((link) => (
              <Link
                key={link.href}
                target="_blank"
                href={link.href}
                dangerouslySetInnerHTML={{ __html: link.element! }}
                className={styles.link}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
