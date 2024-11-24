import useFetch from "../../../hooks/useFetch";
import "./recommendedProducts.css";
import Product from "../../Product/Product";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const RecommendedProducts = ({ category }) => {
  const { data: { result } = {} } = useFetch(
    "recommendedProducts",
    `/products/productsByCategory?category=${category}`
  );

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
