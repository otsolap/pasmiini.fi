import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import Meta from "@components/Meta";
import Hero from "@components/Hero";
import MediaMix from "@components/MediaMix";
import Highlight from "@components/Highlight";
import Cards from "@components/Cards";
import Accordion from "@components/Accordion";
import Textarea from "@components/Textarea";

const Service = ({
  meta,
  hero,
  mediaMix,
  textarea,
  cards,
  accordion,
  highlight,
}) => {

  return (
    <>
      <Meta meta={meta} />
      <section id="services">
        <Hero hero={hero} />
        <Textarea textarea={textarea} />
        <MediaMix mediaMix={mediaMix} />
        <Highlight highlight={highlight} />
        <Cards cards={cards} />
        <Accordion accordion={accordion} />
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const SERVICES_PATH = "./content/serviceItems/";

  const paths = fs
    .readdirSync(path.join(process.cwd(), SERVICES_PATH))
    .map((name) => {
      const trimmedName = name.substring(0, name.length - 5);
      return {
        params: { slug: trimmedName },
      };
    });

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let service = await fs.promises.readFile(
    `${process.env.SERVICE_DIR_PATH + slug}.json`,
    "utf-8"
  );

  let data = JSON.parse(service)
    
  return {
    props: {
        meta: {
          title: data['meta']['title'],
          description: data['meta']['description'],
          url: data['meta']['url'],
          image: data['meta']['image'],
        },
        hero: {
          title: data['hero']['title'],
          summary: data['hero']['summary'],
          align: data['hero']['align'],
          media: data['hero']['media'],
          image: data['hero']['image'],
          mediaWidth: data['hero']['mediaWidth'],
          video: data['hero']['video'],
          buttons: data['hero']['buttons'],
        },
        textarea: {
          body: data['textarea']['body'],
          backgroundColor: data['textarea']['backgroundColor'],
        },
        mediaMix: {
          backgroundColor: data['mediaMix']['backgroundColor'],
          items: data['mediaMix']['items'],
        },
        cards: {
          title: data['cards']['title'],
          summary: data['cards']['summary'],
          items: data['cards']['items'],
        },
        accordionSection: {
          image: data['accordionSection']['image'],
          items: data['accordionSection']['items'],
        },
        textarea_2: {
          body: data['textarea_2']['body'],
          backgroundColor: data['textarea_2']['backgroundColor'],
        },
        highlight: {
          image: data['highlight']['image'],
          title: data['highlight']['title'],
          body: data['highlight']['body'],
          button: data['highlight']['button'],
          backgroundColor: data['highlight']['backgroundColor'],
        },
    },
  };
}

export default Service;
