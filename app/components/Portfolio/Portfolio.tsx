import React from "react";

import { myProjects } from "@/app/data/work";
import WorkItem from "./WorkItem";
import Title from "../Title/TItle";

import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <Title
        align="center"
        titlePadding
        size="large"
        label="Portfolio"
        border={false}
        color="white"
        containerPadding={false}
      />
      <div className={styles.container}>
        {myProjects?.map((project) => (
          <WorkItem project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
