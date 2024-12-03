import { GoStar, GoStarFill } from "react-icons/go";
import "./productReviews.css";
import Rating from "react-rating";
import AllReviews from "./AllReviews";
import AddReview from "./AddReview";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { makeRequest } from "../../../axios";

const ProductReviews = () => {
  const { id } = useParams();
  const {
    data: { data } = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["productReviews", id],
    queryFn: () => {
      return makeRequest.get(`/reviews/all?product=${id}`);
    },
  });
  return (
    <div className="productReviews">
      <div className="productReviews-grid">
        <div className="productReviews-reviews">
          <AllReviews reviews={data} isLoading={isLoading} />
        </div>
        <div className="productReviews-addReview">
          <Suspense fallback={"loading..."}>
            <AddReview refetch={refetch} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
