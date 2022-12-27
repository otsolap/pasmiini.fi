import React, { useEffect } from 'react'
import { useRouter } from "next/router"
import Script from 'next/script'
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MediaMix from '@components/MediaMix'
import Highlight from '@components/Highlight'

const Index = ({ meta, hero, mediaMix, highlight}) => {
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
      </section>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const home = await import(`../content/pages/home.json`)
  const siteSettings = await import(`../content/pages/siteSettings.json`)

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
        image: siteSettings.highlight.image,
        title: siteSettings.highlight.title,
        body: siteSettings.highlight.body,
        button: siteSettings.highlight.button,
        backgroundColor: siteSettings.highlight.backgroundColor
      },
    },
  }
}