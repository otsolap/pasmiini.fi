import styles from "../styles/components/hero.module.scss";
import Image from "next/image";

const MediaMix =({ mediaMix}) => {
    return (
        <section className={`${styles.mediaMix} `}>
            <div className={styles.mediaMixColumn}>
            </div>
            <div className={styles.mediaMixColumn}>
            </div>
        </section>
    )
}

export default MediaMix;