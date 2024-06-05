import "./newArrivals.css";
import { Navigation, Pagination } from "swiper/modules";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "../../Product/Product";

const NewArrivals = ({ products }) => {
  const swiper = useSwiper();
  return (
    <div className="newArrivals container">
      <h5>WELCOME TO AN.GELIC</h5>
      <h3>New Arrivals</h3>
      <Swiper
        slidesPerView={5}
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

        <button className="prevElBtn" onClick={() => swiper.slidePrev()}>
          <GrFormPreviousLink />
        </button>
        <button className="nextElBtn" onClick={() => swiper.slideNext()}>
          <GrFormNextLink />
        </button>
      </Swiper>
    </div>
  );
};

export default NewArrivals;
