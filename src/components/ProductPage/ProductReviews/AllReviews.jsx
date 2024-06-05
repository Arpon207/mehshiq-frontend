import Rating from "react-rating";
import { reviews } from "../../../constants/reviews";
import { GoStarFill } from "react-icons/go";

const AllReviews = () => {
  return (
    <div className="allReviews">
      <h3>Customer Reviews (5)</h3>
      <div className="totalRatings">
        <Rating
          emptySymbol={<GoStarFill className="clr-black" />}
          fullSymbol={<GoStarFill className="clr-orange" />}
          initialRating={4}
        />
        <p>5.00 out of 5.00 Based on 5 reviews</p>
      </div>
      {reviews.map((review) => (
        <div className="review">
          <div className="review-flex">
            <div>
              <span className="avatar">{review.name.slice(0, 1)}</span>
              <div>
                <strong>{review.name}</strong>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <Rating
              emptySymbol={<GoStarFill className="clr-black" />}
              fullSymbol={<GoStarFill className="clr-orange" />}
              initialRating={review.rating}
            />
          </div>
          <p className="customer-review">{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
