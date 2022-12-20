import styles from "../styles/components/mediaMix.module.scss";
import MediaMixItem from "@partials/mediaMixItem";

const MediaMix = ({ mediaMix }) => {
  return (
    <section className={`${styles.mediaMix} bg-${mediaMix.backgroundColor} `}>
      <>
      {mediaMix.medias.map((media, i) => {
        return (
          <MediaMixItem
            key={i}
            type={media.type}
            image={media.image}
            video={media.video}
            markdown={media.body}
            links={media.links}
            buttons={media.buttons}
          />
        )
      })}
      </>
    </section>
  );
};

export default MediaMix;
