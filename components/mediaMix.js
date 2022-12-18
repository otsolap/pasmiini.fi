import styles from "../styles/components/mediaMix.module.scss";
import Image from "next/image";
import MarkdownBlock from "@partials/markdownBlock";

const MediaMix = ({ mediaMix }) => {
  return (
    <section className={`${styles.mediaMix} `}>
      <div className={styles.mediaMixColumn}>
        {mediaMix.columnOneType == "image" && mediaMix.columnOneImage && (
          <Image
            className={styles.mediaMixImage}
            src={mediaMix.columnOneImage}
            alt=""
            fill
            quality={100}
          />
        )}
        {mediaMix.columnOneType == "text" && mediaMix.columnOneText && (
          <MarkdownBlock markdown={columnOneText} />
        )}
      </div>
      <div className={styles.mediaMixColumn}>
        {mediaMix.columnTwoType == "image" && mediaMix.columnTwoImage && (
          <Image
            className={styles.mediaMixImage}
            src={mediaMix.columnTwoImage}
            alt=""
            fill
            quality={100}
          />
        )}
        {mediaMix.columnTwoType == "text" && mediaMix.columnTwoText && (
          <MarkdownBlock markdown={columnTwoText} />
        )}
      </div>
    </section>
  );
};

export default MediaMix;
