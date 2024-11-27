import "./product.css";
import cartIcon from "../../assets/icons/add-to-cart.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../../redux/cartReducer";

const Product = ({ product }) => {
  const { images, title, price, _id, category } = product;
  const [selectedImag, setSelectedImage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedImage(images[0]?.img);
  }, [product]);

  return (
    <div
      className="product"
      onClick={() => navigate(`/collections/${category}/${_id}`)}
    >
      <div>
        <img src={selectedImag} alt="" />
      </div>
      <div className="productInfo">
        <div>
          <p>{title}</p>
          <p className="price">BDT {price}.00</p>
        </div>
        <div className="bottom">
          <div className="product-images">
            {images?.map(({ img }, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(img);
                }}
                className={`${selectedImag === img && "image-selected"}`}
              />
            ))}
          </div>
          <button
            title="Add to cart"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                addToCart({
                  img: images[0]?.img,
                  title,
                  price,
                  _id,
                  quantity: 1,
                })
              );
              dispatch(openCart());
            }}
          >
            <img src={cartIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
