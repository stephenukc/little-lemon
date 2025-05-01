import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import success from "../../../assets/success.svg";
import "./confirmed-booking.css";

export default function ConfirmedBooking({ submittedData }) {
  const reservationId = Date.now();

  if (!submittedData) {
    return (
      <div className="confirmation-container">
        <p>Error: No booking data found. Please return to the booking page.</p>
        <Link to="/booking">
          <button className="confirmation-button">Go to Booking</button>
        </Link>
      </div>
    );
  }

  const { date, time } = submittedData;

  return (
    <div className="confirmation-container">
      <ReactSVG src={success} className="confirmation-icon" />
      <section className="confirmation-content">
        <p>
          <strong>Congratulations on your successful table reservation!</strong>
        </p>
        <p>
          Your Reservation ID is <strong>{reservationId}</strong>, and your
          table is reserved for <strong>{date}</strong> at{" "}
          <strong>{time}</strong>.
        </p>
        <p>
          Get ready to indulge in a delightful dining experience! We have sent
          the reservation details to your email and mobile number. Enjoy your
          meal!
        </p>
        <Link to="/">
          <button className="confirmation-button">Home</button>
        </Link>
      </section>
    </div>
  );
}
