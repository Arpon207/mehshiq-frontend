import "./banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import bannerImage1 from "../../../assets/Banner/bannerThree1.jpg";
import bannerImage2 from "../../../assets/Banner/bannerThree2.jpg";
import bannerImage3 from "../../../assets/Banner/bannerThree3.jpg";
import bannerImage4 from "../../../assets/Banner/bannerThree4.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/collections");
  };
  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        effect="fade"
        speed={800}
        pauseOnMouseEnter={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide className="first-slide">
          <img src={bannerImage1} alt="" />
          <div>
            <h2>MEHSHIQ</h2>
            <h3>Elevate Your Style with Exquisite Bags</h3>
            <button onClick={() => handleNavigate()}>
              Explore Our Collection
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="second-slide">
          <img src={bannerImage3} alt="" />
          <div>
            <h2>WOMEN'S HANDBAG</h2>
            <h3>Find your best match</h3>
            <button onClick={() => handleNavigate()}>
              Explore Our Collection
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="third-slide">
          <img src={bannerImage2} alt="" />
          <div>
            <h2>PICK YOUR STYLE</h2>
            <h3>Pick your fovourite bag from our collection.</h3>
            <button onClick={() => handleNavigate()}>
              Explore Our Collection
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="fourth-slide">
          <img src={bannerImage4} alt="" />
          <div>
            <h2>BEST TOTE'S COLLECTION</h2>
            <h3>Explore our tote collection</h3>
            <button onClick={() => handleNavigate()}>
              Explore Our Collection
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
