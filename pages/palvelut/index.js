import React, { useEffect, useState } from 'react';
import styles from '../../styles/blog.module.scss'
import Link from 'next/link';
import fs from 'fs'

const Services = (props) => {
    const [blogs, setBlogs] = useState(props.files);
    // useEffect(() => {

    // }, [])
    return <div className={styles.container}>
        <main className={styles.main}>
            {blogs.map((blogitem) => {
                return (
                    <div key={blogitem.slug}>
                        <Link href={`/palvelut/${blogitem.slug}`}>
                            <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
                    </div>
                )
            })}
        </main>
    </div>
};


export async function getStaticProps(context) {
    let files= await fs.promises.readdir(process.env.SERVICE_DIR_PATH);
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
      props: { files }, // will be passed to the page component as props
    };
  }
export default Services;