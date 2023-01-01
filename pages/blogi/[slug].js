import React from "react";
import styles from "../../styles/pages/blog.module.scss";
import fs from "fs";
import MarkdownBlock from "@partials/MarkdownBlock";

const Slug = ({ blog }) => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        {blog.body && <MarkdownBlock markdown={blog.body} />}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const BLOG_PATH = "./content/posts/";
  
  let paths = await fs.promises.readdir(BLOG_PATH);
  paths = paths.map((item) => {
    console.log(item)
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
        title: data["title"],
        date: data["date"],
        image: data["image"],
        body: data["body"],
      },
    },
  };
}
export default Slug;
