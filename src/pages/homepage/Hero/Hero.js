import { Link } from "react-router-dom";
import foodImage from "../../../assets/restauranfood.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="lemon__hero section__padding">
      <div className="lemon__hero-text">
        <div className="lemon__hero-text_head">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
        </div>

        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button className="lemon-btn">Reserve a Table</button>
        </Link>
      </div>
      <div className="lemon__hero-image">
        <img src={foodImage} alt="Food-1" />
      </div>
    </div>
  );
};

export default Hero;
