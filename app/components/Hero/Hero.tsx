import styles from "./hero.module.css";

interface HeroProps {
  greeting?: string;
  image?: string;
  imageProp?: string;
  jobTitle?: string;
  socialLinks?: string[];
  name?: string;
}
export default function Hero({
  greeting,
  image,
  imageProp,
  jobTitle,
  name,
  socialLinks,
}: HeroProps) {
  return (
    <section className={styles.container}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={imageProp ?? ""} />
        </div>
      )}
      {greeting ||
        name ||
        socialLinks ||
        (jobTitle && (
          <div className={styles.details}>
            {greeting && <p className={styles.greeting}>{greeting}</p>}
            {name && <h1 className={styles.name}>{name}</h1>}
            {jobTitle && <h3 className={styles.job}>{jobTitle}</h3>}
            {socialLinks && (
              <div className={styles.links}>
                <img src={socialLinks} className={styles.link} />
              </div>
            )}
          </div>
        ))}
    </section>
  );
}
