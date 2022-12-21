import styles from "../styles/components/mediaMix.module.scss";
import Image from "next/image";
import Link from "next/link";
import MarkdownBlock from "@partials/markdownBlock";
import YoutubeEmbed from "./youtubeEmbed";

const MediaMixItem = ({ type, image, video, body, highlightList, buttons }) => {
  return (
    <div className={styles.mediaMixColumn}>
      {type == "video" && video && (
        <div className={styles.videoContainer}>
          <YoutubeEmbed src={video} />
        </div>
      )}
      {type == "image" && image && (
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
      {type == "markdown" && body && <MarkdownBlock markdown={body} />}
      {type == "markdown" && highlightList && (
        <ul className={styles.highlightList}>
          {highlightList.map((list, i) => (
            <li key={i}>
                {list.title}
            </li>
          ))}
        </ul>
      )}
      {type == "markdown" && buttons && (
        <div className="buttonWrapper">
          {buttons.map((button, i) => (
            <Link key={i} href={button.url} className={`btn`}>
              {button.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaMixItem;
