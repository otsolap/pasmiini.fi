import styles from "../styles/components/blog.module.scss";
import Link from "next/link";
import Image from "next/image";

const BlogItem = ({ image, title, slug,  }) => {
  return (
    <article className={styles.blog}>
      {image ? (
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={image}
            alt=""
            height={200}
            width={370}
            quality={100}
          />
        </div>
      ) : (
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/placeholder.png"
            alt=""
            height={200}
            width={370}
            quality={100}
          />
        </div>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
    </article>
  );
};

export default BlogItem;
