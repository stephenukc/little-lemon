import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import success from "../../../assets/success.svg";
import "./confirmed-booking.css";

export default function ConfirmedBooking() {
  const reservationId = Date.now();
  const reservationDate = "2025-05-03";
  const reservationTime = "7:00 PM";

  return (
    <div className="confirmation-container">
      <ReactSVG src={success} className="confirmation-icon" />
      <section className="confirmation-content">
        <p>
          <strong>Congratulations on your successful table reservation!</strong>
        </p>
        <p>
          Your Reservation ID is <strong>{reservationId}</strong>, and your
          table is reserved for <strong>{reservationDate}</strong> at{" "}
          <strong>{reservationTime}</strong>.
        </p>
        <p>
          Get ready to indulge in a delightful dining experience! We have sent
          the reservation details to your email and mobile number. Enjoy your
          meal!
        </p>
        <Link to="/home">
          <button className="confirmation-button">Home</button>
        </Link>
      </section>
    </div>
  );
}
