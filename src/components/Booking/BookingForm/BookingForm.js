import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ReactSVG } from "react-svg";
import "./booking-form.css";
import "../../Booking/booking.css";
import { BookingContext } from "../../../containers/BookingPage/BookingContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import correct from "../../../assets/correct.svg";
import alert from "../../../assets/alert.svg";

const schema = yup.object().shape({
  name: yup.string().required(),
  occasion: yup.string().required(),
  time: yup.string().required(),
  date: yup.string().required(),
  guests: yup.number().max(10).min(1).required(),
  mobile: yup.string().length(10).required(),
  email: yup.string().required().email(),
});

const BookingForm = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { updateBookingData } = useContext(BookingContext);
  const [isSubmit, setIsSubmit] = useState(false);

  const showStyle = {
    display: "block",
  };

  const renderValidationIcon = (fieldName) => {
    const hasFieldError = errors[fieldName];

    if (isSubmit && !hasFieldError) {
      return <ReactSVG src={correct} className="lemon__booking-forms-correct" style={showStyle} />;
    } else if (isSubmit && hasFieldError) {
      return <ReactSVG src={alert} className="lemon__booking-forms-alert" style={showStyle} />;
    }

    return null;
  };

  const availableTimes = ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];

  const submitFun = (data) => {
    updateBookingData(data);
    onNext();
  };

  return (
    <div className="lemon__booking-forms_booking">
      <form className="lemon__booking-forms_booking-form" onSubmit={handleSubmit(submitFun)}>
        <legend>
          <h1 className="lemon__booking-forms-heading">Reservation of Table</h1>
        </legend>

        <section className="lemon__booking-forms_booking-section">
          <div className="lemon__booking-forms_booking-group">
            <label>
              <span style={{ color: "red", fontWeight: "800" }}>* </span>Name:
            </label>
            <input type="text" placeholder="Full Name" {...register("name")} />
            {renderValidationIcon("name")}
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label>
              <span style={{ color: "red", fontWeight: "800" }}>* </span>Occasion:
            </label>
            <select {...register("occasion")}>
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {renderValidationIcon("occasion")}
          </div>
        </section>

        <section className="lemon__booking-forms_booking-section">
          <div className="lemon__booking-forms_booking-group">
            <label>
              <span style={{ color: "red", fontWeight: "800" }}>* </span>Date:
            </label>
            <input type="date" placeholder="Date" {...register("date")} />
            {renderValidationIcon("date")}
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label>
              <span style={{ color: "red", fontWeight: "800" }}>* </span>Time:
            </label>
            <select {...register("time")}>
              <option value="">Timeslots</option>
              {availableTimes.map((times) => (
                <option value={times} key={times}>
                  {times}
                </option>
              ))}
            </select>
            {renderValidationIcon("time")}
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label>
              <span style={{ color: "red", fontWeight: "800" }}>* </span>No. of Guests:
            </label>
            <select {...register("guests")}>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            {renderValidationIcon("guests")}
          </div>
        </section>

        <section className="lemon__booking-forms_booking-section">
          <div className="lemon__booking-forms_booking-group">
            <label>
              <span style={{ color: "red", fontWeight: "800" }}>* </span>Mobile:
            </label>
            <input type="tel" placeholder="Mobile" {...register("mobile")} />
            {renderValidationIcon("mobile")}
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label>
              <span style={{ color: "red", fontWeight: "800" }}>* </span>Email:
            </label>
            <input type="email" placeholder="Email" {...register("email")} />
            {renderValidationIcon("email")}
          </div>
        </section>

        {/* Button */}
        <div className="lemon__booking-forms-btn">
          <button type="reset" className="lemon__booking-forms_secondary-btn">
            Reset
          </button>

          <button type="submit" className="lemon__booking-forms_primary-btn" onClick={() => setIsSubmit(true)}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
