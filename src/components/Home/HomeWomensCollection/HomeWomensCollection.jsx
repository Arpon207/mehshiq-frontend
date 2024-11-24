import "./homeWomensCollection.css";
import womenBanner from "../../../assets/women-banner.jpg";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Product from "../../Product/Product";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { TailSpin } from "react-loader-spinner";

const HomeWomensCollection = () => {
  const [ref, inView] = useInView();
  const { data: { data: products } = {}, isLoading } = useQuery({
    queryKey: ["womensProducts"],
    queryFn: () => {
      return makeRequest.get(`/products/womens`);
    },
    enabled: inView,
  });
  const swiper = useSwiper();

  return (
    <div className="homeWomensCollection" ref={ref}>
      <div className="homeWomensCollection-header">
        <h3>Womens Collection</h3>
        <div>
          <button
            className="WomensPrevElBtn"
            onClick={() => swiper.slidePrev()}
          >
            <GrFormPreviousLink />
          </button>
          <button
            className="WomensNextElBtn"
            onClick={() => swiper.slideNext()}
          >
            <GrFormNextLink />
          </button>
        </div>
      </div>
      <div className="homeWomensCollection-container">
        <div className="women-collection-banner">
          <img src={womenBanner} alt="" />
        </div>
        {isLoading ? (
          <div className="mensCollectionLoader">
            <TailSpin
              visible={isLoading}
              height="60"
              width="60"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              668: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: ".WomensNextElBtn",
              prevEl: ".WomensPrevElBtn",
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {products?.map((product, i) => (
              <SwiperSlide key={i}>
                <Product product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HomeWomensCollection;
