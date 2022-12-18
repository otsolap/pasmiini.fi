import styles from "../styles/components/hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ hero }) => {
  return (
    <section id={styles.hero}>
      {hero.media == "image" &&
        hero.image && (
          <div className={styles.imageContainer}>
            <Image
              className={styles.heroImage}
              src={hero.image}
              alt={hero.title}
              quality={100}
              fill={hero.imageWidth ? true : false}
              {...hero.imageWidth ? '' : width=720}
              {...hero.imageWidth ? false : height=625}
            />
          </div>
        )}
      <div className={`${styles.contentContainer} ${hero.imageWidth ? styles.bgTransparent : styles.bgDefault} `}>
        <div className={styles.content}>
          {hero.title && <h1>{hero.title}</h1>}
          {hero.description && <h3>{hero.description}</h3>}
          {hero.buttons && (
            <div className="buttonWrapper">
              {hero.buttons.map((button, i) => (
                <Link key={i} href={button.url} className={`btn`}>
                  {button.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
