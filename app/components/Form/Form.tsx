import classNames from "classnames";

import styles from "./form.module.css";
import Title from "../Title/TItle";

export type field = {
  type: "text" | "email" | "number";
  name: string;
  required?: boolean;
  border: "cropped" | "full";
};
interface FormProps {
  introText?: string;
  fields?: field[];
}
export default function Form({ fields, introText }: FormProps) {
  if (fields?.length == 0) return null;

  return (
    fields && (
      <section className={styles.section}>
        {introText && (
          <Title
            titlePadding
            size="large"
            border
            align="center"
            label={introText}
            containerPadding
          />
        )}
        <form className={styles.form}>
          {fields.map((field) => (
            <input
              className={classNames(styles.input, [
                styles[`input--${field.border}`],
              ])}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.name}
            />
          ))}
          <button className={styles.button}>Submit</button>
        </form>
        ;
      </section>
    )
  );
}
