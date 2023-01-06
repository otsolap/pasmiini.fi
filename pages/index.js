import React, { useEffect } from 'react'
import fs from "fs";
import { useRouter } from "next/router"
import Script from 'next/script'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MediaMix from '@components/MediaMix'
import Highlight from '@components/Highlight'
import BlogList from '@components/BlogList'

const Index = ({ meta, hero, mediaMix, blogs, highlight}) => {
  const router = useRouter()

  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            router.push(/admin/)
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Meta meta={meta} />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <section id="home">
        <Hero hero={hero} />
        <MediaMix mediaMix={mediaMix} />
        <Highlight highlight={highlight} />
        <BlogList blogs={blogs} />
      </section>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const home = await import(`../content/pages/home.json`)
  const site = await import(`../content/site.json`)

  /* Getting the Blog data */
  let files = await fs.promises.readdir(process.env.BLOG_DIR_PATH)
  let file
  let data = []

  for (let index = 0; index < files.length; index++) {
    const item = files[index]
    file = await fs.promises.readFile(
      process.env.BLOG_DIR_PATH + item,
      "utf-8"
    )
    data.push(JSON.parse(file))
  }

  let BLOG_SOURCE = home.blogs.filter

  if(BLOG_SOURCE === 'custom') {
    let selected = home.blogs.blog
    let blogFiltered = data.filter(blog => {
      return selected.includes(blog.slug)
    })
    data = blogFiltered
  }

  return {
    props: {
      meta: {
        title: home.meta.title,
        description: home.meta.description,
        url: home.meta.url,
        image: home.meta.image,
      },
      hero: {
        title: home.hero.title,
        summary: home.hero.summary,
        align: home.hero.align,
        media: home.hero.media,
        image: home.hero.image,
        mediaWidth: home.hero.mediaWidth,
        video: home.hero.video,
        buttons: home.hero.buttons,
      },
      mediaMix: {
        backgroundColor: home.mediaMix.backgroundColor,
        items: home.mediaMix.items,
      },
      blogs: {
        title: home.blogs.title,
        summary: home.blogs.summary,
        items: data,
        link: home.blogs.link
      },
      highlight: {
        image: site.highlight.image,
        title: site.highlight.title,
        body: site.highlight.body,
        button: site.highlight.button,
        backgroundColor: site.highlight.backgroundColor
      }
    },
  }
}