import React, { useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MediaMix from '@components/MediaMix'
import Highlight from '@components/Highlight'
import Cards from '@components/Cards'
import Accordion from '@components/Accordion'

const Service = ({ meta, hero, mediamix,  textarea, cards, accordion, highlight}) => {
  if (!blogpost) return <div>not found</div>


  return (
    <>
      <Meta meta={meta} />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <section id="home">
        <Hero hero={hero} />
        <MediaMix mediaMix={mediaMix} />
        <Highlight highlight={highlight} />
        <Cards cards={cards} />
        <Accordion accordion={accordion} />
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/blogPosts'))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3)
      return {
        params: { slug: trimmedName },
      }
    })

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const service = await import(`../../../content/serviceItems/${slug}.json`).catch(
    () => null
  )

  return {
    props: {
      meta: {
        title: service.meta.title,
        description: service.meta.description,
        url: service.meta.url,
        image: service.meta.image,
      },
      hero: {
        title: service.hero.title,
        summary: service.hero.summary,
        align: service.hero.align,
        media: service.hero.media,
        image: service.hero.image,
        mediaWidth: service.hero.mediaWidth,
        video: service.hero.video,
        buttons: service.hero.buttons,
      },
      textarea: {
        title: service.textarea.title,
        backgroundColor: service.textarea.backgroundColor,
      },
      mediaMix: {
        backgroundColor: service.mediaMix.backgroundColor,
        items: service.mediaMix.items,
      },
      cards: {
        title: service.cards.backgroundColor,
        summary: service.cards.summary,
        items: service.cards.items,
      },
      accordionSection: {
        image: service.accordionSection.image,
        items: service.accordionSection.items
      },
      textarea_2: {
        title: service.textarea_2.title,
        backgroundColor: service.textarea_2.backgroundColor,
      },
      highlight: {
        image: service.highlight.image,
        title: service.highlight.title,
        body: service.highlight.body,
        button: service.highlight.button,
        backgroundColor: service.highlight.backgroundColor
      },
    },
  }
}

export default Service
