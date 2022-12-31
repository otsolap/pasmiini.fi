import styles from "../styles/components/blog.module.scss";
import BlogItem from "@partials/BlogItem";

const Blog = ({ archive, blogs }) => {
  return (
    <section className={styles.archive}>
      {archive.title && (
        <header className={styles.header}>
          {archive.title && <h2>{archive.title}</h2>}
          {archive.summary && <p>{archive.summary}</p>}
        </header>
      )}
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
    </section>
  );
};

export default Blog;
