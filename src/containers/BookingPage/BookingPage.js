import React from "react";
import { BookingForm, Navbar } from "../../components";
import "./booking-page.css";
import { BookingProvider } from "./BookingContext";

const BookingPage = () => {
  return (
    <div>
      <BookingProvider>
        <Navbar />
        <div className="lemon__booking section__padding">
          <div className="lemon__booking-forms">
            <BookingForm />
          </div>
        </div>
      </BookingProvider>
    </div>
  );
};

export default BookingPage;
