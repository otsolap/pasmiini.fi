import styles from "../styles/components/mediaMix.module.scss";
import MediaMixItem from "@partials/MediaMixItem";

const MediaMix = ({ mediaMix }) => {
  return (
    <section className={`${styles.mediaMix} bg-${mediaMix.backgroundColor} `}>
      {mediaMix.items.map((item, i) => {
        return (
          <MediaMixItem
            key={i}
            type={item.type}
            image={item.image}
            video={item.video}
            body={item.body}
            highlightList={item.highlightList}
            buttons={item.buttons}
          />
        )
      })}
    </section>
  );
};

export default MediaMix;
