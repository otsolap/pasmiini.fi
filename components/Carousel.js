import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";
// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

import styles from "../styles/components/carousel.module.scss";

const Carousel = ({ content }) => {
  return (
    <section className={`${styles.carousel}`}>
      {content.title && (
        <header className={styles.header}>
          {content.title && <h2>{content.title}</h2>}
          {content.summary && <p>{content.summary}</p>}
        </header>
      )}
      {content && (
        <Swiper
          className={styles.wrapper}
          effect={"coverflow"}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 96,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 175,
            scale: 1,
            modifier: 2.5,
            slideShadows: false,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: true,
          }}
          rewind={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
        >
          {content.items.map((item, i) => {
            return (
              <SwiperSlide className={styles.item} key={i}>
                <header className={styles.imageContainer}>
                  <Image src={item.image} alt={item.title} fill />
                </header>
                <div className={styles.body}>
                  {item.title && <h3>{item.title}</h3>}
                  {item.summary && <p>{item.summary}</p>}
                </div>
                {item.button && (
                  <footer className={`buttonWrapper ${styles.buttonWrapper}`}>
                    {item.button.map((btn, i) => (
                      <Link key={i} href={btn.url} className={`btn`}>
                        {btn.title}
                      </Link>
                    ))}
                  </footer>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default Carousel;
