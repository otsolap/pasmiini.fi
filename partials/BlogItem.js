import styles from "../styles/components/blog.module.scss";
import Link from "next/link";
import Image from "next/image";

const BlogItem = ({ image, title, slug }) => {
  return (
    <article className={styles.blog}>
      <div className={styles.imageContainer}>
        <Link href={`/blogi/${slug}`}>
          {image ? (
            <Image
              className={styles.image}
              src={image}
              alt=""
              height={200}
              width={370}
              quality={100}
            />
          ) : (
            <Image
              className={styles.image}
              src="/images/placeholder.png"
              alt=""
              height={200}
              width={370}
              quality={100}
            />
          )}
        </Link>
      </div>
      {title && (
        <h3 className={styles.title}>
          <Link href={`/blogi/${slug}`}>{title}</Link>
        </h3>
      )}
    </article>
  );
};

export default BlogItem;
