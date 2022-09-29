import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/swiper.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Pagination, Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { useState } from "react";

const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <>
      <Swiper
        className={styles.SwiperContainer}
        onSlideChange={(slide) => setActive(slide.activeIndex)}
        modules={[EffectFade, Pagination, Mousewheel, Scrollbar]}
        pagination={{
          verticalClass: styles.Pagination,
          clickable: true,
          bulletActiveClass:
            active === 1 ? styles.ActiveBulletOne : styles.ActiveBulletTwo,
          bulletClass: styles.BulletOne,
        }}
        scrollbar={{ hide: true, horizontalClass: styles.Scrollbar }}
        observer={true}
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={{
          thresholdTime: 600,
          forceToAxis: true,
        }}
      >
        <SwiperSlide className={styles.SwiperPage}>
          <h1>Page 1</h1>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperPage}>
          <h1>Page 2</h1>
          <p>
            Being a Christian is so much more than just going to Church and
            trying hard to be good. Being a Christian means Jesus is totally in
            charge of our lives. The Bible even says we die, and Jesus lives in
            us!
          </p>
          <p>
            What does that mean for a junior high student? It means their
            thoughts, their habits, their belongings, their wildest
            dreams—everything about them—is no longer what they live for.
            Instead, they have Jesus living in them.
          </p>
          <p>
            When we live for ourselves, we get prideful, angry, scared, bored,
            and even plain mean. But when Jesus lives through us, we are filled
            with love, joy, peace, patience, kindness, goodness, gentleness, and
            self-control.
          </p>
          <p>
            At MIX 2023 we will learn what it means to die to Christ but
            nevertheless have Him alive in us.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperPage}>
          <h1>page 3</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
