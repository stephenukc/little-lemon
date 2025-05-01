import "./booking-form.css";

const BookingForm = ({
  formData,
  availableTimes,
  dispatch,
  timesDispatch,
  onSubmit,
}) => {
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch({ type: "UPDATE_FIELD", field: "date", value: selectedDate });
    timesDispatch({ type: "update_times", date: selectedDate });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: id, value });
  };

  const resetForm = () => {
    dispatch({ type: "RESET_FORM" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

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
              value={formData.date}
              onChange={handleDateChange}
            />
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

          <button type="submit" className="lemon__booking-forms_primary-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
