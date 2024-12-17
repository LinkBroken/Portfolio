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
  id?: string;
}

export default function ContentBlock({
  variant,
  skills,
  information,
  id,
}: ContentBlockProps) {
  return (
    <section
      id={id}
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
              data-aos="fade-up"
              data-aos-delay="900"
            />
            <p
              className={styles.description}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {detail.description}
            </p>
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
