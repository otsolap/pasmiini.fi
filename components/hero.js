import styles from "../styles/components/hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@partials/YoutubeEmbed";

const Hero = ({ hero }) => {
  return (
    <section className={styles.hero}>
      <div
        className={`
          ${styles.mediaContainer} 
          ${hero.align == "left" ? styles.mediaLast : styles.mediaFirst} 
          ${hero.media == "video" && hero.mediaWidth ? styles.fullVideo : ""} 
          `}
      >
        {hero.media == "image" && hero.image && (
          <>
            {hero.mediaWidth ? (
              <Image src={hero.image} alt={hero.title} quality={100} fill />
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
          </>
        )}
        {hero.media == "video" && hero.video && (
          <>
            <YoutubeEmbed className={styles.video} src={hero.video} />
          </>
        )}
      </div>
      <div
        className={`
          ${styles.contentContainer} 
          ${hero.mediaWidth ? styles.bgTransparent : styles.bgDefault}
          ${hero.align == "left" ? styles.contentFirst : styles.contentLast} 
        `}
      >
        <div className={styles.content}>
          {hero.title && <h1>{hero.title}</h1>}
          {hero.summary && <h3>{hero.summary}</h3>}
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
