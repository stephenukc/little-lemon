import "./review-page.css";
import "../../Booking/booking.css";
import { ReactComponent as Lemon } from "../../../assets/Logo_lemon.svg";
import table from "../../../assets/table.jpg";
import { useContext } from "react";
import { BookingContext } from "../../../containers/BookingPage/BookingContext";

const ReviewPage = ({ onBack, onNext }) => {
  const { bookingData } = useContext(BookingContext);
  return (
    <div className="lemon__booking-forms_review">
      <h1 className="lemon__booking-forms-heading">Review the Details</h1>
      <section className="lemon__booking-forms_review-group">
        <article className="lemon__booking-forms_review-left" style={{ backgroundImage: `url(${table})` }}>
          <figcaption>
            <div>
              <h4>Happy {bookingData.occasion}</h4>
              <p>From Little Lemon</p>
            </div>
            <div>
              <Lemon />
            </div>
          </figcaption>
        </article>
        <article className="lemon__booking-forms_review-right">
          <p>
            <b>Reservation for: </b> <span>{bookingData.name}</span>
          </p>
          <p>
            <b>No. of Guests: </b> <span>{bookingData.guests}</span>
          </p>
          <p>
            <b>Date: </b>
            <span>
              {bookingData.date} <strong>@</strong> {bookingData.time}
            </span>
          </p>
          <p>
            <b>Mobile: </b> <span>+91 {bookingData.mobile}</span>
          </p>
          <p>
            <b>Email: </b> <span>{bookingData.email}</span>
          </p>
        </article>
      </section>
      <section className="lemon__booking-forms-btn">
        <button className="lemon__booking-forms_secondary-btn" onClick={onBack}>
          Back
        </button>
        <button className="lemon__booking-forms_primary-btn" onClick={onNext}>
          Continue
        </button>
      </section>
    </div>
  );
};

export default ReviewPage;
