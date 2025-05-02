import { useEffect, useState } from "react";
import "./booking-form.css";

const BookingForm = ({
  formData,
  availableTimes,
  dispatch,
  timesDispatch,
  onSubmit,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "date":
        if (!value) {
          error = "Please select a date.";
        } else if (new Date(value) < new Date().setHours(0, 0, 0, 0)) {
          error = "Date cannot be in the past.";
        }
        break;
      case "time":
        if (!value) {
          error = "Please select a time.";
        }
        break;
      case "guests":
        const numGuests = parseInt(value, 10);
        if (!value) {
          error = "Please enter number of guests.";
        } else if (numGuests < 1 || numGuests > 10) {
          error = "Guests must be between 1 and 10.";
        }
        break;
      case "occasion":
        if (!value) {
          error = "Please select an occasion.";
        }
        break;
      default:
        break;
    }

    setFormErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_FIELD", field: "date", value });
    timesDispatch({ type: "update_times", date: value });
    validateField("date", value);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: id, value });
    validateField(id, value);
  };

  const resetForm = () => {
    dispatch({ type: "RESET_FORM" });
    setFormErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit();
    }
  };

  useEffect(() => {
    const isValid =
      formData.date &&
      new Date(formData.date) >= new Date().setHours(0, 0, 0, 0) &&
      formData.time &&
      formData.guests >= 1 &&
      formData.guests <= 10 &&
      formData.occasion &&
      Object.values(formErrors).every((err) => err === "");

    setIsFormValid(isValid);
  }, [formData, formErrors]);

  return (
    <div className="lemon__booking-forms_booking">
      <form
        className="lemon__booking-forms_booking-form"
        onSubmit={handleSubmit}
      >
        <legend>
          <h1 className="lemon__booking-forms-heading">Table Reservation</h1>
        </legend>

        <section className="lemon__booking-forms_booking-section">
          <div className="lemon__booking-forms_booking-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              required
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
              onChange={handleDateChange}
            />
            {formErrors.date && <p className="error">{formErrors.date}</p>}
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label htmlFor="time">Time</label>
            <select
              id="time"
              required
              value={formData.time}
              onChange={handleChange}
            >
              <option value="" disabled>
                Available times
              </option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {formErrors.time && <p className="error">{formErrors.time}</p>}
          </div>
        </section>

        <section className="lemon__booking-forms_booking-section">
          <div className="lemon__booking-forms_booking-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              placeholder="1"
              required
              value={formData.guests}
              onChange={handleChange}
            />
            {formErrors.guests && <p className="error">{formErrors.guests}</p>}
          </div>

          <div className="lemon__booking-forms_booking-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              required
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select occasion
              </option>
              <option value="BIRTHDAY">Birthday</option>
              <option value="ANNIVERSARY">Anniversary</option>
            </select>
            {formErrors.occasion && (
              <p className="error">{formErrors.occasion}</p>
            )}
          </div>
        </section>

        <div className="lemon__booking-forms-btn">
          <button
            type="reset"
            className="lemon__booking-forms_secondary-btn"
            onClick={resetForm}
          >
            Reset
          </button>

          <button
            type="submit"
            className="lemon__booking-forms_primary-btn"
            disabled={!isFormValid}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
