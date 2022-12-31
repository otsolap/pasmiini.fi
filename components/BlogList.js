import styles from "../styles/components/blog.module.scss";
import BlogItem from "@partials/BlogItem";
import Link from "next/link";

const BlogList = ({ blogs }) => {
  return (
    <section className={styles.blogs}>
      {blogs.title && (
        <header className={styles.header}>
          {blogs.title && <h2>{blogs.title}</h2>}
          {blogs.summary && <p>{blogs.summary}</p>}
        </header>
      )}
      {blogs.items && (
        <div className={styles.wrapper}>
          {blogs.items.map((item, i) => {
            return (
              <BlogItem
                key={i}
                image={item.image}
                title={item.title}
                slug={item.slug}
              />
            );
          })}
        </div>
      )}
      {blogs.link && (
        <footer className={`buttonWrapper ${styles.footer}`}>
          {blogs.link.map((anchor, i) => (
            <Link key={i} href={anchor.url}>
              {anchor.title}
            </Link>
          ))}
        </footer>
      )}
    </section>
  );
};

export default BlogList;
