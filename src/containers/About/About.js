import "./about.css";
import about from "../../assets/About.png";

const About = () => {
  return (
    <div className="lemon__about section__padding" id="about">
      <div className="lemon__about-text">
        <div className="lemon__about-text_top">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
        </div>
        <div className="lemon__about-text_bottom">
          <p>
            Little Lemon is a charming neighborhood bistro thatserves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily
            specials.
          </p>
        </div>
      </div>
      <div className="lemon__about-image">
        <img src={about} alt="restaurant" loading="lazy" />
      </div>
    </div>
  );
};

export default About;
