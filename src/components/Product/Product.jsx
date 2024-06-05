import "./product.css";
import cartIcon from "../../assets/icons/add-to-cart.png";
import { useState } from "react";
import bag1 from "../../assets/bags/bag1.jpg";
import bag2 from "../../assets/bags/bag2.jpg";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { images, title, price, _id } = product;
  const [selectedImag, setSelectedImage] = useState(images[0]?.img);
  const navigate = useNavigate();

  return (
    <div className="product" onClick={() => navigate(`/collections/${_id}`)}>
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
