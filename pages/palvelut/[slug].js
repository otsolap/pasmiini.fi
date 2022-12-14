import React, { useEffect } from "react";
import fs from "fs";
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
  const SERVICES_PATH = "./content/services/";

  let paths = await fs.promises.readdir(SERVICES_PATH);
  paths = paths.map((item) => {
    return { params: { slug: item.split(".")[0] } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let service = await fs.promises.readFile(
    `${process.env.SERVICE_DIR_PATH + slug}.json`,
    "utf-8"
  );

  let data = JSON.parse(service);

  // getting the accordion data
  let files = await fs.promises.readdir(
    process.env.ACCORDION_DIR_PATH
  );
  let file;
  let accordionData = [];

  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    file = await fs.promises.readFile(
      process.env.ACCORDION_DIR_PATH + item,
      "utf-8"
    );
    accordionData.push(JSON.parse(file));
  }

  let selected = data["accordion"]["items"];
  let filtered = accordionData.filter((accordion) => {
    return selected.includes(accordion.id);
  });

  accordionData = filtered;

  return {
    props: {
      meta: {
        title: data["meta"]["title"],
        description: data["meta"]["description"],
        url: data["meta"]["url"],
        image: data["meta"]["image"],
      },
      hero: {
        title: data["hero"]["title"],
        summary: data["hero"]["summary"],
        align: data["hero"]["align"],
        media: data["hero"]["media"],
        image: data["hero"]["image"],
        mediaWidth: data["hero"]["mediaWidth"],
        video: data["hero"]["video"],
        buttons: data["hero"]["buttons"],
      },
      textarea: {
        body: data["textarea"]["body"],
        backgroundColor: data["textarea"]["backgroundColor"],
      },
      mediaMix: {
        backgroundColor: data["mediaMix"]["backgroundColor"],
        items: data["mediaMix"]["items"],
      },
      cards: {
        title: data["cards"]["title"],
        summary: data["cards"]["summary"],
        items: data["cards"]["items"],
      },
      accordion: {
        image: data["accordion"]["image"],
        items: accordionData,
      },
      textarea_2: {
        body: data["textarea_2"]["body"],
        backgroundColor: data["textarea_2"]["backgroundColor"],
      },
      highlight: {
        image: data["highlight"]["image"],
        title: data["highlight"]["title"],
        body: data["highlight"]["body"],
        button: data["highlight"]["button"],
        backgroundColor: data["highlight"]["backgroundColor"],
      },
    },
  };
}

export default Service;
