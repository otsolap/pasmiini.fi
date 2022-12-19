import styles from "../styles/components/mediaMix.module.scss";
import MediaMixItem from "@partials/mediaMixItem";

const MediaMix = ({ mediaMix }) => {
  return (
    <section className={`${styles.mediaMix} `}>
      <MediaMixItem
        type={mediaMix.columnOneType}
        image={mediaMix.columnOneImage}
        video={mediaMix.columnOneVideo}
        markdown={mediaMix.columnOneText}
        links={mediaMix.columnOneLinks}
        buttons={mediaMix.columnOneLinks}
      />
      <MediaMixItem
        type={mediaMix.columnTwoType}
        image={mediaMix.columnTwoImage}
        video={mediaMix.columnTwoVideo}
        markdown={mediaMix.columnTwoText}
        links={mediaMix.columnTwoLinks}
        buttons={mediaMix.columnTwoLinks}
      />
    </section>
  );
};

export default MediaMix;
