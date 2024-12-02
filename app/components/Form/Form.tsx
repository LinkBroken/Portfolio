import classNames from "classnames";

import styles from "./form.module.css";

type field = {
  type: string;
  name: string;
  required?: boolean;
  border: "cropped" | "full" | "none";
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
        {introText && <p className={styles.intro}>{introText}</p>}
        <form className={styles.form}>
          {fields.map((field) => (
            <input
              className={classNames(styles.input, [
                styles[`input--${field.border}`],
              ])}
              name={field.name}
              type={field.type}
              required={field.required}
            />
          ))}
        </form>
        ;
      </section>
    )
  );
}
