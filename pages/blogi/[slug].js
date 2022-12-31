import React from "react";
import styles from '../../styles/pages/blog.module.scss'
import fs from "fs";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = ({ blog }) => {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.body}</div>
      </main>
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
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let blog = await fs.promises.readFile(
    `${process.env.BLOG_DIR_PATH + slug}.json`,
    "utf-8"
  );

  let data = JSON.parse(blog)

  return {
    props: { 
        blog: {
            title: data['title'],
            date: data['date'],
            image: data['image'],
            body: data['body'],
        }
     }, 
  };
}
export default Slug;
