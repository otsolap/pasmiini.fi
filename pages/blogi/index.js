import React from "react";
import fs from "fs";
import Meta from "@components/Meta";
import Hero from "@components/Hero";
import BlogList from "@components/BlogList";
import Highlight from "@components/Highlight";

const Blog = ({ meta, hero, blogs, highlight }) => {

  return (
    <>
      <Meta meta={meta} />
      <section id="blog-archive">
        <Hero hero={hero} />
        <BlogList blogs={blogs} />
        <Highlight highlight={highlight} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const blog = await import(`../../content/pages/blogArchive.json`);
  const site = await import(`../../content/site.json`);
  /* Getting the Blog data */
  let files = await fs.promises.readdir(process.env.BLOG_DIR_PATH);
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
      archive: {
        title: blog.archive.title,
        summary: blog.archive.summary,
      },
      blogs: { 
        title: blog.archive.title,
        summary: blog.archive.summary,
        items: data 
      },
      highlight: {
        image: site.highlight.image,
        title: site.highlight.title,
        body: site.highlight.body,
        button: site.highlight.button,
        backgroundColor: site.highlight.backgroundColor,
      },
    },
  };
}

export default Blog;
