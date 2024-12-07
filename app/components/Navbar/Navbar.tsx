import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import styles from "./nav.module.css";

interface link {
  label: string;
  href: string;
}
export interface NavbarProps {
  logo?: string;
  logoAlt?: string;
  links?: link[];
  linksOnly?: boolean;
}

export default function Navbar({
  logo,
  logoAlt,
  links,
  linksOnly,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.navContainer}>
        {logo && !linksOnly && (
          <div className={styles.imageWrapper}>
            <Image src={logo} alt={logoAlt ?? ""} className={styles.image} />
          </div>
        )}
        {links && (
          <div
            className={classNames(styles.links, [
              linksOnly && styles[`links--only`],
              isOpen && styles[`links--mobile`],
            ])}
          >
            {links.map((link, index) => (
              <Link key={index} className={styles.link} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          fill="white"
          // style={"fill:#FFFFFF;"
          className={classNames(
            styles.burgerMenu,
            styles[`${isOpen ? "burgerMenu--open" : undefined}`]
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            className="path"
            d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"
          ></path>
        </svg>
      </nav>
    </>
  );
}
