import "./homeMensCollection.css";
import backpacks from "../../../assets/backpacks.jpeg";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Product from "../../Product/Product";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useInView } from "react-intersection-observer";
import { makeRequest } from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";

const HomeMensCollection = () => {
  const [ref, inView] = useInView();
  const { data: { data: products } = {}, isLoading } = useQuery({
    queryKey: ["mensProducts"],
    queryFn: () => {
      return makeRequest.get(`/products/backpacks`);
    },
    enabled: inView,
  });

  const swiper = useSwiper();

  return (
    <div className="homeMensCollection" ref={ref}>
      <div className="homeMensCollection-header">
        <h3>Backpacks Collection</h3>
        <div>
          <button className="MensPrevElBtn" onClick={() => swiper.slidePrev()}>
            <GrFormPreviousLink />
          </button>
          <button className="MenesNextElBtn" onClick={() => swiper.slideNext()}>
            <GrFormNextLink />
          </button>
        </div>
      </div>
      <div className="homeMensCollection-container">
        <div className="men-collection-banner">
          <img src={backpacks} alt="" />
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
              nextEl: ".MenesNextElBtn",
              prevEl: ".MensPrevElBtn",
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
        )}
      </div>
    </div>
  );
};

export default HomeMensCollection;
