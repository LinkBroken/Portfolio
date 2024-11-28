import classNames from "classnames";

import styles from "./content-block.module.css";
import Title from "../Title/TItle";

type skill = {
  name: string;
  image: string;
};

type info = {
  title: string;
  description: string;
};
interface ContentBlockProps {
  variant: "about" | "skills";
  information?: info[];
  skills?: skill[];
}

export default function ContentBlock({
  variant,
  skills,
  information,
}: ContentBlockProps) {
  return (
    <section
      className={classNames(styles.container, styles[`container--${variant}`])}
    >
      {information &&
        information?.map((detail) => (
          <div key={detail.title} className={styles.infoCard}>
            <Title
              label={detail.title}
              key={detail.description}
              border={false}
              align="left"
              size="medium"
              containerPadding={false}
              titlePadding={false}
            />
            <p className={styles.description}>{detail.description}</p>
          </div>
        ))}

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
            />
            <img className={styles.image} src={skill.image} alt={skill.name} />
          </div>
        ))}
    </section>
  );
}
