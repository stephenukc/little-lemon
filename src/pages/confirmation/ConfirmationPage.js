import React from "react";
import { Footer, Navbar } from "../../components";
import { BookingProvider } from "../booking/BookingContext";
import ConfirmedBooking from "./ConfirmedBooking/ConfirmedBooking";

const ConfirmationPage = () => {
  return (
    <BookingProvider>
      <Navbar />
      <ConfirmedBooking />
      <Footer />
    </BookingProvider>
  );
};

export default ConfirmationPage;
