import classNames from "classnames";
import styles from "./title.module.css";

interface TitleProps {
  label: string;
  border: boolean;
  size: "small" | "medium" | "large";
  align: "left" | "right" | "center";
}

export default function Title({ align, label, size, border }: TitleProps) {
  return (
    <div className={styles.titleContainer}>
      <h1
        className={classNames(styles.title, {
          [styles[`title--${size}`]]: size,
          [styles[`title--${align}`]]: align,
          [styles[`title--${border ? "border" : "borderless "}`]]: border,
        })}
      >
        {label}
      </h1>
    </div>
  );
}
