import { useContext } from "react";
import { BookingContext } from "../../../containers/BookingPage/BookingContext";
import "./payment-form.css";
import "../../Booking/booking.css";
import { ReactComponent as GooglePay } from "../../../assets/google_pay.svg";
import { ReactComponent as PhonePe } from "../../../assets/phone_pe.svg";
import { ReactComponent as Paytm } from "../../../assets/paytm.svg";

const PaymentForm = ({ onBack, onNext }) => {
  const { bookingData } = useContext(BookingContext);
  const bill = {
    charges: 100,
    guests: bookingData.guests,
    totalCharge: 100 * bookingData.guests,
    discount: 10 * bookingData.guests,
    total: 100 * bookingData.guests - 10 * bookingData.guests,
  };
  return (
    <div>
      <h1 className="lemon__booking-forms-heading">Payments Selection</h1>

      <div className="lemon__booking-forms_payment">
        <section className="lemon__booking-forms_payment-sections">
          <article className="lemon__booking-forms_payment-icons">
            <GooglePay />
            <PhonePe />
            <Paytm />
          </article>

          <p>or pay using Credit / Debit Card</p>

          <article className="lemon__booking-forms_payment-card">
            <div>
              <label>Card Number</label>
              <input type="text" placeholder="0000 0000 0000 0000" />
            </div>

            <div>
              <label>Card Holder Full Name</label>
              <input type="text" placeholder="Card Holder Full Name" />
            </div>

            <div>
              <section>
                <label>Expiry Date</label>
                <input type="text" placeholder="01/23" />
              </section>

              <section>
                <label>CVV</label>
                <input type="password" placeholder="000" />
              </section>
            </div>
          </article>
        </section>
        <section className="lemon__booking-forms_payment-details">
          <h4>Payment Details</h4>
          <div>
            <p>Reservation Charge</p>
            <p>Rs. {bill.charges}</p>
          </div>

          <div>
            <p>No. of Guests</p>
            <p>{bill.guests}</p>
          </div>

          <div>
            <p>Total Charges</p>
            <p>Rs. {bill.totalCharge}</p>
          </div>

          <div>
            <p>Discount</p>
            <p>-Rs. {bill.discount}</p>
          </div>

          <article>
            <hr />
            <div>
              <p>Amount to be paid</p>
              <p style={{ fontWeight: "800" }}>Rs. {bill.total}</p>
            </div>
          </article>
        </section>
      </div>

      <div className="lemon__booking-forms-btn">
        <button className="lemon__booking-forms_secondary-btn" onClick={onBack}>
          Back
        </button>
        <button className="lemon__booking-forms_primary-btn" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
