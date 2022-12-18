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
              fill
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
              {hero.buttons.map((button, i) => (
                <Link key={i} href={button.url}>
                  <a className={`btn btn--hero`}>{button.title}</a>
                </Link>
              ))}
            </div>
          )}
          {(hero.buttons.map((button) => console.log(button)))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
