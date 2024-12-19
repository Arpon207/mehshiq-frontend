import "./productImages.css";
import img1 from "../../../assets/bags/bag1.jpg";
import img2 from "../../../assets/bags/bag2.jpg";
import img3 from "../../../assets/bags/bag3.jpg";
import img4 from "../../../assets/bags/bag4.jpg";

import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs } from "swiper/modules";
import { FaRegCirclePlay } from "react-icons/fa6";

const ProductImages = ({ setShowPopup, images }) => {
  const [productImages, setProductImages] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState();
  useEffect(() => {
    setProductImages(images);
  }, [images]);
  return (
    <div className="productPage-images">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
        className="mySwiper2"
      >
        {productImages?.map(({ img }, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide
          className="productPage-video"
          onClick={() => setShowPopup(true)}
        >
          <button>
            <FaRegCirclePlay />
          </button>
          <video
            src={
              "https://res.cloudinary.com/dfjxig6z2/video/upload/v1717190167/Test/ts0zrfo8kcxdtttopfqp.mp4"
            }
            alt=""
            className="video-image"
            controlsList="nodownload"
            onClick={() => setShowPopup(true)}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={16 / 2}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      >
        {productImages?.map(({ img }, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide
          className="productPage-video"
          onClick={() =>
            setSelectedImage({
              ...selectedImage,
              type: "video",
              image:
                "https://res.cloudinary.com/dfjxig6z2/video/upload/v1717190167/Test/ts0zrfo8kcxdtttopfqp.mp4",
            })
          }
        >
          <button>
            <FaRegCirclePlay />
          </button>
          <video
            src={
              "https://res.cloudinary.com/dfjxig6z2/video/upload/v1717190167/Test/ts0zrfo8kcxdtttopfqp.mp4"
            }
            alt=""
            className="video-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductImages;
