import classNames from "classnames";
import styles from "./title.module.css";

interface TitleProps {
  label: string;
  border: boolean;
  containerPadding: boolean;
  titlePadding: boolean;
  size: "small" | "medium" | "large";
  align: "left" | "right" | "center";
  color?: "default" | "white";
}

export default function Title({
  align,
  containerPadding,
  titlePadding,
  label,
  size,
  border,
  color = "default",
}: TitleProps) {
  return (
    <div
      className={classNames(styles.titleContainer, {
        [styles[
          `titleContainer--${containerPadding ? "padding" : "nopadding "}`
        ]]: containerPadding,
      })}
    >
      <h1
        className={classNames(styles.title, {
          [styles[`title--${size}`]]: size,
          [styles[`title--${color}`]]: color,
          [styles[`title--${align}`]]: align,
          [styles[`title--${!border ? "border" : "borderless "}`]]: border,
          [styles[`title--${titlePadding ? "padding" : "nopadding "}`]]:
            titlePadding,
        })}
      >
        {label}
      </h1>
    </div>
  );
}
