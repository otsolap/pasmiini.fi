import styles from "../styles/components/mediaMix.module.scss";
import Image from "next/image";
import MarkdownBlock from "@partials/markdownBlock";
import YoutubeEmbed from "./youtubeEmbed";

const MediaMixItem = ({ type, image, video, text }) => {
  return (
    <div className={styles.mediaMixColumn}>
      {type == "image" && image && (
        <div className={styles.mediaMixImageContainer}>
          <Image
            className={styles.mediaMixImage}
            src={image}
            alt=""
            fill
            quality={100}
          />
        </div>
      )}
      {type == "text" && text && <MarkdownBlock markdown={text} />}
      {type == "video" && video && <YoutubeEmbed link={video} />}
    </div>
  );
};

export default MediaMixItem;