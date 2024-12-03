import { useNavigate, useParams } from "react-router-dom";
import "./productPage.css";
import { products } from "../../constants/products";
import Rating from "react-rating";
import { GoStar, GoStarFill } from "react-icons/go";
import insta from "../../assets/icons/instagram.png";
import link from "../../assets/icons/link.png";
import messenger from "../../assets/icons/messenger.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import facebook from "../../assets/icons/facebook (3).png";
import { useState } from "react";
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
import useFetch from "../../hooks/useFetch";
import RecommendedProducts from "../../components/ProductPage/RecommendedProducts/RecommendedProducts";
import Loader from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../../redux/cartReducer";

const ProductPage = () => {
  const [counter, setCounter] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPageUrl = window.location.href;
  const { data: product, isLoading } = useFetch(
    "product",
    `/products/product/${id}`
  );

  const { images, title, price, colors, category, _id } = product || {};

  const [selectedTab, setSelectedTab] = useState(1);

  const [showPopup, setShowPopup] = useState(false);

  const linkCopy = () => {
    copy(currentPageUrl);
  };

  const dispatch = useDispatch();

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="productPage">
          <div className="productPage-grid">
            <ProductImages setShowPopup={setShowPopup} images={images} />
            <div className="productPage-details">
              <h3 className="productPage-title">Stylish {title}</h3>
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
              <div className="productPage-colors">
                <strong>Available Colors:</strong>
                <div className="colors">
                  {colors?.map((color, i) => (
                    <div key={i} className="color clr1">
                      <span></span>
                      <p>{color.toUpperCase()}</p>
                    </div>
                  ))}
                </div>
              </div>
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
                    dispatch(
                      addToCart({
                        img: images[0]?.img,
                        title,
                        price,
                        _id,
                        quantity: counter,
                      })
                    );
                    dispatch(openCart());
                  }}
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() =>
                    navigate("/checkout", {
                      state: {
                        img: images[0]?.img,
                        title,
                        price,
                        _id,
                        quantity: counter,
                      },
                    })
                  }
                >
                  BUY NOW
                </button>
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
                  <span>Woman Bags</span>
                  <span>Hand Bags</span>
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
          {selectedTab === 1 && <ProductDesc />}
          {selectedTab === 2 && <ProductReviews />}

          <RecommendedProducts category={category} />

          {showPopup && <PlayerPopup setShowPopup={setShowPopup} />}
        </div>
      )}
    </>
  );
};

export default ProductPage;
