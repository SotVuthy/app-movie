import React from "react";
import "../swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

import "swiper/css";

const PopularCard = () => {
  const base_url = "https://api.themoviedb.org/3";
  const url =
    base_url +
    "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=" +
    process.env.REACT_APP_API_KEY;

  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);

  useEffect(() => {
    fetch(url_set, setUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  }, [url_set]);

  return (
    <>
      <Swiper
        className="swiper-container"
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movieData.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          movieData.map((res, pos) => {
            return (
              <SwiperSlide className="single-swiper">
                <Card info={res} key={pos} />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </>
  );
};
export default PopularCard;
