import React, { useEffect, useState } from 'react';
import styles from '../../styles/blog.module.scss'
import Link from 'next/link';
import fs from 'fs'
// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allFiles);
    // useEffect(() => {

    // }, [])
    return <div className={styles.container}>
        <main className={styles.main}>
            {blogs.map((blogitem) => {
                return <div key={blogitem.slug}>
                    <Link href={`/blogi/${blogitem.slug}`}>
                        <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
                    <p className={styles.blogItemp}>{blogitem.body.substr(0, 140)}...</p>
                </div>
            })}
        </main>
    </div>
};


export async function getStaticProps(context) {
    let data = await fs.promises.readdir(process.env.BLOG_DIR_PATH);
    let file;
    let allFiles = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        file = await fs.promises.readFile((process.env.BLOG_DIR_PATH  + item), 'utf-8')
        allFiles.push(JSON.parse(file))
    }

    return {
        props: { allFiles }, // will be passed to the page component as props
    }
}

export default Blog;