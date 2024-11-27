import classNames from "classnames";

import styles from "./footer.module.css";
import { link } from "../Hero/Hero";
import Link from "next/link";

type footerlink = { href: string; label: string };

interface FooterProps {
  variant: "details" | "footer";
  title?: string;
  link?: footerlink;
  description?: string;
  socialLinks?: link[];
  copyright?: string;
}

export default function Footer({
  variant,
  copyright,
  description,
  socialLinks,
  title,
  link,
}: FooterProps) {
  return (
    <section
      className={classNames(styles.container, styles[`container--${variant}`])}
    >
      {link && (
        <Link className={styles.link} href={link.href!}>
          {link.label}
        </Link>
      )}
      {title && <h1 className={styles.title}>{title}</h1>}
      {description && <h1 className={styles.description}>{description}</h1>}
      {socialLinks && (
        <div className={styles.links}>
          {socialLinks?.map((link) => (
            <Link
              target="_blank"
              href={link.href}
              dangerouslySetInnerHTML={{ __html: link.element! }}
            />
          ))}
        </div>
      )}

      {copyright && <span className={styles.copyright}>{copyright}</span>}
    </section>
  );
}
