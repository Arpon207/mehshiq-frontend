import "./productImages.css";

import { FaRegCirclePlay } from "react-icons/fa6";
import { useState } from "react";

const ProductImages = ({ setShowPopup, images }) => {
  const [selectedImage, setSelectedImage] = useState({
    type: "image",
    image: images[0]?.img,
  });
  return (
    <div className="productPage-images">
      <div className="div1">
        <img
          src={images[0]?.img}
          alt=""
          onClick={() =>
            setSelectedImage({
              ...selectedImage,
              type: "image",
              image: images[0]?.img,
            })
          }
        />
      </div>
      <div className="div2">
        {selectedImage.type === "image" ? (
          <img src={selectedImage?.image} alt="" />
        ) : (
          <div className="productPage-video">
            <button onClick={() => setShowPopup(true)}>
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
          </div>
        )}
      </div>
      <div className="div3">
        <img
          src={images[1]?.img}
          alt=""
          onClick={() =>
            setSelectedImage({
              ...selectedImage,
              type: "image",
              image: images[1]?.img,
            })
          }
        />
      </div>
      <div className="div4">
        <img
          src={images[2]?.img}
          alt=""
          onClick={() =>
            setSelectedImage({
              ...selectedImage,
              type: "image",
              image: images[2]?.img,
            })
          }
        />
      </div>
      <div className="div5">
        <div
          className="productPage-video"
          onClick={() =>
            setSelectedImage({
              ...selectedImage,
              type: "video",
              image:
                "https://res.cloudinary.com/dfjxig6z2/video/upload/v1717190167/Test/ts0zrfo8kcxdtttopfqp.mp4",
            })
          }
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
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
