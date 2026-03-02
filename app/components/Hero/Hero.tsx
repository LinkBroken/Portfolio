"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import Link from "next/link";
import gsap from "gsap";

interface SocialLink {
  href: string;
  element: string;
}

interface HeroProps {
  greeting?: string;
  image?: string;
  imageProp?: string;
  jobTitle?: string;
  name?: string;
  socialLinks?: SocialLink[];
}

export default function Hero({
  greeting,
  image,
  imageProp,
  jobTitle,
  name,
  socialLinks,
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Master timeline for coffee pouring metaphor
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // CONTAINER: Clip-path reveals like liquid filling
    tl.from(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      opacity: 0,
      duration: 1.4,
      ease: "power2.inOut",
    })
      // IMAGE: Settles like poured liquid finding level
      .from(
        imageRef.current,
        {
          y: -120,
          scaleY: 0.5,
          opacity: 0,
          duration: 0.95,
          ease: "power2.inOut",
        },
        "-=0.9"
      )
      // Subtle breathing glow after settle
      .to(
        imageRef.current,
        {
          filter: "drop-shadow(0 0 50px rgba(212, 165, 116, 0.3))",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        "-=0.3"
      )
      // TEXT: Pour in like viscous liquid droplets with stagger
      .from(
        detailsRef.current?.children ?? [],
        {
          y: -80,
          scaleY: 0.4,
          scaleX: 0.85,
          opacity: 0,
          filter: "blur(8px)",
          stagger: {
            amount: 0.35,
            ease: "power1.inOut",
          },
          duration: 0.85,
          ease: "power2.out",
        },
        "-=0.7"
      );

    // Add ripple animation to social links on hover
    const links = detailsRef.current?.querySelectorAll(`.${styles.link}`);
    links?.forEach((link: Element) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scaleY: 1.08,
          duration: 0.3,
          ease: "back.out",
          overwrite: "auto",
        });
        gsap.to(link, {
          scaleY: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
          delay: 0.1,
        });
      });
    });
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      {image && (
        <div className={styles.imageContainer}>
          <img ref={imageRef} src={image} alt={imageProp ?? ""} />
        </div>
      )}

      <div ref={detailsRef} className={styles.details}>
        {greeting && <p className={styles.greeting}>{greeting}</p>}
        {name && <h1 className={styles.name}>{name}</h1>}
        {jobTitle && <h3 className={styles.job}>{jobTitle}</h3>}
        <ul className={styles.links}>
          {socialLinks?.map((link) => (
            <Link
              key={link.href}
              target="_blank"
              href={link.href}
              dangerouslySetInnerHTML={{ __html: link.element }}
              className={styles.link}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}