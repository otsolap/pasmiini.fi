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
      <div className={styles.content}>
        {highlight.title && <h2>{highlight.title}</h2>}
        {highlight.body && <MarkdownBlock markdown={highlight.body} />}
      </div>
      {highlight.button && (
        <div className={`buttonWrapper ${styles.buttonWrapper}`}>
          {highlight.button.map((btn, i) => (
            <Link key={i} href={btn.url} className={`btn`}>
              {btn.title}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Highlight;
