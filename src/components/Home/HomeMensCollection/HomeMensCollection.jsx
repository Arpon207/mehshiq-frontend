import "./homeMensCollection.css";
import menBanner from "../../../assets/men-banner.jpeg";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Product from "../../Product/Product";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeMensCollection = ({ products }) => {
  const swiper = useSwiper();

  return (
    <div className="homeMensCollection">
      <div className="homeMensCollection-header">
        <h3>Mens Collection</h3>
        <div>
          <button className="prevElBtn" onClick={() => swiper.slidePrev()}>
            <GrFormPreviousLink />
          </button>
          <button className="nextElBtn" onClick={() => swiper.slideNext()}>
            <GrFormNextLink />
          </button>
        </div>
      </div>
      <div className="homeMensCollection-container">
        <div className="men-collection-banner">
          <img src={menBanner} alt="" />
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
          noSwipingClass="noSwiping"
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

export default HomeMensCollection;
