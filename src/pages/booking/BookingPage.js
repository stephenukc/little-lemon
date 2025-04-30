import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import "./booking-page.css";
import { BookingProvider } from "./BookingContext";
import BookingForm from "./BookingForm/BookingForm";

const BookingPage = () => {
  return (
    <BookingProvider>
      <MainLayout>
        <div className="lemon__booking-forms">
          <BookingForm />
        </div>
      </MainLayout>
    </BookingProvider>
  );
};

export default BookingPage;
