import { ReactComponent as Vector } from "../../assets/star.svg";
import "./star.css";

const Star = ({ stars }) => {
  const maxStars = 5;
  return (
    <div className="stars">
      {[...Array(maxStars)].map((_, index) => (
        <div key={index} className={`star ${index < stars ? "star--full-opacity" : "star--light-opacity"}`}>
          <Vector />
        </div>
      ))}
    </div>
  );
};

export default Star;
