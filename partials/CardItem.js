import styles from "../styles/components/cards.module.scss";
import Image from "next/image";

const MediaMixItem = ({ image, title, summary }) => {
  return (
    <article className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={image}
            alt=""
            fill
            quality={100}
          />
        </div>
      )}
      {title && <h3>{title}</h3>}
      {summary && <p>{summary}</p>}
    </article>
  );
};

export default MediaMixItem;
