import "./product.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

const Product = ({ product }) => {
  const { variants, title, price, _id, category } = product;
  const [selectedImag, setSelectedImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedImage(variants[0]?.image.url);
  }, [product]);

  return (
    <div
      className="product"
      onClick={() => {
        navigate(`/collections/${category}/${_id}`);
      }}
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
            {variants?.map(({ image }, i) => (
              <img
                key={i}
                src={image.url}
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(image.url);
                }}
                className={`${selectedImag === image.url && "image-selected"}`}
              />
            ))}
          </div>
          <button
            title="View Product"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/collections/${category}/${_id}`);
            }}
          >
            <FaEye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
