import { useContext } from "react";
import { BookingContext } from "../../../containers/BookingPage/BookingContext";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import "./final-page.css";
import "../../Booking/booking.css";
import success from "../../../assets/success.svg";

const FinalPage = () => {
  const { bookingData } = useContext(BookingContext);
  const reservationId = Date.now() + Math.floor(Math.random() * 10);

  return (
    <div className="lemon__booking-forms_final">
      <ReactSVG src={success} />
      <section>
        <p>
          <b>Congratulations on your successful table reservation!</b>
        </p>
        <p>
          Your Reservation ID is <b>{reservationId}</b>, and your table is reserved for <b>{bookingData.date}</b> at <b>{bookingData.time}</b>.
        </p>
        <p>Get ready to indulge in a delightful dining experience! We have sent the reservation details to your email and mobile number. Enjoy your meal!</p>
      </section>
      <Link to="/home">
        <button className="lemon-btn">Home</button>
      </Link>
    </div>
  );
};

export default FinalPage;
