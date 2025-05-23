/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "./portfolio.module.css";
import { Project } from "@/app/data/work";

export default function WorkItem({ project }: { project: Project }) {
  return (
    <Link href={project.link} className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}
