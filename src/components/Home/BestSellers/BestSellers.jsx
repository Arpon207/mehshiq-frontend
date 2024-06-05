import "./bestSellers.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import cartIcon from "../../../assets/icons/shopping-bag.png";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const BestSellers = ({ products }) => {
  const swiper = useSwiper();
  return (
    <div className="bestSellers">
      <div className="container">
        <div className="bestSellers-header">
          <h3>Our Best Sellers</h3>
          <div>
            <button className="prevBtn" onClick={() => swiper.slidePrev()}>
              <GrFormPreviousLink />
            </button>
            <button className="nextBtn" onClick={() => swiper.slideNext()}>
              <GrFormNextLink />
            </button>
          </div>
        </div>
        <div className="bestSellers-container">
          <div className="bestSellers-sale">
            <h3>
              SALE OFF <br /> UP TO 30%
            </h3>
          </div>
          <div>
            <Swiper
              slidesPerView={4}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".nextBtn",
                prevEl: ".prevBtn",
              }}
              modules={[Grid, Pagination, Navigation]}
              className="mySwiper"
            >
              {products?.map((product, i) => (
                <SwiperSlide key={i}>
                  <img src={product.images[0]?.img} alt="" />
                  <div>
                    <div>
                      <h3>{product.title}</h3>
                      <p>BDT {product.price}</p>
                    </div>
                    <button>
                      <img src={cartIcon} alt="" />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
