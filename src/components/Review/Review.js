import Star from "../Star/Star";
import "./review.css";
import { ReactComponent as User } from "../../assets/User.svg";

const Review = ({ name, stars, totalReviews, review }) => {
  return (
    <div className="lemon__testimonials-reviews_review">
      <div className="lemon__testimonials-reviews_review-top">
        <div className="lemon__testimonials-reviews_review-top_stars">
          <Star stars={stars} />
        </div>
        <div className="lemon__testimonials-reviews_review-top_info">
          <User />
          <span>
            <h3>{name}</h3>
            <p>{totalReviews} reviews</p>
          </span>
        </div>
      </div>
      <div className="lemon__testimonials-reviews_review-review">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;
