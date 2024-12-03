import { useEffect, useRef, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Rating from "react-rating";
import imageCompression from "browser-image-compression";
import { makeRequest } from "../../../axios";
import { useParams } from "react-router-dom";

const AddReview = ({ refetch }) => {
  const { id } = useParams();
  const fileInputRef = useRef();
  const formRef = useRef();
  const [previewImages, setPreviewImages] = useState([]);
  const [rating, setRating] = useState(0);
  const [isLoading, setIsloading] = useState(false);

  const handleOnChange = async (file) => {
    if (!file) return;

    const option = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, option);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImages([...previewImages, reader.result]);
    };
  };

  const handleDelete = (index) => {
    const newArray = [
      ...previewImages.slice(0, index),
      ...previewImages.slice(index + 1),
    ];
    setPreviewImages(newArray);
  };

  const handleReviewSubmit = async (e) => {
    setIsloading(true);
    e.preventDefault();
    const review = e.target.review.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const reviewData = {
      product: id,
      review,
      name,
      email,
      rating,
      previewImages,
    };
    const { data } = await makeRequest.post("/reviews/addReview", reviewData);
    if (data) {
      refetch();
      formRef.current.reset();
      setPreviewImages([]);
      setRating(0);
      setIsloading(false);
    }
    setIsloading(false);
  };

  console.log(isLoading);

  return (
    <div className="addReview">
      <h3>Add Review</h3>
      <p>
        Your email address will not be published. Required fields are marked
      </p>
      <form ref={formRef} action="" onSubmit={handleReviewSubmit}>
        <div className="rating-input">
          <label htmlFor="rating">Your rating : </label>
          <Rating
            emptySymbol={<GoStarFill className="clr-black" />}
            fullSymbol={<GoStarFill className="clr-orange" />}
            initialRating={rating}
            onClick={(data) => setRating(data)}
            required
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="review">Your review *</label>
          <textarea name="review" id="review" rows={5} required></textarea>
        </div>
        <div className="clientInfo">
          <div className="inputWrapper">
            <label htmlFor="name">Your name *</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Your email *</label>
            <input type="email" name="email" id="email" required />
          </div>
        </div>
        <div className="inputWrapper upload-pictures">
          <label htmlFor="">
            Pictures <small>(optional, max 3)</small>
          </label>
          <div>
            <div>
              <button
                type="button"
                onClick={(e) => {
                  fileInputRef.current.click();
                }}
                disabled={previewImages.length > 2}
              >
                <MdOutlineFileUpload />
              </button>
              <input
                type="file"
                onChange={(e) => {
                  handleOnChange(e.target.files[0]);
                }}
                name=""
                id="picture"
                ref={fileInputRef}
              />
            </div>
            {previewImages.length > 0 &&
              previewImages.map((image, i) => (
                <div key={i} className="uploaded-pictures">
                  <button onClick={() => handleDelete(i)}>
                    <RxCross1 />
                  </button>
                  <img src={image} alt="" />
                </div>
              ))}
          </div>
        </div>
        <button className="submit-btn" type="submit">
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddReview;
