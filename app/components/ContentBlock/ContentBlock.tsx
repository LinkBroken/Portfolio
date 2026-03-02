/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";

import styles from "./content-block.module.css";
import Title from "../Title/TItle";

type skill = {
  name: string;
  image: string;
};

interface ContentBlockProps {
  variant: "about" | "skills";
  skills?: skill[];
  id?: string;
}

export default function ContentBlock({
  variant,
  skills,
  id,
}: ContentBlockProps) {
  return (
    <section
      id={id}
      className={classNames(styles.container, styles[`container--${variant}`])}
    >
      {skills &&
        skills.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <Title
              containerPadding={false}
              titlePadding={false}
              align="center"
              border={false}
              size="small"
              label={skill.name}
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay="950"
            />
            <img
              data-aos="fade-up"
              className={styles.image}
              src={skill.image}
              alt={skill.name}
            />
          </div>
        ))}
    </section>
  );
}
