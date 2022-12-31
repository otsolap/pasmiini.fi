import styles from "../styles/components/blog.module.scss";
import BlogItem from "@partials/BlogItem";

const BlogList = ({ details, blogs }) => {
  return (
    <section className={styles.archive}>
      {details.title && (
        <header className={styles.header}>
          {details.title && <h2>{details.title}</h2>}
          {details.summary && <p>{details.summary}</p>}
        </header>
      )}
      {blogs && (
        <div className={styles.wrapper}>
          {blogs.data.map((item, i) => {
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
      {details.link && (
        <footer className={`buttonWrapper ${styles.footer}`}>
          {details.link.map((anchor, i) => (
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
