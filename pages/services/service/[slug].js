import React, { useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import { useRouter } from "next/router"
import Meta from '@components/Meta'
import Hero from '@components/Hero'
import MediaMix from '@components/MediaMix'
import Highlight from '@components/Highlight'
import Cards from '@components/Cards'
import Script from 'next/script'
import Accordion from '@components/Accordion'

const Service = ({ meta, hero, mediamix,  textarea, cards, accordion, highlight}) => {
  if (!blogpost) return <div>not found</div>

  const { html, attributes } = blogpost

  return (
    <Layout>
      <article>
        <h1>{attributes.title}</h1>
        <img src={attributes.thumbnail} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <style jsx>{`
        article {
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </Layout>
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
      blogpost: blogpost.default,
    },
  }
}

export default Service
