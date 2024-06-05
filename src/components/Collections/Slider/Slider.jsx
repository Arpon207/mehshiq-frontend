import "./slider.css";
import banner1 from "../../../assets/collections/best-tote-bags.jpg";
import banner2 from "../../../assets/collections/230404102554-underscored-cuyanan-work-tote.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        pagination={true}
        autoplay={{
          delay: 2500,
        }}
        speed={700}
        loop={true}
        effect={"fade"}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
          <h3>Add a splash of ethnic charm to your day.</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
          <h3>Classic bag with elegant style</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
