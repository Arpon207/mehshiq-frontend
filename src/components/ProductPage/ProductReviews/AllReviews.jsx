import Rating from "react-rating";
import { GoStarFill } from "react-icons/go";
import { TailSpin } from "react-loader-spinner";
import moment from "moment";

const AllReviews = ({ reviews, isLoading }) => {
  let totalRating = 0;
  reviews?.forEach((element) => {
    totalRating = totalRating + element.rating;
  });
  return (
    <div className="allReviews">
      <h3>Customer Reviews ({reviews?.length || 0})</h3>
      {isLoading ? (
        <div className="reviewLoader">
          <TailSpin
            visible={isLoading}
            height="40"
            width="40"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : reviews.length > 0 ? (
        <>
          <div className="totalRatings">
            <Rating
              emptySymbol={<GoStarFill className="clr-black" />}
              fullSymbol={<GoStarFill className="clr-orange" />}
              initialRating={(totalRating / reviews?.length).toFixed(1)}
              fractions={10}
              readonly
            />
            <p>
              {(totalRating / reviews?.length).toFixed(1)} out of 5.00 Based on{" "}
              {reviews?.length} reviews
            </p>
          </div>
          {reviews?.map((review) => (
            <div className="review">
              <div className="review-flex">
                <div>
                  <span className="avatar">{review?.name?.slice(0, 1)}</span>
                  <div>
                    <strong>{review?.name}</strong>
                    <p className="review-date">
                      {moment(review.createdAt).format("LLL")}
                    </p>
                  </div>
                </div>
                <Rating
                  emptySymbol={<GoStarFill className="clr-black" />}
                  fullSymbol={<GoStarFill className="clr-orange" />}
                  initialRating={review?.rating}
                  readonly
                />
              </div>
              <p className="customer-review">{review?.review}</p>
              {review?.images && (
                <div className="reviewImages">
                  {review?.images?.map(({ url }) => (
                    <img src={url} alt="" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="noReview">There are no reviews yet.</div>
      )}
    </div>
  );
};

export default AllReviews;
