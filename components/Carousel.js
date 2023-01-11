import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

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
          className={`mySwiper ${styles.wrapper}`}
          spaceBetween={30}
          slidesPerView={3} 
          slidesPerColumn={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
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
