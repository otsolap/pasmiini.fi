import React from "react";
import fs from "fs";
import Image from "next/image";
import styles from "../../styles/pages/blog.module.scss";
import Meta from "@components/Meta";
import MarkdownBlock from "@partials/MarkdownBlock";
import MediaMix from "@components/MediaMix";

const Slug = ({ meta, blog, mediaMix }) => {
  return (
    <>
      <Meta meta={meta} />
      <section className={styles.articleContainer}>
        <div className={styles.content}>
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
        </div>
      </section>
      <MediaMix mediaMix={mediaMix} />
    </>
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
  // getting the blog data
  const { slug } = context.params;

  let blog = await fs.promises.readFile(
    `${process.env.BLOG_DIR_PATH + slug}.json`,
    "utf-8"
  );

  let data = JSON.parse(blog);

  // filtering author
  const AUTHOR_PATH = "./content/authors/";
  let files = await fs.promises.readdir(AUTHOR_PATH);
  let file;
  let authors = [];
  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    file = await fs.promises.readFile(AUTHOR_PATH + item, "utf-8");
    authors.push(JSON.parse(file));
  }

  let selected = data["author"];

  let authorsFiltered = authors.filter((author) => {
    return selected.includes(author.title);
  });

  return {
    props: {
      blog: {
        author: data["author"],
        title: data["title"],
        date: data["date"],
        image: data["image"],
        body: data["body"],
      },
      meta: {
        title: data["title"],
        description: data["body"],
        image: data["image"],
        url: data["slug"],
      },
      mediaMix: {
        backgroundColor: "creamyWhite",
        items: [
          {
            type: "image",
            image: authorsFiltered[0].image,
          },
          {
            type: "markdown",
            body: authorsFiltered[0].body,
            buttons: authorsFiltered[0].buttons,
          },
        ],
      },
    },
  };
}
export default Slug;
