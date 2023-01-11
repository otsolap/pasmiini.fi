import styles from "../styles/components/blog.module.scss";
import Link from "next/link";
import Image from "next/image";

const BlogItem = ({ image, title, slug }) => {
  return (
    <article className={styles.blog}>
      <Link className={styles.imageContainer} href={`/blogi/${slug}`}>
        {image ? (
          <Image
            className={styles.image}
            src={image}
            alt=""
            fill
            quality={100}
          />
        ) : (
          <Image
            className={styles.image}
            src="/images/placeholder.png"
            alt=""
            fill
            quality={100}
          />
        )}
      </Link>
      {title && (
        <h3 className={styles.title}>
          <Link href={`/blogi/${slug}`}>{title}</Link>
        </h3>
      )}
    </article>
  );
};

export default BlogItem;
