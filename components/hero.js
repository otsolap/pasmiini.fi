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
              src={hero.image}
              alt={hero.title}
              fill
              class={styles.heroImage}
              quality={100}
            />
          </div>
        )}
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          {hero.title && <h1>{hero.title}</h1>}
          {hero.description && <h3>{hero.description}</h3>}
          {hero.buttons && (
            <div className="buttonWrapper">
              {hero.buttons.map((button) => {
                <Link href={button.link}>
                  <a className={`btn btn--hero`}>{button.title}</a>
                </Link>;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
