import "./homeWomensCollection.css";
import womenBanner from "../../../assets/women-banner.jpg";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Product from "../../Product/Product";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeWomensCollection = ({ products }) => {
  const swiper = useSwiper();

  return (
    <div className="homeWomensCollection">
      <div className="homeWomensCollection-header">
        <h3>Womens Collection</h3>
        <div>
          <button className="prevElBtn" onClick={() => swiper.slidePrev()}>
            <GrFormPreviousLink />
          </button>
          <button className="nextElBtn" onClick={() => swiper.slideNext()}>
            <GrFormNextLink />
          </button>
        </div>
      </div>
      <div className="homeWomensCollection-container">
        <div className="women-collection-banner">
          <img src={womenBanner} alt="" />
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".nextElBtn",
            prevEl: ".prevElBtn",
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
      </div>
    </div>
  );
};

export default HomeWomensCollection;
