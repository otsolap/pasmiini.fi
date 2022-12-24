import React, { useEffect } from 'react'
import { useRouter } from "next/router"
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MediaMix from '@components/MediaMix'
import Highlight from '@components/Highlight'
import Cards from '@components/Cards'
import Script from 'next/script'
import Accordion from '@components/Accordion'

const Index = ({ meta, hero, mediaMix, highlight, cards }) => {
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
        <Cards cards={cards} />
      </section>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const home = await import(`../content/home.json`)

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
      highlight: {
        image: home.highlight.image,
        title: home.highlight.title,
        body: home.highlight.body,
        button: home.highlight.button,
        backgroundColor: home.highlight.backgroundColor
      },
      cards: {
        title: home.cards.title,
        summary: home.cards.summary,
        items: home.cards.items,
      }
    },
  }
}