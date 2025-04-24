import "./special.css";
import { ReactComponent as ReactLogo } from "../../assets/delivery.svg";

const Special = (props) => {
  return (
    <div className="lemon__highlights-specials_special">
      <div className="lemon__highlights-specials_special-image">
        <img src={props.image} alt={props.name} loading="lazy" />
      </div>
      <div className="lemon__highlights-specials_special-content">
        <div className="lemon__highlights-specials_special-content-top">
          <h4>{props.name}</h4>
          <p className="lemon__highlights-specials_special-content-top_rate">${props.rate}</p>
        </div>
        <p className="lemon__highlights-specials_special-content-middle">{props.description}</p>
        <div className="lemon__highlights-specials_special-content-bottom">
          <h5>Order a delivery</h5>
          <ReactLogo className="lemon__highlights-specials_special-content-svg" />
        </div>
      </div>
    </div>
  );
};

export default Special;
