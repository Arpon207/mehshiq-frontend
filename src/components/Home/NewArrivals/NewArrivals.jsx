import "./newArrivals.css";
import { Navigation, Pagination } from "swiper/modules";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Product from "../../Product/Product";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { TailSpin } from "react-loader-spinner";

const NewArrivals = () => {
  const { data: { data: products } = {}, isLoading } = useQuery({
    queryKey: ["newProducts"],
    queryFn: () => {
      return makeRequest.get(`/products/newArrivals`);
    },
  });
  const swiper = useSwiper();
  return (
    <div className="newArrivals container">
      <h5>WELCOME TO MEHSHIQ</h5>
      <h3>New Arrivals</h3>
      {isLoading ? (
        <div className="newArrivalsLoader">
          <TailSpin
            visible={isLoading}
            height="50"
            width="50"
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
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".NewArrivalsNextElBtn",
            prevEl: ".NewArrivalsPrevElBtn",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            668: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1550: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {products?.map((product, i) => (
            <SwiperSlide key={i}>
              <Product product={product} />
            </SwiperSlide>
          ))}

          <button
            className="NewArrivalsPrevElBtn"
            onClick={() => swiper.slidePrev()}
          >
            <GrFormPreviousLink />
          </button>
          <button
            className="NewArrivalsNextElBtn"
            onClick={() => swiper.slideNext()}
          >
            <GrFormNextLink />
          </button>
        </Swiper>
      )}
    </div>
  );
};

export default NewArrivals;
