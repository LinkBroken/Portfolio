import logo from "@/assets/logo.svg";
import styles from "./loader.module.css";
export default function Loader() {
  return (
    <div className={styles.loader}>
      <img src={logo.src} alt="Logo" className={styles.spinner} />
    </div>
  );
}
