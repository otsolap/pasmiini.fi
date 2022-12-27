import React, { useState } from "react";
import styles from "../../styles/blog.module.scss";
import Link from "next/link";
import fs from "fs";
import Meta from "@components/Meta";
import Hero from "@components/Hero";
import Highlight from "@components/Highlight";

const Blog = ({ meta, hero, blogs, highlight }) => {
    console.log(blogs)

    return (
    <>
    <Meta meta={meta} />
    <section id="blog-archive">
      <Hero hero={hero} />
      <section className={styles.archive}>
        {blogs.data.map((item) => {
          return (
            <div key={item.slug}>
              <Link href={`/blogi/${item.slug}`}>
                <h3 className={styles.itemh3}>{item.title}</h3>
              </Link>
              <p className={styles.itemp}>
                {item.body.substr(0, 140)}...
              </p>
            </div>
          );
        })}
      </section>
      <Highlight highlight={highlight} />
    </section>
  </>
  )

};

export async function getStaticProps(context) {
  const blog = await import(`../../content/pages/blogArchive.json`)
  const siteSettings = await import(`../../content/pages/siteSettings.json`)
  /* Getting the Blog data */
  let files= await fs.promises.readdir(process.env.BLOG_DIR_PATH);
  let file;
  let data = [];
  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    file = await fs.promises.readFile(
      process.env.BLOG_DIR_PATH + item,
      "utf-8"
    );
    data.push(JSON.parse(file));
  }

  return {
    props: { 
        meta: {
            title: blog.meta.title,
            description: blog.meta.description,
            url: blog.meta.url,
            image: blog.meta.image,
          },
          hero: {
            title: blog.hero.title,
            summary: blog.hero.summary,
            align: blog.hero.align,
            media: blog.hero.media,
            image: blog.hero.image,
            mediaWidth: blog.hero.mediaWidth,
            video: blog.hero.video,
            buttons: blog.hero.buttons,
          },
        blogs: { data },
        highlight: {
            image: siteSettings.highlight.image,
            title: siteSettings.highlight.title,
            body: siteSettings.highlight.body,
            button: siteSettings.highlight.button,
            backgroundColor: siteSettings.highlight.backgroundColor
          },
     },
  };
}

export default Blog;
