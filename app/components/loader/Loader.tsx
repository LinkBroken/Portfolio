import logo from "@/assets/logo.svg";
import styles from "./loader.module.css";
import Image from "next/image";
export default function Loader() {
  return (
    <div className={styles.loader}>
      <Image src={logo.src} alt="Logo" className={styles.spinner} />
    </div>
  );
}
