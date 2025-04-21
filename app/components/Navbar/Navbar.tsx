import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import styles from "./nav.module.css";
import { Menu as Navigation } from "lucide-react";

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
        <Navigation
          absoluteStrokeWidth
          cursor="pointer"
          className={classNames(styles.burgerMenu, styles["burgerMenu--open"])}
          onClick={() => setIsOpen(!isOpen)}
          size={40}
        />
      </nav>
    </>
  );
}
