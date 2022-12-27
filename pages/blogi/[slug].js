import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/blog.module.scss'
import fs from 'fs'
import path from 'path'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog);


    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <div>
                {blog && blog.body}
            </div>
        </main>
    </div>;
};


export async function getStaticPaths() {
  const BLOG_PATH = './content/blogPosts/'

  let paths = await fs.promises.readdir(BLOG_PATH)
  paths = paths.map((item) => {
      return { params: { slug: item.split(".")[0] } }
  })
  return {
      paths: paths,
      fallback: true // false or 'blocking'
  };
}


export async function getStaticProps(context) {
    const { slug } = context.params;

    let blog = await fs.promises.readFile(`${process.env.BLOG_DIR_PATH + slug}.json`, 'utf-8')

    return {
        props: { blog: JSON.parse(blog) }, // will be passed to the page component as props
    }
}
export default Slug;