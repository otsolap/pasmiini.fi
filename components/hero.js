import styles from "../styles/components/hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@partials/youtubeEmbed";

const Hero = ({ hero }) => {
  return (
    <section className={styles.hero}>
      {hero.media == "image" && hero.image && (
        <div
          className={`
            ${styles.imageContainer} 
            ${hero.align == "left" ? styles.imageLast : styles.imageFirst} 
            `}
        >
          {hero.imageWidth ? (
          <Image
            src={hero.image}
            alt={hero.title}
            quality={100}
            fill
          />
          ) : (
            <>
            <Image
            className="mobile-only"
            src={hero.image}
            alt={hero.title}
            quality={100}
            width={428}
            height={270}
          />
          <Image
            className="desktop-only"
            src={hero.image}
            alt={hero.title}
            quality={100}
            width={720}
            height={625}
          />
            </>
          )}
        </div>
      )}
     {hero.media == "video" && hero.video && (
      <div className={styles.videoContainer}>
        <YoutubeEmbed src={hero.video} />
      </div>
     )}
      <div
        className={`
          ${styles.contentContainer} 
          ${hero.imageWidth ? styles.bgTransparent : styles.bgDefault}
          ${hero.align == "left" ? styles.contentFirst : styles.contentLast} 
        `}
      >
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
