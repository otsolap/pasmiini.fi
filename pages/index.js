import React, { useEffect } from 'react'
import { useRouter } from "next/router"
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import Script from 'next/script'

const Index = ({ meta, hero }) => {
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
        DesktopHeroImage: home.Hero.DesktopHeroImage,
        MobileHeroImage: home.Hero.MobileHeroImage,
        ImageAltText: home.Hero.ImageAltText,
        HeroTitle: home.Hero.HeroTitle,
      },
    },
  }
}