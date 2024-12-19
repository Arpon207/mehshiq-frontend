import useFetch from "../../../hooks/useFetch";
import "./recommendedProducts.css";
import Product from "../../Product/Product";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { makeRequest } from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const RecommendedProducts = () => {
  const { category } = useParams();

  const { data: { data: { result } = {} } = {} } = useQuery({
    queryKey: ["recommendedProducts", category],
    queryFn: () => {
      return makeRequest.get(
        `/products/productsByCategory?category=${category}`
      );
    },
    catchTime: 0,
  });

  return (
    <div className="recommendedProducts">
      <h3>Recommended Products</h3>
      <div className="recommendedProducts-productsContainer">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            1550: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {result?.map((product, i) => (
            <SwiperSlide key={i}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedProducts;
