import { useRef, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Rating from "react-rating";
import imageCompression from "browser-image-compression";

const AddReview = () => {
  const fileInputRef = useRef();
  const handleReviewSubmit = (e) => {
    e.preventDefault();
  };

  const [previewImages, setPreviewImages] = useState([]);

  const handleOnChange = async (file) => {
    if (!file) return;

    const option = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, option);

    console.log(`compressedFile size ${compressedFile.size / 1024} kb`);

    const reader = new FileReader();
    reader.readAsDataURL(compressedFile);
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

  return (
    <div className="addReview">
      <h3>Add Review</h3>
      <p>
        Your email address will not be published. Required fields are marked
      </p>
      <form action="" onSubmit={handleReviewSubmit}>
        <div className="rating-input">
          <label htmlFor="rating">Your rating : </label>
          <Rating
            emptySymbol={<GoStarFill className="clr-black" />}
            fullSymbol={<GoStarFill className="clr-orange" />}
            initialRating={0}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="review">Your review *</label>
          <textarea name="review" id="review" rows={5}></textarea>
        </div>
        <div className="clientInfo">
          <div className="inputWrapper">
            <label htmlFor="name">Your name *</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Your name *</label>
            <input type="email" name="email" id="email" />
          </div>
        </div>
        <div className="inputWrapper upload-pictures">
          <label htmlFor="">
            Pictures <small>(optional, max 3)</small>
          </label>
          <div>
            <div>
              <button
                onClick={() => fileInputRef.current.click()}
                disabled={previewImages.length > 2}
              >
                <MdOutlineFileUpload />
              </button>
              <input
                type="file"
                onChange={(e) => handleOnChange(e.target.files[0])}
                name=""
                id="picture"
                ref={fileInputRef}
              />
            </div>
            {previewImages.length > 0 &&
              previewImages.map((image, i) => (
                <div className="uploaded-pictures">
                  <button onClick={() => handleDelete(i)}>
                    <RxCross1 />
                  </button>
                  <img src={image} alt="" />
                </div>
              ))}
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
