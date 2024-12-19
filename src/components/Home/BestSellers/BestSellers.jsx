import "./bestSellers.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import bg6 from "../../../assets/bg6.jpg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { makeRequest } from "../../../axios";
import { TailSpin } from "react-loader-spinner";
import { FaEye } from "react-icons/fa6";

const BestSellers = () => {
  const [ref, inView] = useInView();
  const { data: { data: products } = {}, isLoading } = useQuery({
    queryKey: ["BestSellerProducts"],
    queryFn: () => {
      return makeRequest.get(`/products/bestSellerProducts`);
    },
    enabled: inView,
  });
  const swiper = useSwiper();
  const navigate = useNavigate();
  return (
    <div className="bestSellers" ref={ref}>
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
            <img src={bg6} alt="" />
            <h3>
              SALE OFF <br /> UP TO 30%
            </h3>
          </div>
          <div>
            {isLoading ? (
              <div className="bestSellerLoader">
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
                grid={{
                  rows: 2,
                  fill: "row",
                }}
                breakpoints={{
                  668: {
                    slidesPerView: 3,
                  },
                  1500: {
                    slidesPerView: 4,
                  },
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
                  <SwiperSlide
                    key={i}
                    onClick={() =>
                      navigate(
                        `/collections/${product?.category}/${product?._id}`
                      )
                    }
                  >
                    <img src={product?.variants[0]?.image?.url} alt="" />
                    <div>
                      <div>
                        <h3>{product.title}</h3>
                        <p>BDT {product.price}</p>
                      </div>
                      <button
                        onClick={(e) =>
                          navigate(
                            `/collections/${product?.category}/${product?._id}`
                          )
                        }
                      >
                        <FaEye />
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
