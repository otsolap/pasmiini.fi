import styles from "../styles/components/highlight.module.scss";
import Image from "next/image";
import Link from "next/link";
import MarkdownBlock from "@partials/markdownBlock";

const Highlight = ({ highlight }) => {
  return (
    <section className={`${styles.highlight} bg-${highlight.backgroundColor} `}>
      {highlight.image && (
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={highlight.image}
            alt=""
            width="115"
            height="115"
            quality={100}
          />
        </div>
      )}
      {highlight.title && <h2>{highlight.title}</h2>}
      {highlight.description && <MarkdownBlock markdown={highlight.body} />}
      {!highlight.button && (
        <div className="buttonWrapper">
          <Link href={highlight.button.url} className={`btn`}>
            {highlight.button.title}
          </Link>
        </div>
      )}
    </section>
  );
};

export default Highlight;
