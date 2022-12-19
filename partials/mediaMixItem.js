import styles from "../styles/components/mediaMix.module.scss";
import Image from "next/image";
import MarkdownBlock from "@partials/markdownBlock";
import YoutubeEmbed from "./youtubeEmbed";

const MediaMixItem = ({ type, image, video, text }) => {
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
      {type == "text" && text && <MarkdownBlock markdown={text} />}
      {type == "text" && links && (
        <ul className="linkWrapper">
          {links.map((link, i) => (
            <li key={i}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {type == "text" && buttons && (
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
