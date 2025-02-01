import { useNavigate, useParams } from "react-router-dom";
import "./productPage.css";
import Rating from "react-rating";
import { GoStar, GoStarFill } from "react-icons/go";
import insta from "../../assets/icons/instagram.png";
import link from "../../assets/icons/link.png";
import messenger from "../../assets/icons/messenger.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import facebook from "../../assets/icons/facebook (3).png";
import { useEffect, useState } from "react";
import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";
import copy from "copy-to-clipboard";
import PlayerPopup from "../../components/ProductPage/PlayerPopup/PlayerPopup";
import ProductImages from "../../components/ProductPage/ProductImages/ProductImages";
import ProductPageTabs from "../../components/ProductPage/ProductPageTabs/ProductPageTabs";
import ProductDesc from "../../components/ProductPage/ProductDesc/ProductDesc";
import ProductReviews from "../../components/ProductPage/ProductReviews/ProductReviews";
import RecommendedProducts from "../../components/ProductPage/RecommendedProducts/RecommendedProducts";
import Loader from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../../redux/cartReducer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Thumbs } from "swiper/modules";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const ProductPage = () => {
  const [selectedVariant, setSelectedVariant] = useState({});
  const [counter, setCounter] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPageUrl = window.location.href;
  const [errorMessage, setErrorMessage] = useState("");

  const { data: { data: product } = {}, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => {
      return makeRequest.get(`/products/product/${id}`);
    },
    catchTime: 0,
  });

  const { variants, title, price, colors, category, _id, tags } = product || {};

  const [thumbsSwiper, setThumbsSwiper] = useState();

  const [selectedTab, setSelectedTab] = useState(1);

  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const linkCopy = () => {
    copy(currentPageUrl);
  };

  useEffect(() => {
    if (product?.variants?.length === 1) {
      setSelectedVariant(product?.variants[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedVariant.image) {
      setErrorMessage("Please choose a color variant you want to purchase.");
      return;
    }
    const uniqueKey = `${selectedVariant.image.public_id + _id}`;
    dispatch(
      addToCart({
        uniqueKey,
        variant: {
          image: selectedVariant.image,
          color: selectedVariant.colorName,
        },
        title,
        price,
        _id,
        quantity: counter,
      })
    );
    setCounter(1);
    setSelectedVariant({});
    dispatch(openCart());
  };

  const handleBuyNow = () => {
    if (!selectedVariant.image) {
      setErrorMessage("Please choose a color variant you want to purchase.");
      return;
    }
    const uniqueKey = `${selectedVariant.image.public_id + _id}`;
    navigate("/checkout", {
      state: {
        uniqueKey,
        variant: {
          image: selectedVariant.image,
          color: selectedVariant.colorName,
        },
        title,
        price,
        _id,
        quantity: counter,
      },
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="productPage">
          <div className="productPage-grid">
            <div>
              {variants && (
                <div className="productPage-images">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {variants?.map(({ image }, i) => (
                      <SwiperSlide key={i}>
                        <img src={image.url} alt="" />
                      </SwiperSlide>
                    ))}
                    {/* <SwiperSlide
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
                    </SwiperSlide> */}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={16 / 2}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {variants?.map(({ image }, i) => (
                      <SwiperSlide key={i}>
                        <img src={image.url} alt="" />
                      </SwiperSlide>
                    ))}
                    {/* <SwiperSlide className="productPage-video">
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
                    </SwiperSlide> */}
                  </Swiper>
                </div>
              )}
            </div>
            <div className="productPage-details">
              <h3 className="productPage-title">{title}</h3>
              <p className="productPage-category">{category}</p>
              <div className="productPage-rating">
                <Rating
                  emptySymbol={<GoStar />}
                  fullSymbol={<GoStarFill />}
                  initialRating={4}
                />
              </div>
              <h3 className="productPage-price">BDT {price}</h3>
              <p className="productPage-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis repellendus labore maiores recusandae inventore
                blanditiis eaque aperiam sapiente, harum fugiat.
              </p>
              <div className="productPage-variants">
                <strong>Color: {selectedVariant?.colorName}</strong>
                <div className="variants">
                  {variants.map((variant, i) => (
                    <img
                      src={variant?.image.url}
                      alt=""
                      onClick={() => {
                        setSelectedVariant(variant);
                        setErrorMessage("");
                      }}
                      className={`${
                        variant === selectedVariant && "variant-selected"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="purchase-container">
                <div className="productPage-quantity">
                  <p>{counter}</p>
                  <div>
                    <button
                      className="minus"
                      disabled={counter === 1}
                      onClick={() => setCounter((prev) => prev - 1)}
                    >
                      -
                    </button>
                    <button
                      className="plus"
                      onClick={() => setCounter((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleAddToCart();
                  }}
                >
                  ADD TO CART
                </button>
                <button onClick={() => handleBuyNow()}>BUY NOW</button>
              </div>
              <p className="estimatedDelivery">
                <strong>Estimated Delivery:</strong> Friday, May 31 - Tuesday,
                Jun 04
              </p>
              <p className="productPage-sku">
                <strong>SKU:</strong> 12315143dfa
              </p>
              <p className="productPage-tags">
                <strong>TAGS:</strong>
                <div>
                  {tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </p>
              <div className="productPage-share">
                <strong>Share:</strong>
                <div>
                  <button onClick={() => linkCopy()}>
                    <img src={link} alt="" />
                  </button>
                  <FacebookShareButton url={currentPageUrl}>
                    <img src={facebook} alt="" />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton url={currentPageUrl}>
                    <img src={messenger} alt="" />
                  </FacebookMessengerShareButton>
                  <WhatsappShareButton url={currentPageUrl}>
                    <img src={whatsapp} alt="" />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
          </div>
          <ProductPageTabs
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          {selectedTab === 1 && (
            <ProductDesc desc={product?.description} video={product?.video} />
          )}
          {selectedTab === 2 && <ProductReviews />}

          <RecommendedProducts category={category} />

          {showPopup && <PlayerPopup setShowPopup={setShowPopup} />}
        </div>
      )}
    </>
  );
};

export default ProductPage;
