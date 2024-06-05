import { GoStar, GoStarFill } from "react-icons/go";
import "./productReviews.css";
import Rating from "react-rating";
import AllReviews from "./AllReviews";
import AddReview from "./AddReview";

const ProductReviews = () => {
  return (
    <div className="productReviews">
      <div className="productReviews-grid">
        <div className="productReviews-reviews">
          <AllReviews />
        </div>
        <div className="productReviews-addReview">
          <AddReview />
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
