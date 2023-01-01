import React from "react";
import fs from "fs";
import Image from "next/image";
import styles from "../../styles/pages/blog.module.scss";
import MarkdownBlock from "@partials/MarkdownBlock";

const Slug = ({ blog }) => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        {blog.image && (
          <header className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={blog.image}
              alt={blog.title}
              fill
              quality={100}
            />
          </header>
        )}
        {blog.title && <h1>{blog.title}</h1>}
        {blog.author && <h2>Kirjoittanut: {blog.author}</h2>}
        {blog.body && <MarkdownBlock markdown={blog.body} />}
        <footer>Social Media Sharing here.</footer>
      </section>
    </div>
  );
};

export async function getStaticPaths() {
  const BLOG_PATH = "./content/posts/";

  let paths = await fs.promises.readdir(BLOG_PATH);
  paths = paths.map((item) => {
    return { params: { slug: item.split(".")[0] } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let blog = await fs.promises.readFile(
    `${process.env.BLOG_DIR_PATH + slug}.json`,
    "utf-8"
  );

  let data = JSON.parse(blog);

  return {
    props: {
      blog: {
        author: data["author"],
        title: data["title"],
        date: data["date"],
        image: data["image"],
        body: data["body"],
      },
    },
  };
}
export default Slug;
